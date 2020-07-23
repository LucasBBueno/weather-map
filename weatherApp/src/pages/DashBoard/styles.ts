import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
  background: #f6f7f9;
`;

export const LocationContainer = styled.View`
  flex: 2;
  max-height: 65%;
  background: #3867d6;
  padding: 0 32px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
`;

export const Header = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled(RectButton)``;

export const ButtonReload = styled(RectButton)`
  background: #fd9644;
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
  color: #fff;
  margin-left: 5px;
`;

export const Report = styled.View`
  margin-top: 20px;
`;

export const City = styled.Text`
  font-size: 32px;
  color: #fff;
`;

export const DateLabel = styled.Text`
  margin-top: 10px;
  color: #a4b0be;
`;

export const TemperatureInfo = styled.View`
  margin-top: 20px;
  align-items: flex-end;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const StatusImage = styled.Image`
  height: 50px;
  width: 50px;
`;

export const StatusLabel = styled.Text`
  font-size: 20px;
  color: #ff9900;
  margin-left: 8px;
`;

export const Temperature = styled.Text`
  font-family: 'Robot-Medium';
  font-size: 50px;
  color: #fff;
`;

export const MapContainer = styled(MapView)`
  margin-top: 15px;
  height: 178px;
  width: 100%;
`;

export const AditionalInfo = styled.View`
  padding: 0 32px;
  background: #fff;
  border-radius: 10px;
  margin: 15px 15px 15px 15px;
  height: 15%;
  justify-content: center;
  elevation: 12;
`;

export const AditionalInfoTitle = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 22px;
  color: #fd9644;
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
  color: #a4b0be;
`;

export const ColumnValue = styled.Text`
  margin-left: 5px;
`;

export const ReportHours = styled.View`
  background: #ced6e0;
  flex: 1;
  max-height: 18%;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  align-items: center;
  flex-direction: row;
`;

export const TemperatureReport = styled.View`
  margin: 10px;
  background: #3867d6;
  width: 110px;
  height: 120px;
  align-items: center;
  border-radius: 30px;
`;

export const TemperatureHour = styled.Text`
  color: #fff;
  font-size: 16px;
  padding: 4px;
`;

export const TemperatureValue = styled.Text`
  color: #fff;
  font-size: 18px;
  padding: 4px;
`;

export const NoDataContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NoDataText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 22px;
  color: #fff;
`;
