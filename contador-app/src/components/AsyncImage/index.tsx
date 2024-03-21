import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { firestore, storage } from "../../services/firebaseConfig";
import { getDownloadURL, ref } from "firebase/storage";

const backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`

export function AsyncImage({ userId, style, nome }: any) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Certifique-se de que o caminho e userId estejam corretos
    const fileRef = ref(storage, `profile_images/${userId}`);
    getDownloadURL(fileRef)
      .then((url: any) => {
        setImageUrl(url);
      })
      .catch((error) => {
        setImageUrl(null); // Define explicitamente como null para indicar falha ao carregar
      });
  }, [userId]);

  // Se imageUrl não estiver disponível, renderiza o Avatar com a inicial do nome
  if (!imageUrl) {
    return (
      <View style={[{ width: 50, height: 50, backgroundColor: backgroundColor, borderRadius: 50, justifyContent: "center", alignItems: "center"}, style]}>
          <Text style={{ fontSize: 20, fontFamily: "Montserrat-Bold"}}>{nome[0]}</Text>
      </View>
    )
  }

  // Se imageUrl estiver disponível, renderiza a imagem
  return (
    <View>
      <Image source={{ uri: imageUrl }} style={style} />
    </View>
  );
}