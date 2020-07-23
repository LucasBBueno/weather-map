import React, { useState, useEffect } from 'react';
import { StatusBar, FlatList, PermissionsAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import GeoLocation from '@react-native-community/geolocation';
import { Marker } from 'react-native-maps';

import api from '../../services/openWeatherApi';
import { apiKey } from '../../config/openWeatherApiKey';

import { imgBaseURL } from '../../config/openWeatherIconBaseLink';

import {
  formatActualDateForDayWithMonthAndYear,
  formatDateTimeFromTimeStamp,
} from '../../utils/dateFormatter';

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
  StatusImage,
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
  TemperatureValue,
  NoDataContainer,
  NoDataText,
} from './styles';

interface UserPosition {
  latitude: number;
  longitude: number;
}

interface CurrentWeather {
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
  iconUrl: string;
  formattedDate: string;
}

interface HourlyWeather {
  dt: number;
  temp: number;
  weather: [
    {
      icon: string;
    },
  ];
  iconUrl: string;
}

const DashBoard: React.FC = () => {
  const [hasLocalPermission, setHasLocalPermisson] = useState(false);
  const [userPosition, setUserPosition] = useState<UserPosition | null>(null);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null,
  );
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeather[]>([]);

  const navigation = useNavigation();

  async function verifyLocationPermission(): Promise<void> {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setHasLocalPermisson(true);
      } else {
        setHasLocalPermisson(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function findCurrentWeatherByUserPosition(): void {
    if (userPosition) {
      api
        .get(
          `weather?lat=${userPosition.latitude}&lon=${userPosition.longitude}&appid=${apiKey}&units=metric&lang=pt_br`,
        )
        .then(response => {
          const { weather, main, wind, name } = response.data;
          setCurrentWeather({
            weather,
            main,
            wind,
            name,
            iconUrl: `${imgBaseURL}/${weather[0].icon}@2x.png`,
            formattedDate: formatActualDateForDayWithMonthAndYear(),
          });
        })
        .catch(err => console.log(err));
    }
  }

  function findHourlyWeatherByUserPosition(): void {
    if (userPosition) {
      api
        .get(
          `onecall?lat=${userPosition.latitude}&lon=${userPosition.longitude}&exclude=current,minutel,daily&appid=${apiKey}&units=metric&lang=pt_br`,
        )
        .then(response => {
          const { hourly } = response.data;

          const formattedHourly = hourly.map((hour: HourlyWeather) => ({
            ...hour,
            iconUrl: `${imgBaseURL}/${hour.weather[0].icon}@2x.png`,
          }));
          setHourlyWeather(formattedHourly);
        })
        .catch(err => console.log(err));
    }
  }

  function handleReloadButton(): void {
    findCurrentWeatherByUserPosition();
    findHourlyWeatherByUserPosition();
  }

  function handleNavigationGoBackToWelcome(): void {
    navigation.goBack();
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
        },
        error => {
          console.log(error.code, error.message);
        },
      );

      findCurrentWeatherByUserPosition();
      findHourlyWeatherByUserPosition();
    }
  }, [hasLocalPermission]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2046A0" />
      <Container>
        <LocationContainer>
          <Header>
            <BackButton onPress={handleNavigationGoBackToWelcome}>
              <Icon name="arrow-left" size={26} color="#FFF" />
            </BackButton>

            <ButtonReload onPress={handleReloadButton}>
              <Icon name="rotate-ccw" size={26} color="#FFF" />
              <ButtonReloadText>Atualizar</ButtonReloadText>
            </ButtonReload>
          </Header>

          {currentWeather ? (
            <>
              <Report>
                <City>{currentWeather.name}</City>

                <DateLabel>{currentWeather.formattedDate}</DateLabel>

                <Status>
                  <StatusImage source={{ uri: currentWeather.iconUrl }} />

                  <StatusLabel>
                    {currentWeather.weather[0].description}
                  </StatusLabel>
                </Status>

                <TemperatureInfo>
                  <Temperature>{`${currentWeather.main.temp} ºC`}</Temperature>
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
            </>
          ) : (
            <NoDataContainer>
              <NoDataText>Sem dados para exibir.</NoDataText>
              <NoDataText>Clique no botão Atualizar</NoDataText>
            </NoDataContainer>
          )}
        </LocationContainer>

        <AditionalInfo>
          {currentWeather && (
            <>
              <AditionalInfoTitle>Informação Adicional</AditionalInfoTitle>

              <Columns>
                <Column>
                  <ColumnLabel>Umidade</ColumnLabel>

                  <ColumnValue>{`${currentWeather.main.humidity}%`}</ColumnValue>
                </Column>

                <Column>
                  <ColumnLabel>Vento</ColumnLabel>

                  <ColumnValue>{`${currentWeather.wind.speed} km/h`}</ColumnValue>
                </Column>

                <Column>
                  <ColumnLabel>Max</ColumnLabel>

                  <ColumnValue>{`${currentWeather.main.temp_max} ºC`}</ColumnValue>
                </Column>

                <Column>
                  <ColumnLabel>Min</ColumnLabel>

                  <ColumnValue>{`${currentWeather.main.temp_min} ºC`}</ColumnValue>
                </Column>
              </Columns>
            </>
          )}
        </AditionalInfo>

        <ReportHours>
          {hourlyWeather && (
            <FlatList
              data={hourlyWeather}
              keyExtractor={item => item.dt.toString()}
              horizontal
              renderItem={({ item }) => (
                <TemperatureReport>
                  <TemperatureHour>
                    {formatDateTimeFromTimeStamp(item.dt)}
                  </TemperatureHour>

                  <StatusImage source={{ uri: item.iconUrl }} />

                  <TemperatureValue>{`${item.temp} ºC`}</TemperatureValue>
                </TemperatureReport>
              )}
            />
          )}
        </ReportHours>
      </Container>
    </>
  );
};

export default DashBoard;
