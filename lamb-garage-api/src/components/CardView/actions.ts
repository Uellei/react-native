import { fetchGetCarData } from "../../api/getCars"
import { CarModel } from "./props"

// FAZER UMA SOLICITAÇÃO PARA A API
export const loadCarData = async(id: number, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
  try {
    const response = await fetchGetCarData(id)
    if(response != null)
      setCarData(response)
  } catch (error) {
    console.log("Eror de busca api:", error)
    setCarData(null)
  }
}

export const handlePreviousItem = async(carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
  try {
    if(carData && carData.id > 1){
      const response = await fetchGetCarData(carData.id - 1)
      setCarData(response ? response : null)
    }
  } catch (error) {
    console.log("Erro ao chamar a api:", error)
    setCarData(null)
  }
}

export const handleNextItem = async(carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
  try {
    if(carData && carData.id < 10){
      const response = await fetchGetCarData(carData.id + 1)
      setCarData(response ? response : null)
    }
  } catch (error) {
    console.log("Erro ao chamar a api:", error)
    setCarData(null)
  }
}