import React from "react";
import { AccountScreen } from "../../../features/account/screens/account.screen";
import { RegsiterScreen } from "../../../features/account/screens/register.screen";
import { LoginScreen } from "../../../features/account/screens/login.screen";
import { createStackNavigator} from "@react-navigation/stack";
const Stack= createStackNavigator();
export const AccountNavigator= () =>(
    <Stack.Navigator headerMode="none">
  <Stack.Screen name="Main" component={AccountScreen} />
  <Stack.Screen name="Register" component={RegsiterScreen} />
  <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
)