import React from 'react';
import {
  StatusBar, Image, FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import mapTest from '../../assets/map-test.png';

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

interface TemperaturesBox {
  hour: string;
  temperature: number;
}

const DashBoard: React.FC = () => {
  const navigation = useNavigation();

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
              <ButtonReloadText>
                Atualizar
              </ButtonReloadText>
            </ButtonReload>
          </Header>

          <Report>
            <City>
              Salto
            </City>

            <DateLabel>
              20 Maio, 2020
            </DateLabel>

            <TemperatureInfo>
              <Status>
                <Icon name="sun" size={30} color="#FF9900" />

                <StatusLabel>
                  Ensolarado
                </StatusLabel>
              </Status>

              <Temperature>
                25 ºC
              </Temperature>
            </TemperatureInfo>
          </Report>

          <MapContainer>

            <Image source={mapTest} />

            {/* sera alterado para usar o map view */}

          </MapContainer>
        </LocationContainer>

        <AditionalInfo>
          <AditionalInfoTitle>
            Informação Adicional
          </AditionalInfoTitle>

          <Columns>
            <Column>
              <ColumnLabel>
                Chuva
              </ColumnLabel>

              <ColumnValue>
                33%
              </ColumnValue>
            </Column>

            <Column>
              <ColumnLabel>
                Humidade
              </ColumnLabel>

              <ColumnValue>
                20%
              </ColumnValue>
            </Column>

            <Column>
              <ColumnLabel>
                Vento
              </ColumnLabel>

              <ColumnValue>
                18 km/h
              </ColumnValue>
            </Column>

            <Column>
              <ColumnLabel>
                Max
              </ColumnLabel>

              <ColumnValue>
                26 ºC
              </ColumnValue>
            </Column>

            <Column>
              <ColumnLabel>
                Min
              </ColumnLabel>

              <ColumnValue>
                15 ºC
              </ColumnValue>
            </Column>
          </Columns>

        </AditionalInfo>

        <ReportHours>
          <FlatList
            data={DATA}
            keyExtractor={(item) => item.hour}
            horizontal
            renderItem={({ item }) => (
              <TemperatureReport>
                <TemperatureHour>
                  {item.hour}
                </TemperatureHour>

                <IconCircle>

                  <Icon name="cloud" size={30} color="#A4B0BE" />

                </IconCircle>

                <TemperatureValue>
                  {`${item.temperature} ºC`}
                </TemperatureValue>
              </TemperatureReport>
            )}
          />

        </ReportHours>

      </Container>
    </>
  );
};

export default DashBoard;
