import React, { useState, useEffect } from 'react';
import { StatusBar, FlatList, PermissionsAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import GeoLocation from '@react-native-community/geolocation';
import { Marker } from 'react-native-maps';

import api from '../../services/openWeatherApi';

import {
  Container,
  LocationContainer,
  Header,
  BackButton,
  ButtonReload,
  ButtonReloadText,
  Report,
  City,
  DateLabel,
  TemperatureInfo,
  Status,
  StatusLabel,
  Temperature,
  MapContainer,
  AditionalInfo,
  AditionalInfoTitle,
  Columns,
  Column,
  ColumnLabel,
  ColumnValue,
  ReportHours,
  TemperatureReport,
  TemperatureHour,
  IconCircle,
  TemperatureValue,
} from './styles';

interface WeatherReport {
  weather: [
    {
      description: string;
      icon: string;
    },
  ];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  name: string;
}

interface UserPosition {
  latitude: number;
  longitude: number;
}

const DashBoard: React.FC = () => {
  const [hasLocalPermission, setHasLocalPermisson] = useState(false);
  const [userPosition, setUserPosition] = useState<UserPosition | null>(null);

  const navigation = useNavigation();

  async function verifyLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('permissão concedida');
        setHasLocalPermisson(true);
      } else {
        console.log('permissão negada');
        setHasLocalPermisson(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    verifyLocationPermission();

    if (hasLocalPermission) {
      GeoLocation.getCurrentPosition(
        position => {
          setUserPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          console.log(position);
        },
        error => {
          console.log(error.code, error.message);
        },
      );
    }
  }, [hasLocalPermission]);

  const DATA = [
    {
      hour: '10:00',
      temperature: '26',
    },
    {
      hour: '12:00',
      temperature: '25',
    },
    {
      hour: '14:00',
      temperature: '23',
    },
    {
      hour: '16:00',
      temperature: '23',
    },
  ];

  function handleNavigationGoBackToWelcome() {
    navigation.goBack();
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3867D6" />
      <Container>
        <LocationContainer>
          <Header>
            <BackButton onPress={handleNavigationGoBackToWelcome}>
              <Icon name="arrow-left" size={26} color="#FFF" />
            </BackButton>

            <ButtonReload>
              <Icon name="rotate-ccw" size={26} color="#FFF" />
              <ButtonReloadText>Atualizar</ButtonReloadText>
            </ButtonReload>
          </Header>

          <Report>
            <City>Salto</City>

            <DateLabel>20 Maio, 2020</DateLabel>

            <TemperatureInfo>
              <Status>
                <Icon name="sun" size={30} color="#FF9900" />

                <StatusLabel>Ensolarado</StatusLabel>
              </Status>

              <Temperature>25 ºC</Temperature>
            </TemperatureInfo>
          </Report>

          {userPosition && (
            <MapContainer
              initialRegion={{
                latitude: userPosition.latitude,
                longitude: userPosition.longitude,
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
            >
              <Marker coordinate={userPosition} />
            </MapContainer>
          )}
        </LocationContainer>

        <AditionalInfo>
          <AditionalInfoTitle>Informação Adicional</AditionalInfoTitle>

          <Columns>
            <Column>
              <ColumnLabel>Chuva</ColumnLabel>

              <ColumnValue>33%</ColumnValue>
            </Column>

            <Column>
              <ColumnLabel>Humidade</ColumnLabel>

              <ColumnValue>20%</ColumnValue>
            </Column>

            <Column>
              <ColumnLabel>Vento</ColumnLabel>

              <ColumnValue>18 km/h</ColumnValue>
            </Column>

            <Column>
              <ColumnLabel>Max</ColumnLabel>

              <ColumnValue>26 ºC</ColumnValue>
            </Column>

            <Column>
              <ColumnLabel>Min</ColumnLabel>

              <ColumnValue>15 ºC</ColumnValue>
            </Column>
          </Columns>
        </AditionalInfo>

        <ReportHours>
          <FlatList
            data={DATA}
            keyExtractor={item => item.hour}
            horizontal
            renderItem={({ item }) => (
              <TemperatureReport>
                <TemperatureHour>{item.hour}</TemperatureHour>

                <IconCircle>
                  <Icon name="cloud" size={30} color="#A4B0BE" />
                </IconCircle>

                <TemperatureValue>{`${item.temperature} ºC`}</TemperatureValue>
              </TemperatureReport>
            )}
          />
        </ReportHours>
      </Container>
    </>
  );
};

export default DashBoard;
