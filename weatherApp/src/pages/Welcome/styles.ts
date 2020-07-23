import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const ImageBackground = styled.Image`
  margin-top: 50px;
`;

export const Description = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 18px;
  margin: 50px 0 0 -80px;
  color: rgba(87, 101, 116, 0.79);
  width: 247px;
`;

export const ButtonContainer = styled(RectButton)`
  margin: 60px 0 0;
  width: 100%;
  height: 50px;
  background: #2046a0;
  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 18px;
  color: #fff;
`;
