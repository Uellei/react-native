import React, { useEffect, useState } from "react";
import { Text, View, Image, Button } from "react-native";
import { styles } from "./style";

import Logo from "../../../assets/logo.png"
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import { BuyButton } from "../BuyButton";
import { CarModel } from "./props";
import { handleNextItem, handlePreviousItem, loadCarData } from "./actions";

// SUB COMPONENT
const renderLogoBox = () => (
  <View style={styles.logoContainer}>
    <Image style={styles.imageLogo} source={Logo} />
  </View>
)

// SUB COMPONENT
const renderDivider = () => (
  <View style={styles.dividerContainer}>
    <View style={styles.divider} />
  </View>
)

export default function CardView() {
  // SUB COMPONENT
  const renderCarDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  )

  // SUB COMPONENT
  const renderCarImage = () => (
    <Image
      style={styles.image}
      source={{ uri: `${CAR_ASSETS_BASE_URL}/${carData?.id}.png` }}
    />
  )

  // SUB COMPONENT
  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button title="<" color={"#01a6b3"} onPress={() => {handlePreviousItem(carData, setCarData)}} />
      <Text style={styles.priceLabel}>{carData?.price}</Text>
      <Button title=">" color={"#01a6b3"} onPress={() => {handleNextItem(carData, setCarData)}} />
    </View>
  )

  const [carData, setCarData] = useState<CarModel | null>(null)

  useEffect(() => {
      (async () => {
        await loadCarData(4, setCarData)
      })()
    }, [])

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      {renderDivider()}
      {renderCarDetails()}
      {renderCarImage()}
      {renderDivider()}
      <BuyButton />
      {renderPriceControls()}
    </View>
  )
}