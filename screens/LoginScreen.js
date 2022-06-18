import React, { Component } from 'react';
import { Button, View, Text,Alert,TextInput,StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from "@expo/vector-icons";

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
        };
      }
      
      onLogin() {
        const { username, password } = this.state;
    
        Alert.alert('Credentials', `${username} + ${password}`);
      }
    
      render() {
        return (
            

          <View style={styles.container}>

            <Text style={{ color: "#00ced1", fontSize: 30, borderTopWidth: 0, borderLeftWidth: 10 }}>
            AuMatch
		    <Ionicons name="paw" size={18} color="#00ced1" /> </Text>
            <View style={{ paddingVertical:30}} />

            <TextInput
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
              placeholder={'Username'}
              style={styles.input}
            />
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input}
            />
            
            <Button
              title={'Login'}
              style={styles.input}
              onPress={() => this.props.navigation.navigate('Home')}
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
    