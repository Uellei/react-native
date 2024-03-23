import { FontAwesome5, Ionicons, Feather } from '@expo/vector-icons';


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Classification } from "../screens/Home/Challenge/View/Classification"
import { Infos } from "../screens/Home/Challenge/View/Infos"
import { BatePapo } from "../screens/Home/Challenge/View/Chat"
import { COLORS, WINDOW_HEIGHT } from '../constants/styles';

const { Navigator, Screen } = createBottomTabNavigator()

export function BottomTabsRoutes({route}: any) {
  const tabBarHeight = WINDOW_HEIGHT * 0.06 + 15
  const { desafioId } = route.params

  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.dark,
          borderTopWidth: 0,
          paddingBottom: 15,
          height: tabBarHeight,
        },
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: COLORS.red,
        tabBarLabelStyle: {
          fontSize: 13,
        }
      }}
    >
      <Screen
        name="Classificações"
        initialParams={{desafioId}}
        component={Classification}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="medal" size={size} color={color} />
          )
        }}
      />
      <Screen
        name="Infos"
        component={Infos}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Feather name="info" size={size} color={color} />

          )
        }}
      />
      <Screen
        name="Bate-Papo"
        component={BatePapo}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="chatbubble-outline" size={size} color={color} />
          )
        }}
      />
    </Navigator>
  )
}