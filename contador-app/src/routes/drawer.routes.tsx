import { createDrawerNavigator } from "@react-navigation/drawer"
import { BottomTabsRoutes } from "./bottom-tabs.routes"
import { CustomDrawerContent } from "../components/CustomDrawer"

import { AntDesign, Ionicons, Octicons, FontAwesome5 } from '@expo/vector-icons';
import { useAuth } from "../context/UserAuthContext";
import { CreateChallenge } from "../screens/Home/Challenge/Create";
import { Classification } from "../screens/Home/Challenge/View/Classification";
import { Login } from "../screens/PreHome/Login";
import { useChallenge } from "../context/ChallengeContext";
import { Join } from "../screens/Home/Challenge/Join";
import { Settings } from "../screens/SideBar/Settings";
import { AjudaFeedback } from "../screens/SideBar/AjudaFeedback";
import { Sobre } from "../screens/SideBar/Sobre";
import { HomeScreen } from "../screens/Home/HomeMainScreen";
import { useEffect } from "react";
import { Profile } from "../screens/Home/Profile";
import { COLORS } from "../constants/styles";

const { Navigator, Screen } = createDrawerNavigator()

export function DrawerRoutes({ route, navigation }: any) {
  const { desafioId } = route.params
  const { desafios } = useChallenge()
  const { currentUser } = useAuth()

  const displayName = currentUser?.displayName ? currentUser.displayName : "Profile"

  // useEffect(() => {
  //   // Esta é uma função de atualização que você pode definir para fazer algo quando 'desafios' mudar.
  //   // Por exemplo, você poderia usar isso para logar as mudanças ou atualizar algum outro estado.
  //   // Neste caso, estamos simplesmente registrando para fins de depuração.
  //   console.log('Desafios atualizados:', desafios.length);
  // }, [desafios])


  return (
    <Navigator
      key={desafios.length}
      initialRouteName={desafioId}
      drawerContent={(props: any) => <CustomDrawerContent  {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: COLORS.mustard,
        drawerActiveTintColor: "#fff",
        drawerLabelStyle: {
          fontSize: 20,
          borderRadius: 10,
          color: "#fff",
          marginLeft: -10,
          fontFamily: "Montserrat-SemiBold",
          width: "115%"
        },
        drawerStyle: {
          width: "90%"
        },
        drawerItemStyle: {
          borderRadius: 50,
          padding: 2,
          paddingLeft: 10
        },
      }}
    >
      <Screen
        name={displayName}
        initialParams={{ desafioId }}
        component={Profile}
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "#fff",
          drawerIcon: () => (
            <AntDesign name="user" size={20} color="#fff" />
          ),
          drawerItemStyle: {
            marginBottom: 25,
            marginTop: 20,
            borderRadius: 50,
              padding: 2,
              paddingLeft: 10
          }
        }}
      />
      {desafios.length > 0 ? (
        desafios.map((desafio: any, index: number) => (
          <Screen
            key={index}
            name={desafio.id}
            initialParams={{ desafioId: desafio.id }}
            component={BottomTabsRoutes}
            options={{
              headerTransparent: true,
              headerTitle: "",
              title: `${desafio.nomeDesafio}`,
              headerTintColor: "#fff",
              drawerIcon: () => (
                <FontAwesome5 name="drumstick-bite" size={20} color="#fff" />
              ),
              drawerItemStyle: {
                borderRadius: 50,
                padding: 2,
                paddingLeft: 10
              }
            }}
          />
        ))
      ) : (
        <Screen
          name="Lar"
          initialParams={{ desafioId }}
          component={HomeScreen}
          options={{
            headerTransparent: true,
            headerTitle: "",
            headerTintColor: "#fff",
            drawerIcon: () => (
              <Ionicons name="home-outline" size={20} color="#fff" />
            ),
            drawerItemStyle: {
              marginTop: 25,
              borderRadius: 50,
              padding: 2,
              paddingLeft: 10
            }
          }}
        />
      )}
      <Screen
        name="Crie desafio"
        initialParams={{ desafioId }}
        component={CreateChallenge}
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "#fff",
          drawerIcon: () => (
            <AntDesign name="pluscircleo" size={20} color="#fff" />
          ),
          drawerItemStyle: {
            marginTop: 25,
            borderRadius: 50,
            padding: 2,
            paddingLeft: 10
          }
        }}
      />
      <Screen
        name="Junte-se desafio"
        initialParams={{ desafioId }}
        component={Join}
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "#fff",
          drawerIcon: () => (
            <Octicons name="people" size={20} color="#fff" />
          )
        }}
      />
      <Screen
        name="Desafios concluídos"
        initialParams={{ desafioId }}
        component={BottomTabsRoutes}
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "#fff",
          drawerIcon: () => (
            <Ionicons name="flag-outline" size={20} color="#fff" />
          )
        }}
      />
      <Screen
        name="Configurações"
        initialParams={{ desafioId }}
        component={Settings}
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "#fff",
          drawerIcon: () => (
            <Ionicons name="settings-outline" size={20} color="#fff" />
          ),
          drawerItemStyle: {
            marginTop: 25,
            borderRadius: 50,
            padding: 2,
            paddingLeft: 10
          }
        }}
      />
      <Screen
        name="Ajuda & feedback"
        initialParams={{ desafioId }}
        component={AjudaFeedback}
        options={{
          headerTransparent: true,
          headerTitle: "Ajuda & feedback",
          headerTintColor: "#fff",
          headerTitleStyle: {
            
          },
          drawerIcon: () => (
            <Ionicons name="help-circle-outline" size={20} color="#fff" />
          )
        }}
      />
      <Screen
        name="Sobre"
        initialParams={{ desafioId }}
        component={Sobre}
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "#fff",
          drawerIcon: () => (
            <AntDesign name="exclamationcircleo" size={20} color="#fff" />
          ),
        }}
      />
    </Navigator>
  )
}