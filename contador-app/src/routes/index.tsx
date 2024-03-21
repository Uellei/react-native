import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import { SignUp } from "../screens/PreHome/SignUp";
import { Login } from "../screens/PreHome/Login";
import { SignIn } from "../screens/PreHome/SignIn";
import { CreateChallenge } from "../screens/Home/Challenge/Create";
import { ConfirmChallenge } from "../screens/Home/Challenge/Confirm";
import { Join } from "../screens/Home/Challenge/Join";
import { DrawerRoutes } from "./drawer.routes";
import { CountScreen } from "../screens/Home/Challenge/View/CountScreen";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Name } from "../screens/SideBar/Settings/Name";
import { Email } from "../screens/SideBar/Settings/Email";
import { Senha } from "../screens/SideBar/Settings/Senha";


const { Navigator, Screen } = createStackNavigator()
const auth = getAuth()

// screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid}} MUDAR DPS CONFORME O GOSTO

export function AppNavigator({navigation, route}: any) {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user) // !!user converte o user em booleano: true se user != null, false caso contrário
      setIsLoading(false)
    })

    return unsubscribe
  }, [])

  if (isLoading) {
    // TELA PERSONALIZADA DE LOADING
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid }}>
        {isSignedIn ? (
          <Screen
            name="Home"
            component={DrawerRoutes}
            initialParams={{ DesafioId: "Lar" }}
            options={{
              headerShown: false
            }}
          />
        ) : (
          <Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false
            }}
          />
        )}
        <Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerTransparent: true,
            headerTitle: "",
            headerTintColor: "#fff",
            headerBackTitleVisible: false
          }}
        />
        <Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerTransparent: true,
            headerTitle: "",
            headerTintColor: "#fff",
            headerBackTitleVisible: false
          }}
        />
        <Screen
          name="CreateChallenge"
          component={CreateChallenge}
          options={{
            headerTransparent: true,
            headerTitle: "Crie desafio",
            headerTintColor: "#fff",
            headerBackTitleVisible: false
          }}
        />
        <Screen
          name="JoinChallenge"
          component={Join}
          options={{
            headerTransparent: true,
            headerTitle: "",
            headerTintColor: "#fff",
            headerBackTitleVisible: false
          }}
        />
        <Screen
          name="ConfirmChallenge"
          component={ConfirmChallenge}
          options={{
            headerTransparent: true,
            headerTitle: "",
            headerTintColor: "#fff",
            headerBackTitleVisible: false,
          }}
        />
        <Screen
          name="ChallengeScreen"
          component={DrawerRoutes}
          options={{
            headerShown: false
          }}
        />
        <Screen
          name="CountScreen"
          component={CountScreen}
          options={{
            headerTransparent: true,
            headerTitle: "Contador",
            headerTintColor: "#fff",
            headerBackTitleVisible: false
          }}
        />
        <Screen
          name="ChangeName"
          component={Name}
          options={{
            headerTransparent: true,
            headerTitle: "Configurações",
            headerTintColor: "#fff",
            headerBackTitleVisible: false
          }}
        />
        <Screen
          name="ChangeEmail"
          component={Email}
          options={{
            headerTransparent: true,
            headerTitle: "Configurações",
            headerTintColor: "#fff",
            headerBackTitleVisible: false
          }}
        />
        <Screen
          name="ChangePassword"
          component={Senha}
          options={{
            headerTransparent: true,
            headerTitle: "Configurações",
            headerTintColor: "#fff",
            headerBackTitleVisible: false
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}