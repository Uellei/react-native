import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View,  } from 'react-native';

import { styles } from './style';
import { AsyncImage } from '../../../components/AsyncImage';
import { useAuth } from '../../../context/UserAuthContext';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons';
import { Itens } from '../../../components/Itens';
import { signOut } from 'firebase/auth';
import { auth } from '../../../services/firebaseConfig';


export function Settings({navigation}: any) {
  const { currentUser } = useAuth()
  const displayName = currentUser?.displayName ? currentUser.displayName : ""
  const email = currentUser?.email ? currentUser.email : ""
  const [showModal, setShowModal] = useState(false);

  const signOutUser = async() => {
    await signOut(auth).then(() => {
      navigation.navigate("Login")
    })
  }

  const subOptions = () => (
    <View style={styles.labelContainer}>
      <View style={styles.icon}>
        <AsyncImage nome={displayName} userId={currentUser?.uid} style={{ height: 50, width: 50, borderRadius: 50 }} />
      </View>
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={toggleModal}>
        <Text style={[styles.infoText]}>Alterar foto de perfil</Text>
      </TouchableOpacity>
    </View>
  )

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <View style={styles.container}>
      <View style={styles.infosContainer}>
        <Modal
          animationType='slide'
          transparent={true}
          visible={showModal}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <View style={[styles.modalItem, {justifyContent: "flex-start", alignItems: "flex-start"}]}>
            <Text style={{ color: "#fff", fontSize: 20, fontFamily: "Montserrat-Bold" }}>Seleção de fotos</Text>
          </View>
          <TouchableOpacity style={[styles.modalItem, {paddingLeft: 30}]} activeOpacity={0.9} onPress={() => {/* Função para selecionar nova  */}}>
            <Feather name="image" size={28} color="white" style={{ marginRight: 20 }}/>
            <Text style={styles.modalText}>Selecionar nova foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalItem} onPress={toggleModal} activeOpacity={0.9}>
            <Text style={[styles.modalText, {color: "red"}]}>Cancelar</Text>
          </TouchableOpacity>
        </View>
        </Modal>
        <Text style={[styles.text, { fontSize: 30 }]}>Configurações</Text>
        <View style={{ flex: 1, justifyContent: "space-between", marginBottom: 10 }}>
          <View>
            <Text style={styles.textOption}>Geral</Text>
            {subOptions()}
            <Itens icon={<AntDesign name="user" size={30} color="#fff" />} labelName='Nome' name={displayName} onPress={() => navigation.navigate("ChangeName")}/>
            <Itens icon={<MaterialCommunityIcons name="email-outline" size={30} color="#fff" />} labelName='Email' name={email} onPress={() => navigation.navigate("ChangeEmail")}/>
            <Itens icon={<FontAwesome5 name="key" size={30} color="#fff" />} labelName='Senha' name="**********" onPress={() => navigation.navigate("ChangePassword")}/>
          </View>
          <View>
            <Text style={styles.textOption}>Comunicações</Text>
            <Itens icon={<Feather name="bell" size={30} color="#fff" />} labelName='Notificações via push'/>
          </View>
          <View>
            <Text style={styles.textOption}>Conta</Text>
            <Itens icon={<MaterialIcons name="logout" size={30} color="#fff" />} onPress={signOutUser} labelName='Sair'/>
            <Itens icon={<AntDesign name="deleteuser" size={30} color="red"/>} labelName='Deletar conta' colorStyle='red'/>
          </View>
        </View>
      </View>
    </View>
  );
}