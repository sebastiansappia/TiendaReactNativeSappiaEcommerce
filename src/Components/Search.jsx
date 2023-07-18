import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../Global/Colors';
import { AntDesign } from '@expo/vector-icons';

const Search = ({
    onSearch,
    error = "",
    goBack
}) => {
    const [keyword, setKeyword] = useState("")
    const {width, height}  = useWindowDimensions()

    const onErase = () => {
        setKeyword("")
        onSearch("")
    }

  return (
    <View style ={width > 350 ? styles.container : styles.containerSm}>
        <TextInput style ={styles.input} 
            placeholder='Search...'
            value={keyword}
            onChangeText={setKeyword}
        />
        <Pressable onPress={()=>onSearch(keyword)}>
            <FontAwesome name="search" size={24} color={colors.three} />
        </Pressable>
        <Pressable onPress={onErase}>
            <FontAwesome5 name="eraser" size={24} color={colors.three} />
        </Pressable>
        
       { error ?
         <Text>
            {error}
        </Text>
        : null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        gap: 18,
    },
    input: {
        width: 200,
        padding: 8,
        fontSize: 18,
        borderBottomColor: colors.three,
        borderBottomWidth: 3,
        borderRadius: 1,
    }
})