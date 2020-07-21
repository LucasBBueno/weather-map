import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/weather-logo.png';
import backgroundImage from '../../assets/weather-home-background.png';

import {
  Container, ImageBackground, Description, ButtonContainer, ButtonText,
} from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToDashboard() {
    navigation.navigate('DashBoard');
  }

  return (
    <Container>
      <Image source={logoImg} />

      <ImageBackground source={backgroundImage} />

      <Description>
        Uma aplicação para o acesso aos dados climáticos de sua localização.
      </Description>

      <ButtonContainer onPress={handleNavigateToDashboard}>
        <ButtonText>Acessar</ButtonText>
      </ButtonContainer>

    </Container>
  );
};

export default Welcome;
