import React, {useState} from 'react';
import { StyleSheet, View, Image, Text, Alert } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'

export default function SwipeableImage({ animal, willLike, willPass }) {
    return (
      <View>
      <Image source={{ uri: animal.foto }} style={styles.photo} />
      {willLike && Alert.alert(`Você deu um match! 🐾`,
      `Parabéns! ` + 
      `Agora é só entrar em contato com a ` + animal.ongOrigem.razaoSocial + 
        ` pelo número ` + animal.ongOrigem.telefone + ` para dar continuidade no processo de adoção.`,
        [
          {text: "Ok!"}
        ]) && (
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
          <View style={{ paddingVertical: 5 }} />
          <View style={styles.textRow}>
            <Text style={[styles.textSecondary, styles.textShadow]}>{animal.tipoAnimal}, </Text>
            <Text style={[styles.textSecondary, styles.textShadow]}>{animal.sexo}, </Text>
            <Text style={[styles.textSecondary, styles.textShadow]}>{animal.porte} </Text>
          </View>
          <View style={styles.textColumn}>
            <Text style={[styles.textSecondary]}></Text>
            <Text style={[styles.textSecondary]}>{animal.descricao}</Text>
          </View>
          <View style={{ paddingVertical: 5 }} />
          <View style={styles.textRow}>
            <FontAwesome name="map-marker" size={20} color="black"></FontAwesome>
            <Text style={[styles.textSecondary, styles.textShadow]}> {animal.ongOrigem.razaoSocial}</Text>
            <Text style={[styles.textThird, styles.textShadow]}>  {animal.ongOrigem.endereco.localizacao} km</Text>
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
      fontSize: 16,
    },
    textShadow: {
      textShadowColor: 'rgba(0, 0, 0, 0.80)',
      textShadowOffset: { width: -0.1, height: 0.1 },
      textShadowRadius: 2,
    },
  })