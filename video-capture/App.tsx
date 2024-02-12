import { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Camera, CameraRecordingOptions } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from "expo-media-library"

import { CameraView } from './src/components/CameraView';
import { VideoPlayer } from './src/components/VideoPlayer';

export default function App() {
  const camRef = useRef<Camera>(null)

  const [isRecording, setIsRecording] = useState(false)
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean>(false)
  const [hasMicPermission, setHasMicPermission] = useState<boolean>(false)
  const [hasMediaPermission, setHasMediaPermission] = useState<boolean>(false)
  const [video, setVideo] = useState<any>()

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync()
      setHasCameraPermission(cameraPermission.status === "granted")
      const micPermission = await Camera.requestMicrophonePermissionsAsync()
      setHasMicPermission(micPermission.status === "granted")
      const mediaPermission = await MediaLibrary.requestPermissionsAsync()
      setHasMediaPermission(mediaPermission.status === "granted")

    })()
  }, [])

  if (!hasCameraPermission || !hasMicPermission) {
    return <Text>Não tem permissão de camera ou audio</Text>
  }

  if (!hasMediaPermission) {
    return <Text>Não tem acesso a bibliotecas</Text>
  }

  const recordVideo = () => {
    setIsRecording(true)
    const options: CameraRecordingOptions = {
      quality: "1080p",
      maxDuration: 60,
      mute: false,
    }
    if (camRef.current && camRef) {
      camRef.current.recordAsync(options).then((recordedVideo: any) => {
        setVideo(recordedVideo)
        setIsRecording(false)
      })
    }
  }

  const stopRecording = () => {
    setIsRecording(false)
    if (camRef && camRef.current) {
      camRef.current.stopRecording()
    }
  }

  if (video) {
    const shareVideo = () => {
      shareAsync(video.uri).then(() => {
        setVideo(undefined)
      })
    }

    const saveVideo = () => {
      MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
        setVideo(undefined)
      })
    }

    const discardVideo = () => {
      setVideo(undefined)
    }

    return (
      <VideoPlayer
        video={video}
        onShare={shareVideo}
        onSave={saveVideo}
        onDiscard={discardVideo}
      />
    )
  }

  return (
    <CameraView camRef={camRef} isRecording={isRecording} onRecording={recordVideo} onStopRecording={stopRecording}>

    </CameraView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
