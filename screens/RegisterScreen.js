import React, { Component } from 'react';
import { Button, View, Text,Keyboard, Platform, StyleSheet,TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from "axios";


const baseUrl = "http://192.168.15.48:8080/aumatch/v1/adotantes";

export default class RegisterScreen extends Component {
  nomeInputRef = React.createRef();
  sobrenomeInputRef = React.createRef();
  emailInputRef = React.createRef();
  telefoneInputRef = React.createRef();
  idadeInputRef = React.createRef();
  descricaoDoPerfilInputRef = React.createRef();

  scrollViewRef = React.createRef();


  constructor(props) {
    super(props);
    this.state = {
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        idade: '',
        senha: '',
        descricaoDoPerfil: '',
        shownomeError: false,
        showsobrenomeError: false,
        showEmailError: false,
        showtelefoneError: false,
        showidadeError: false,
        showDescricaoDoPerfilError: false,
        showSenhaError: false,

    };
    this.submitPressed = this.submitPressed.bind(this);
  }

  inputs = () => {
    return [
      this.nomeInputRef,
      this.sobrenomeInputRef,
      this.emailInputRef,
      this.telefoneInputRef,
      this.idadeInputRef,
      this.descricaoDoPerfilInputRef,
    ];
  };

  editNextInput = () => {
    const activeIndex = this.getActiveInputIndex();
    if (activeIndex === -1) {
        return;
    }

    const nextIndex = activeIndex + 1;
    if (nextIndex < this.inputs().length && this.inputs()[nextIndex].current != null) {
        this.setFocus(this.inputs()[nextIndex], true);
    } else {
        this.finishEditing();
    }
  }

  onInputFocus = () => {
    this.setState({
        activeIndex: this.getActiveInputIndex(),
    });
  }

  onChangeInputHandler = (name, value) => {
    this.setState({
        [name]: value,
    });
  }

  getActiveInputIndex = () => {
    const activeIndex = this.inputs().findIndex((input) => {
        if (input.current == null) {
            return false;
        }
        return input.current.isFocused();
    });
    return activeIndex;
  }

  finishEditing = () => {
    const activeIndex = this.getActiveInputIndex();
    if (activeIndex === -1) {
        return;
    }
    this.setFocus(this.inputs()[activeIndex], false);
  }

  onSuccess()
  {
      this.props.navigation.navigate('Home');
  }

  setFocus(textInputRef, shouldFocus) {
    if (shouldFocus) {
        setTimeout(() => {
            textInputRef.current.focus();
        }, 100);
    } else {
        textInputRef.current.blur();
    }
  }

  submitPressed() {
    const { nome, sobrenome, email, telefone, idade, descricaoDoPerfil, senha} = this.state;

  if(nome.length < 1 || sobrenome.length < 1 || email.length < 1 || telefone.length < 1 || idade.length < 1 || descricaoDoPerfil.length < 1 || senha.length < 4){
      this.setState({
        shownomeError: nome.length < 1,
        showsobrenomeError: sobrenome.length < 1,
        showEmailError: email.length < 1,
        showtelefoneError: telefone.length < 1,
        showidadeError: idade.length < 1,
        showDescricaoDoPerfilError: descricaoDoPerfil.length < 1,
        showSenhaError: senha.length < 4
      });
  }else{
    const configurationObject = {
      url: baseUrl,
      method: "POST",
      data: { nome, sobrenome, email, telefone, idade, descricaoDoPerfil, senha },
    };

    axios(configurationObject)
      .then((response) => {
        if (response.status === 201) {
        //  alert(` You have updated: ${JSON.stringify(response.data)}`);
        alert(`Cadastro feito com sucesso!`);
        this.props.navigation.navigate('Home');
      } else {
        alert(`Ops, ocorreu um erro, tente mais tarde`);
          throw new Error("An error has occurred ",response);
        }
      })
      .catch(error => console.log(error.response));
     

    Keyboard.dismiss();
  }

  }

  render() {
    return (
        <KeyboardAwareScrollView
          style={styles.container}
          contentOffset={{ x: 0, y: 24 }}
          ref={this._scrollViewRef}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingTop: 24 }}
          contentInsetAdjustmentBehavior="always"
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          enableOnAndroid={true}
          extraHeight={32}
          extraScrollHeight={Platform.OS == "android" ? 32 : 0}
          enableResetScrollToCoords={false}
          onKeyboardDidShow={this._keyboardDidShowHandler}
        >
            <View style={styles.container}>

                <Text style={styles.header}>Registrar</Text>


                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Nome"
                        style={styles.textInput}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={(val) => {this.setState({ nome: val });}}
                    />
                    {this.state.shownomeError &&
                        <Text style={styles.errorText}>Por favor preencha seu primeiro nome.</Text>
                    }
                </View>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Sobrenome"
                        style={styles.textInput}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={(val) => {this.setState({ sobrenome: val });}}
                        ref={this.sobrenomeInputRef}
                      />
                    {this.state.showsobrenomeError &&
                        <Text style={styles.errorText}>Por favor preencha seu sobrenome.</Text>
                    }
                </View>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Email"
                        style={styles.textInput}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={(val) => {this.setState({ email: val });}}
                        ref={this.emailInputRef}
                    />
                    {this.state.showEmailError &&
                        <Text style={styles.errorText}>Por favor entre com seu email.</Text>
                    }
                </View>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Telefone"
                        style={styles.textInput}
                        returnKeyType="done"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={(val) => {this.setState({ telefone: val });}}
                        ref={this.telefoneInputRef}
                    />
                    {this.state.showtelefoneError &&
                        <Text style={styles.errorText}>Por favor preencha seu telefone.</Text>
                    }
                </View>
                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Idade"
                        style={styles.textInput}
                        returnKeyType="done"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={(val) => {this.setState({ idade: val });}}
                        ref={this.idadeInputRef}
                    />
                    {this.state.showidadeError &&
                        <Text style={styles.errorText}>Por favor preencha sua idade.</Text>
                    }
                </View>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Descricao do perfil"
                        style={styles.textInput}
                        returnKeyType="done"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={(val) => {this.setState({ descricaoDoPerfil: val });}}
                        ref={this.descricaoDoPerfilRef}
                    />
                    {this.state.showDescricaoDoPerfilError &&
                        <Text style={styles.errorText}>Por favor preencha sua descrição do perfil.</Text>
                    }
                </View>
                <View style={styles.inputTextWrapper}>
                    <TextInput
                        secureTextEntry={true} 
                        placeholder="Senha"
                        style={styles.textInput}
                        returnKeyType="done"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={(val) => {this.setState({ senha: val });}}
                        ref={this.senhaRef}
                    />
                    {this.state.showSenhaError &&
                        <Text style={styles.errorText}>Por favor preencha sua senha</Text>
                    }
                </View>
                <View style={styles.btnContainer}>
                  <Button title="Cadastrar" onPress={this.submitPressed} />
                </View>

            </View>
        </KeyboardAwareScrollView>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      paddingBottom: 100,
    },
    header: {
      fontSize: 36,
      padding: 24,
      margin: 12,
      textAlign: "center",
    },
    inputTextWrapper: {
      marginBottom: 24,
    },
    textInput: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      paddingRight: 30,
    },
    errorText: {
      color: 'red',
      fontSize: 10,
    },
    btnContainer: {
      backgroundColor: '#00ced1',
      marginTop:36,
    }

  });
