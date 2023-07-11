import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import ItemListCategory from './src/Screens/ItemListCategory';
import { useFonts } from 'expo-font';
import { useState } from 'react';


export default function App() {

  const [categorySelected, setCategorySelected] = useState("")

  const [fontsLoaded] = useFonts({
    'Josefin': require('./src/Assets/Fonts/Josefin_Sans/JosefinSans-Regular.ttf'),
    'Nunito': require('./src/Assets/Fonts/Nunito/Nunito-Regular.ttf'),
  });

  //Sino puede descargar la fuente, retorna null
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header />
      {
        categorySelected ?
          <ItemListCategory
            category={categorySelected}
            setCategory={setCategorySelected}
          /> :
          <Home
            setCategorySelected={setCategorySelected}
          />
      }
      {/* //Aca va air el ItemListCategory -> <ItemListCategory/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
