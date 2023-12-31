import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Nunito': require('./src/Assets/Fonts/Nunito/Nunito-Regular.ttf'),
  });

  //Sino puede descargar la fuente, retorna null
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Navigator/>
  );
}
