import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { NativeBaseProvider } from 'native-base';

import { Home } from "./src/screens/Home";
import { THEME } from './src/theme';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })


  return (
    <NativeBaseProvider theme={THEME}>
      {fontsLoaded && <Home />}
   </NativeBaseProvider>
   
  );
}