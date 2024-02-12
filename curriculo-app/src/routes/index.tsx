import { NavigationContainer } from "@react-navigation/native"

// CONTEXTO
import { BottomTabsRoutes } from "./botton-tabs.routes"

// CAIXA DE CONTEXTOS
export function Routes() {
  return (
    <NavigationContainer>
      <BottomTabsRoutes />
    </NavigationContainer>
  )
}