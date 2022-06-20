import React, { Component } from 'react';
import { Button, View, Text,Alert,TextInput,StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          email: '',
          senha: '',
        };
      }
      
      onLogin() {
        const baseUrl = "http://192.168.15.41:8080/aumatch/v1/adotantes/login";
        const { email, senha } = this.state;
  
        const configurationObject = {
          url: baseUrl,
          method: "POST",
          data: { email, senha},
        };
    
        axios(configurationObject)
          .then((response) => {
            if (response.status === 202) {
            this.props.navigation.navigate('Home');
          } else {
              Alert.alert('Usuário ou senha inválido(s)');
              throw new Error("An error has occurred ",response);

            }
          })
          .catch(error => {
            console.log(error.response)
             Alert.alert('Usuário ou senha inválido(s)');
            });
      }
    
      render() {
        return (
            

          <View style={styles.container}>

            <Text style={{ color: "#00ced1", fontSize: 30, borderTopWidth: 0, borderLeftWidth: 10 }}>
            AuMatch
		    <Ionicons name="paw" size={18} color="#00ced1" /> </Text>
            <View style={{ paddingVertical:30}} />

            <TextInput
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              placeholder={'email'}
              style={styles.input}
            />
            <TextInput
              value={this.state.senha}
              onChangeText={(senha) => this.setState({ senha })}
              placeholder={'senha'}
              secureTextEntry={true}
              style={styles.input}
            />
            
            <Button
              title={'Login'}
              style={styles.input}
              onPress={this.onLogin.bind(this)}
            />
            <Button  title="Cadastra-se" onPress={() => this.props.navigation.navigate('Register')}/>

          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
      },
      input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },
    });
    