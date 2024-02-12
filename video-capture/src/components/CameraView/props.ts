import { Camera } from "expo-camera"

export interface CameraViewProps {
  camRef: React.RefObject<Camera>
  isRecording: boolean
  onRecording: () => void
  onStopRecording: () => void
}