import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Constants from 'expo-constants';
import TopBar from '../components/TopBar';
import axios from 'axios';
import BottomBar from '../components/BottomBar';
import Swipes from '../components/Swipes';

import { useFocusEffect } from '@react-navigation/native';


const SearchScreen =({ navigation})  => {
  const [animals, setAnimals] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const swipesRef = useRef(null)

  const { dogIsEnabled, catIsEnabled, petSize, petSex} = navigation?.state?.params || {};

  const [load,setLoad] = useState(true)


  async function fetchanimals() {
    console.log(dogIsEnabled)
    console.log(catIsEnabled)
    console.log(petSize)
    console.log(petSex)


    try {
      const { data } = await axios.get('http://192.168.15.41:8080/aumatch/v1/animais',{ params: { dogs: dogIsEnabled, cats: catIsEnabled, petSize: petSize} })
      setAnimals(data)

    } catch (error) {
      console.log(error)
      Alert.alert('Error getting animals', '', [{ text: 'Retry', onPress: () => fetchanimals() }])
    }
  }

  useEffect(() => {
    fetchanimals()
  }, [load,navigation ])


  function handleLike() {

    console.log('like')
    nextUser()
  }

  function handlePass() {
    console.log('pass')
    nextUser()
  }

  function nextUser() {
    const nextIndex = animals.length - 2 === currentIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }

  function handleLikePress() {
    swipesRef.current.openLeft()
  }
  function handlePassPress() {
    swipesRef.current.openRight()
  }

  return (
    <View style={styles.container}>
      <View style={styles.swipes}>
        {animals.length > 1 &&
          animals.map(
            (u, i) =>
              currentIndex === i && (
                <Swipes
                  key={i}
                  ref={swipesRef}
                  currentIndex={currentIndex}
                  animals={animals}
                  handleLike={handleLike}
                  handlePass={handlePass}
                ></Swipes>
              )
          )}
      </View>
      <BottomBar handleLikePress={handleLikePress} handlePassPress={handlePassPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
})

export default SearchScreen;