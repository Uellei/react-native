import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { auth, storage } from './firebaseConfig'

interface createAccountProps {
  name: string
  email: string
  password: string
  confirmPassword: string
  imageUri: any
  navigation: any
}

export const handleCreateAccount = async ({name, email, password, confirmPassword, imageUri, navigation}: createAccountProps) => {
  if (password !== confirmPassword) {
    console.error("As senhas não coincidem.")
    return
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(userCredential.user, {
      displayName: name,
    })

    if (imageUri) {
      await saveImageToFirebaseStorage(userCredential.user.uid, imageUri)
    }

    console.log("Conta criada com sucesso:", userCredential.user)
    navigation.navigate("Home", {desafioId: "Lar"})
  } catch (error) {
    console.error("Erro ao criar a conta:", error) 
  }
}

const saveImageToFirebaseStorage = async (userUid: string, imageUri: any) => {
  const blob = await fetch(imageUri).then(r => r.blob())
  const storageRef = ref(storage, `profile_images/${userUid}`)
  await uploadBytes(storageRef, blob)
  const imageUrl = await getDownloadURL(storageRef)
}
