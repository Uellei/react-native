import { deleteUser, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import React, { useState } from 'react';
import { Alert, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/UserAuthContext';

const DeleteAccountModal = ({ isVisible, onClose, onDeleteAccount }: any) => {
  const [password, setPassword] = useState('');
  const { currentUser } = useAuth()
  const email = currentUser?.email ? currentUser.email : ""

  const reauthenticateAndDelete = async () => {
    if (currentUser) {
      try {
        // Reautenticação do usuário
        const credential = EmailAuthProvider.credential(email, password);
        await reauthenticateWithCredential(currentUser, credential);

        // Após a reautenticação, proceder com a exclusão
        await deleteUser(currentUser);
        console.log('Conta excluída com sucesso.');
        // Redirecionar o usuário para a tela de login ou inicial
      } catch (error) {
        console.error("Erro ao excluir a conta:", error);
        // Tratar erros aqui, como reautenticação falhou ou exclusão falhou
      }
    }
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      "Excluir Conta",
      "Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", style: "destructive", onPress: reauthenticateAndDelete }
      ]
    );
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <View style={{ backgroundColor: 'black', padding: 20, width: '80%', borderRadius: 10 }}>
          <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 18, color: "#fff"}}>Confirme sua senha:</Text>
          <TextInput
            secureTextEntry
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginVertical: 20, fontSize: 16, fontFamily: "Montserrat-Medium", color: "#fff" }}
          />
          <TouchableOpacity onPress={handleDeleteAccount} style={{ backgroundColor: 'red', padding: 10 }}>
            <Text style={{ color: 'white', textAlign: 'center', fontFamily: "Montserrat-Bold", fontSize: 16 }}>Deletar Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={{ marginTop: 10, padding: 10 }}>
            <Text style={{ textAlign: 'center', fontFamily: "Montserrat-Bold", fontSize: 16, color: "#fff" }}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteAccountModal;
