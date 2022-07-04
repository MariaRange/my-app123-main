import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import { FirebaseApp } from 'firebase/app';
import {getStorage, ref, uploadString, listAll, getDownloadURL } from "firebase/storage";
import {signOut, getAuth } from "firebase/auth";

import * as Permissions from "expo-permissions"
import * as ImagePicker from "expo-image-picker"

export default function Subir({navigation}) {

    const [imagen, setImagen] = useState('');
    
    const auth = getAuth();
    const storage = getStorage();

    const listRef = ref(storage, 'imagenes/');

    const Ver = () => {
    // Find all the prefixes and items.
    listAll(listRef)
    .then((res) => {
        res.items.forEach((itemRef) => {
            console.log(itemRef);

        });
    }).catch((error) => {
        console.log(error);
    });
    }
    

    const subirImagen = async (uri) => {
        const response = await fetch(uri);
        const blob = await response;
        console.log(blob)

        const storage = getStorage();
        const rand = Math.random()* 5;
        const storageRef = ref(storage, `imagenes/imagen_${rand}.png`);

        uploadString(storageRef, blob.url, 'data_url').then((snapshot) => {
            console.log(snapshot)
            alert("Imagen subida correctamente")
        });
    }
    const seleccionarImagen = async () => {
        const resultPermissions = await Permissions.askAsync(Permissions.CAMERA);
        console.log(resultPermissions);
        const resultPermissionsCamera = resultPermissions.permissions.status;
        if (resultPermissionsCamera === "denied") {
            alert("No tienes los permisos necesarios");
        }
        else {
            const result = await ImagePicker.launchImageLibraryAsync({
                ellowsEditing: true,
                aspect: [4, 3]
            });
            console.log(result);
            subirImagen(result.uri);
        }
    }

    const mostrarImagen = () => {
        getDownloadURL(ref(storage, 'imagenes/imagen1.png'))
        .then((url) => {
            console.log(url);
            setImagen(url);
            console.log(imagen);
         })
        .catch((error) => {
            // Handle any errors
        });
    }
    const cerrarSesion = () => {
        signOut(auth)
        .then(() => {
            console.log('Se ha cerrado sesion con exito');
            navigation.navigate('Login')
        })
        .catch((error) => console.log(error));
    }

    return (
        <View style={{ flex: 1, padding:24, justifyContent: "center", alignItems: "center" }}>
            <Button color='#F08080' title="Subir Imagen" onPress={seleccionarImagen}></Button>
            <br></br>
            <Button color='#F02E3D' title="Cerrar sesion" onPress={() => cerrarSesion()}></Button>
            <br></br>
            <Button color='#F02E3D' title="Ver imagenes" onPress={Ver}></Button>
            <br></br>
            <Button color='#F02E3D' title="Imagen" onPress={() => mostrarImagen()}></Button>
            <br></br>
            <Image style={{width:"100%", height:100}}resizeMode="contain" source={{uri:imagen}}></Image>
        </View>
    )
}