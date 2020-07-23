<h1 align="center">
     <img height="70" style="border-radius: 10px 0 10px" src="https://res.cloudinary.com/lucasbbueno/image/upload/v1595476229/weather-logo_3x_krsqce.png">
</h1>

<h4 align="center">
  A React Native application to show current weather info
</h4>

<p align="center">
  <a href="#memo-about">About project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#rocket-technologies">Install</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#rocket-technologies">Config</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#rocket-technologies">Run</a>&nbsp;&nbsp;&nbsp;
</p>


<p align="center">
    <img height="550" src="https://res.cloudinary.com/lucasbbueno/image/upload/v1595476357/WeatherApp_qiqhsn.gif">
</P>

## :memo: About

This project consists of an application in React Native using TypeScript to display climatic data based on geo-location.

Two screens were created, the first being a Welcome screen with an access button for the screen with climatic data. It is possible to view information such as the city, temperature, humidity, in addition to having the temperature every hour.

With this development, it was possible to put into practice the use of geo location access with @ react-native-community / geolocation, in addition to using the OpenWeather API to load data based on latitude and longitude, as well as applying styled- components to isolate styles.


## :rocket: Technologies

The main technologies used were:

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/home.html)
- [Axios](https://github.com/axios/axios)
- [OpenWeatherAPI](https://openweathermap.org/api)
- [React-Native-Maps](https://github.com/react-native-community/react-native-maps)
- [styled-components](https://styled-components.com/docs)
- [Vector-Icons](https://github.com/oblador/react-native-vector-icons)
- [Google-Fonts](https://fonts.google.com/)
- [Yarn](https://yarnpkg.com/)
- [VS Code](https://code.visualstudio.com/)


## :floppy_disk: Install
To install this application we can use:
```bash
$ git clone https://github.com/LucasBBueno/weatherapp
$ cd weatherApp
$ yarn
```

## :wrench: Config
In order to consume the OpenWeather API data and use the location of react-native-maps, it is necessary to change the API key for each one respectively.

#####OpenWeather
To generate the API key for open weather you must follow the following [tutorial](https://openweathermap.org/guide). After being generated, we will change the file **openWeatherApiKey.ts**

```js
export const apiKey = 'apy key here';
```

#####GoogleMaps
In the case of Google Maps, we can follow this [tutorial](https://developers.google.com/maps/documentation/android-sdk/get-api-key#release-cert). With that, we must change the file **AndroidManifest.xml**. 

```js
<meta-data
android:name="com.google.android.geo.API_KEY"
android:value="Put Here you API key"/>;
```

## :cd: Run
With the apis keys configured, we can execute the project through:

```bash
$ yarn android
```

---
This project allowed to put into practice some of the main concepts when talking about a mobile application.

I am available for any questions.

Made with :heart: by Lucas Bueno :wave: [Get in touch!](https://www.linkedin.com/in/lucasbbueno).
