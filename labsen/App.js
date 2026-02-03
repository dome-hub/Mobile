import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons} from "@expo/vector-icons"

import RegisterScreen from "./Screen/RegisterScreen";
import ListScreen from "./Screen/ListScreen";

const Tab = createBottomTabNavigator()
const Stack =  createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon :  ({focused , color , size}) => {
          let iconName;

          if (route.name === "Register") {
            iconName = focused ? 'person-add' : 'person-add-outline'
          } else if (route.name ==='List'){
            iconName = focused ? 'people' : 'people-outline'
          }

          return<Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor : '#4a90e2',
        tabBarInactiveTintColor : 'gray',
        // headerShown : false,
        tabBarStyle : {
          paddingBlock : 5,
          height : 60 ,
          borderTopLeftRadius : 20,
          borderTopLeftRadius : 20,
          position : 'absolute',
          elevation : 10,
        }
        
      })}>
        <Tab.Screen name="Register" 
        component={RegisterScreen} 
        options={{title : 'Sign up'}}
        />
        <Tab.Screen name="List" 
        component={ListScreen} 
        options={{title : 'Company'}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App
