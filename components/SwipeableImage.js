import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'

export default function SwipeableImage({ animal, willLike, willPass }) {
    return (
      <View>
      <Image source={{ uri: animal.foto }} style={styles.photo} />
      {willLike && (
        <View style={styles.likeBox}>
          <Text style={{ ...styles.textPrimary, color: '#64EDCC' }}>LIKE</Text>
        </View>
      )}
      {willPass && (
        <View style={styles.passBox}>
          <Text style={{ ...styles.textPrimary, color: '#F06795' }}>NOPE</Text>
        </View>
      )}
      <View style={styles.textContainer}>
      <View style={styles.textContainer}>
          <View style={styles.textRow}>
            <FontAwesome name="paw" size={20} color="black"></FontAwesome>
            <Text style={[styles.textPrimary, styles.textShadow]}> {animal.nome}, {animal.idade} anos</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={[styles.textSecondary, styles.textShadow]}>{animal.tipoAnimal},</Text>
            <Text style={[styles.textSecondary, styles.textShadow]}>{animal.sexo},</Text>
            <Text style={[styles.textSecondary, styles.textShadow]}>{animal.porte}</Text>
          </View>
          <View style={styles.textColumn}>
            <Text style={[styles.textSecondary]}></Text>
            <Text style={[styles.textSecondary]}>"O Tulipa é um cachorro que adora brincar com crianças! 
            Extremamente ativo, exige bastante atenção de seus tutores!"</Text>
          </View>
          <View style={styles.textRow}>
            <FontAwesome name="map-marker" size={20} color="black"></FontAwesome>
            <Text style={[styles.textSecondary, styles.textShadow]}> ONG Cãopanheiro Feliz</Text>
            <Text style={[styles.textThird, styles.textShadow]}>  5 km</Text>

          </View>
          <View>
            <Text style={[styles.textSecondary, styles.textShadow]}></Text>
            <Text style={[styles.textSecondary, styles.textShadow]}>ONG Cãopanheiro Feliz</Text>

            <Text style={[styles.textPrimary, styles.textShadow]}>{animal.name}</Text>
            <Text style={[styles.textSecondary, styles.textShadow]}>{animal.idade}</Text>
            <Text style={[styles.textSecondary, styles.textShadow]}>{animal.idade}</Text>
          </View>
          <View style={styles.textRow}>
            <FontAwesome name="map-marker" size={20} color="white"></FontAwesome>
            <Text style={[styles.textSecondary, styles.textShadow]}>{animal.porte}</Text>
          </View>
        </View>
      </View>
      </View>
    )
  }
  
  const boxStyle = {
    position: 'absolute',
    top: '50%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 3,
    borderRadius: 10,
  }
  
  const styles = StyleSheet.create({
    likeBox: {
      ...boxStyle,
      left: 40,
      borderColor: '#64EDCC',
    },
    passBox: {
      ...boxStyle,
      right: 40,
      borderColor: '#F06795',
    },
    photo: {
      width: 393,
      height: '75%',
      resizeMode: 'cover',
      borderRadius: 20,
    },
    textContainer: {
      marginTop: 8,
      height: 100,
      bottom: 0,
      left: 0,
    },
    textRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10
    },
    textColumn: {
      alignItems: 'justify',
      marginLeft: 10
    },
    textPrimary: {
      color: 'black',
      fontSize: 22,
      fontWeight: 'bold',
    },
    textSecondary: {
      color: 'black',
      fontSize: 17,
    },
    textThird: {
      color: 'black',
      fontSize: 14,
    },
    textShadow: {
      textShadowColor: 'rgba(0, 0, 0, 0.80)',
      textShadowOffset: { width: -0.1, height: 0.1 },
      textShadowRadius: 2,
    },
  })