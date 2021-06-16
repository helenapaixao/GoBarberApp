import React from 'react';
import {Container, Title, ForgotPassword, ForgotPasswordText,CreateAccountButton,CreateAccountButtontext} from './styles'
import Icon from 'react-native-vector-icons/Feather'
import logoImg from '../../assets/logo.png';
import { Image, KeyboardAvoidingView, Platform,View,ScrollView} from 'react-native';

import Input from '../../components/Input'
import Button from '../../components/Button'


export const SignIn: React.FC = () => {
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

     <Title>Faça seu logon</Title>

     </View>
     <Input name="email" icon="mail" placeholder="E-mail"/>
     <Input name="password" icon="lock" placeholder="password"/>
     <Button onPress={() => {}}>Entrar</Button>
     <ForgotPassword onPress={() => {}}>
     <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>

     </ForgotPassword>
   </Container>
      </ScrollView>
   

    <CreateAccountButton onPress={() => {}}>
      <Icon name="log-in" size={20} color="#Ff9000">
      <CreateAccountButtontext>Criar uma conta</CreateAccountButtontext>
      </Icon>
    </CreateAccountButton>
    </KeyboardAvoidingView>
    
    </>
  )
}


export default SignIn;