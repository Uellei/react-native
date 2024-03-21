import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./UserAuthContext";
import { firestore } from "../services/firebaseConfig";
import { collection, getDocs, query, where } from 'firebase/firestore';

export interface Participante {
  userId: string | undefined;
  nome: string | null | undefined;
  quantidade: number;
}

export interface ChallengeData {
  id?: string
  nomeDesafio: string,
  nomeEstabelecimento: string,
  descricao: string | null,
  data: string
  participantes: Participante[]
  userIds: string[]
}

interface ChallengeContextProps {
  challenge: ChallengeData
  createChallenge: (challengeData: ChallengeData) => void
  desafios: ChallengeData[];
  updateDesafios: () => void;
}

const ChallengeContext = createContext<ChallengeContextProps | undefined>(undefined)

export const useChallenge = () => {
  const context = useContext(ChallengeContext)
  if(context === undefined)
    throw new Error("useChallenge ust be used within a ChallengeProvider")
  return context  
}

export const ChallengeProvider = ({ children }: { children: React.ReactNode }) => {
  const [challenge, setChallenge] = useState<ChallengeData>({
    nomeDesafio: "",
    nomeEstabelecimento: "",
    descricao: "",
    data: "",
    participantes: [],
    userIds: [],
  })
  const { currentUser } = useAuth()
  const [desafios, setDesafios] = useState<ChallengeData[]>([])

  const createChallenge = (challengeData: ChallengeData) => {
    setChallenge(challengeData)
  }

  const updateDesafios = async () => {
    if (currentUser?.uid) {
      try {
        const q = query(collection(firestore, "desafios"), where("userIds", "array-contains", currentUser.uid));
        const querySnapshot = await getDocs(q);
        const fetchedDesafios = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as ChallengeData));
        setDesafios(fetchedDesafios);
      } catch (error) {
        console.error("Erro ao verificar desafios cadastrados do usuário:", error);
      }
    }
  };

  useEffect(() => {
    updateDesafios();
  }, [currentUser?.uid])

  return (
    <ChallengeContext.Provider value={{ challenge, createChallenge, desafios, updateDesafios}}>
      {children}
    </ChallengeContext.Provider>
  )

}