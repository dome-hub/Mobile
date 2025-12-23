import React, { Profiler } from "react" ;
import {NavigationContainer} from "@react-navigation/native" ;
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import PictureScreen from "./src/screens/PictureScreen";
import Profile from "./src/screens/Profile";

const Stack = createNativeStackNavigator()
const App = () => {
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen
          name = "Home"
          component = {HomeScreen}
        />
        <Stack.Screen
          name = "Detail"
          component = {DetailScreen}
          options = {{title: "ดีเทลสกรีน 👍"}}
        />
        <Stack.Screen
          name = "BigPic"
          component ={PictureScreen}
        />
        <Stack.Screen
          name = "Profile"
          component = {Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
