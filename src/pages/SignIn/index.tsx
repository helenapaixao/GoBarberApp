import React from 'react';
import {Container, Title} from './styles'

import logoImg from '../../assets/logo.png';
import { Image} from 'react-native';

import Input from '../../components/Input'
import Button from '../../components/Button'


export const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg}/>
      <Title>Faça seu logon</Title>
      <Input name="email" icon="mail" placeholder="E-mail"/>
      <Input name="password" icon="lock" placeholder="password"/>
      <Button onPress={() => {}}>Entrar</Button>
    </Container>
  )
}


export default SignIn;