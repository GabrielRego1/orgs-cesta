import { StatusBar, SafeAreaView,View,Text } from 'react-native';
import Basket from './src/screens/Basket';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

export default function App() {

  const [fontLoaded,fontError] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fontLoaded && !fontError)
    return <View><Text>Carregando fontes...</Text></View>;

  return (
    <SafeAreaView>
      <StatusBar />
      <Basket />
    </SafeAreaView>
  );
}
