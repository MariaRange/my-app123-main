import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UserStack from "./UserStack";
import InicioSesion from "./InicioSesion";
import Subir from "./Subir";
import Login from "./Login";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>             
  );
}

/*
name="Users"
            component={UserStack}
            options={{ headerShown: false }}
*/

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const auth = getAuth();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
         
          <Tab.Screen name="Aplicacion" component={UserStack} />
          {/* <Tab.Screen name="Subir" component={UserStack} /> */}

      
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
          /*<Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Loggin" component={InicioSesion} />
          */