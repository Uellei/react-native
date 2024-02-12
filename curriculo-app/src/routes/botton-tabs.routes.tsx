import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5 } from '@expo/vector-icons';

import { Home } from "../screens/Home/Home";
import { Skills } from "../screens/Skills/Skills";


const { Navigator, Screen } = createBottomTabNavigator()

export function BottomTabsRoutes() {
  return (
    <Navigator>
      <Screen 
        name="Main"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo
            name="home"
            size={size}
            color={color}
            />
          )
        }}
      />
      <Screen 
        name="Skills"
        component={Skills}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5
            name="brain"
            size={size}
            color={color}
            />
          )
        }}
      />
    </Navigator>
  )
}