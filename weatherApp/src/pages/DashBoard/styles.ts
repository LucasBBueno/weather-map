import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #F6F7F9;
`;

export const LocationContainer = styled.View`
  flex: 2;
  max-height: 60%;
  background: #3867D6;
  padding: 0 32px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
`;

export const Header = styled.View`
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled(RectButton)`
`;

export const ButtonReload = styled(RectButton)`
  background: #FD9644;
  width: 124px;
  height: 45px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonReloadText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 16px;
  color: #FFF;
  margin-left: 5px;
`;

export const Report = styled.View`
  margin-top: 30px;
`;

export const City = styled.Text`
  font-size: 32px;
  color: #FFF;
`;

export const DateLabel = styled.Text`
  margin-top: 10px;
  color: #A4B0BE;
`;

export const TemperatureInfo = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StatusLabel = styled.Text`
  font-size: 20px;
  color: #FF9900;
  margin-left: 8px;
`;

export const Temperature = styled.Text`
  font-family: 'Robot-Medium';
  font-size: 60px;
  color: #FFF;
`;

export const MapContainer = styled.View`
  margin-top: 15px;
  border-radius: 5px;
`;

export const AditionalInfo = styled.View`
  padding: 0 32px;
  background: #FFF;
  border-radius: 10px;
  margin: 30px 15px 0 15px;
  height: 15%;
  justify-content: center;
  elevation: 12;
`;

export const AditionalInfoTitle = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 22px;
  color: #FD9644;
`;

export const Columns = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Column = styled.View`
  align-items: center;
`;

export const ColumnLabel = styled.Text`
  font-size: 16px;
  color: #A4B0BE;
`;

export const ColumnValue = styled.Text`
  margin-left: 5px;
`;

export const ReportHours = styled.View`
  background: #CED6E0;
  margin-top: 25px;
  flex: 1;
  max-height: 20%;;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  align-items: center;
  flex-direction: row;
`;

export const TemperatureReport = styled.View`
  margin: 10px;
  background: #3867D6;
  width: 120px;
  height: 120px;
  align-items: center;
  border-radius: 30px;
`;

export const TemperatureHour = styled.Text`
  color: #FFF;
  font-size: 16px;
  padding: 4px;
`;

export const IconCircle = styled.View`
  background: #FFF;
  border-radius: 50px;
  padding: 10px;
`;

export const TemperatureValue = styled.Text`
  color: #FFF;
  font-size: 24px;
  padding: 4px;
`;
