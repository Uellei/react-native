import React, { useLayoutEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker"
import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './style';
import { useChallenge } from '../../../../context/ChallengeContext';
import { InputText } from '../../../../components/InputText';
import { useAuth } from '../../../../context/UserAuthContext';
import { TouchableButton } from '../../../../components/Button';

const bannerImage = () => (
  <View style={styles.bannerImageContainer}>
    <Image style={styles.bannerImage} />
  </View>
)

export function CreateChallenge({ navigation }: any) {
  const [nomeDesafio, setNomeDesafio] = useState("")
  const [nomeEstabelecimento, setNomeEstabelecimento] = useState("")
  const [descricao, setDescricao] = useState("")
  const { createChallenge } = useChallenge()
  const { currentUser } = useAuth()

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<any>('date');
  const [show, setShow] = useState(false);
  const [displayText, setDisplayText] = useState(obterDataAtual());

  function obterDataAtual(): string {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    const dia = dataAtual.getDate().toString().padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
  }

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDisplayText(formatarData(currentDate));
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const formatarData = (data: Date): string => {
    const ano = data.getFullYear();
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const dia = data.getDate().toString().padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
  };

  const handleSaveChallenge = () => {
    const userId = currentUser?.uid
    if (userId)
      createChallenge({
        nomeDesafio: nomeDesafio,
        nomeEstabelecimento: nomeEstabelecimento,
        descricao: descricao,
        data: displayText,
        participantes: [{ userId: userId, nome: currentUser?.displayName, quantidade: 0 }],
        userIds: [userId]
      })
    navigation.navigate('ConfirmChallenge')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableButton
          title='Próximo'
          onPress={handleSaveChallenge}
          backgroundColor='transparent'
          fontSize={16}
          fontFamily="Montserrat-Medium"
          textStyle={{ color: "red", marginRight: 20 }}
        />
      )
    })
  }, [navigation, handleSaveChallenge])

  return (
    <View style={styles.container}>
      <View style={styles.infosContainer}>
        {bannerImage()}
        <View style={{ width: "100%" }}>
          <InputText
            placeholders={["Nome do Desafio", "Nome do estabelecimento"]}
            onChangeTextFunctions={[setNomeDesafio, setNomeEstabelecimento]}
            secureTextEntries={[false, false, true, true]}
          />
          <InputText
            style={{ height: 150, verticalAlign: "top" }}
            placeholders={["Descrição(opcional)"]}
            onChangeTextFunctions={[setDescricao]}
            secureTextEntries={[false]}
          />
          <View style={styles.dateContainer}>
            <TouchableOpacity onPress={showDatepicker} style={{ flexDirection: "row", justifyContent: "space-between", marginRight: 10, alignItems: "center" }}>
              <Text style={{ color: "#fff", fontSize: 20, padding: 10, fontFamily: "Montserrat-Light" }}>{displayText}</Text>
              <FontAwesome5 name="calendar-alt" size={24} color="white" />
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="spinner"
                onChange={onChange}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
}