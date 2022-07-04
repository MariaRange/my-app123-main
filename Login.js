import React, { useState } from "react";
import { Text, View, Button } from 'react-native';
import { app } from "./FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function Login({navigation}){
    const [usuario, setusuario] = useState("");
    const [password, setpassword] = useState("");
    const auth = getAuth();

    function registrar() {
        createUserWithEmailAndPassword(auth, usuario, password)
        .then((userCredential) => {
            console.log(userCredential);
            const user = userCredential.user;
            alert('Se ha registrado correctamente');
            navigation.navigate('Subir');
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Datos incorrectos")
        });
    }
    function ingresar() {
        signInWithEmailAndPassword(auth, usuario, password)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Subir')
        // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Ingresa Datos")
        });
    }

    const cerrarSesion = () => {
        signOut(auth)
        .then(() => {
            console.log('Se ha cerado sesion con exito');
        })
        .catch((error) => console.log(error))
    }

    return (
        <View style={{ flex: 1, padding:24, justifyContent: "center", alignItems: "center" }}>
            <Text>Correo electronico</Text>
            <input onChange={(e) => setusuario(e.nativeEvent.target.value)} type={Text}></input>
            <br></br>
            <Text>Clave</Text>
            <input onChange={(e) => setpassword(e.nativeEvent.target.value)} type={Text}></input>
            <br></br>
            <Button color='#F08080' title="Ingresar" onPress={() => ingresar()}></Button>
            <br></br>
            <Button color='#F08080' title="Registrar" onPress={() => registrar()}></Button>
            <br></br>
            <Button color='#F02E3D' title="Cerrar sesion" onPress={() => cerrarSesion()}></Button>
        </View>
    )
}
