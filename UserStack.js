import { createStackNavigator } from "@react-navigation/stack";
import Subir from "./Subir";
import Users from "./Users";
import User from "./User";
import Login from "./Login";
const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Subir" component={Subir} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}
