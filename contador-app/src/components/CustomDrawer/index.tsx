import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { COLORS } from '../../constants/styles';

export function CustomDrawerContent(props: any) {
  const customDrawerItemProps = {
    ...props,
    activeTintColor: "#fff", // Cor do texto do item focado
    inactiveTintColor: "#ccc", // Cor do texto do item não focado
    activeBackgroundColor: "#fff", // Cor de fundo do item focado
    inactiveBackgroundColor: "transparent", // Cor de fundo do item não focado
    itemStyle: { marginVertical: 5 }, // Estilo aplicado a cada item
  }
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: COLORS.dark }}>
      <DrawerItemList
        {...customDrawerItemProps}
        
      />
    </DrawerContentScrollView>
  );
}