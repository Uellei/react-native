import 'react-native-gesture-handler';

import { AppNavigator } from './src/routes';
import AuthProvider from './src/context/UserAuthContext';
import { ChallengeProvider } from './src/context/ChallengeContext';
import FontsInitializer  from './src/utils/FontsInitializer';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <FontsInitializer>
      <AuthProvider>
        <ChallengeProvider>
          <StatusBar style="auto"/>
          <AppNavigator />
        </ChallengeProvider>
      </AuthProvider>
    </FontsInitializer>
  );
}
