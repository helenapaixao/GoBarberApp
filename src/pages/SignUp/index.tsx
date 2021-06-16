import React from 'react';
import {Container, Title,BackToSignIn,BackToSignInText} from './styles'
import Icon from 'react-native-vector-icons/Feather'
import logoImg from '../../assets/logo.png';
import { Image, KeyboardAvoidingView, Platform,View,ScrollView, Keyboard} from 'react-native';

import Input from '../../components/Input'
import Button from '../../components/Button'

import { useNavigation} from '@react-navigation/native'


export const SignUp: React.FC = () => {

  const navigation = useNavigation();
  return (
    <>
    <KeyboardAvoidingView
    style={{flex:1}}
    enabled
    
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView 
      contentContainerStyle={{flex:1}}
      keyboardShouldPersistTaps='handled'
      >
      <Container>
      <Image source={logoImg}/> 
     <View>

     <Title>Crie sua Conta</Title>

     </View>
     <Input name="name" icon="user" placeholder="Nome"/>
     <Input name="email" icon="mail" placeholder="E-mail"/>
     <Input name="password" icon="lock" placeholder="password"/>
     <Button onPress={() => {}}>Entrar</Button>
  
   </Container>
      </ScrollView>
   

    <BackToSignIn onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={20} color="#FFF">
      <BackToSignInText>Voltar para Logon</BackToSignInText>
      </Icon>
    </BackToSignIn>
    </KeyboardAvoidingView>
    
    </>
  )
}


export default SignUp;