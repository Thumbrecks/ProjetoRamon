import React, { useState } from 'react';
import { View, Text, Image, TextInput, SafeAreaView, StatusBar } from 'react-native';
import { styles } from './src/styles';
import { Login } from './src/Login/login'


const App = () => {
  return (
    <View style={styles.containerGeral} >
      <StatusBar color='black' translucent={false}></StatusBar>
      < View style={styles.containerRetangulo}>

        <View style={styles.container}>

          <Image style={{ marginTop: 12, marginLeft: 15 }} source={require('./assets/menu.png')}></Image>
          <Text style={styles.FonteTele}>TELE</Text>
          <Text style={styles.FonteCine}>CINE</Text>
          <Image style={styles.Image1} source={require('./assets/pesquisa.png')} />
        </View>

      </View>

      <View style={{ flexDirection: 'column', }}>
        <Image style={styles.Carrosel} source={require('./assets/Aguerra.png')} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.FonteLançamentos} style={{ color: '#fffffd', }}>LANÇAMENTOS</Text>
        <Image style={styles.SetaLançamento} source={require('./assets/Seta.png')} />
      </View>

      <View style={{ flexDirection: 'row' }}>

        <Image style={styles.films} style={{ width: 100, height: 140, marginLeft: 22, }} source={require('./src/films/guerra.png')} />
        <Image style={styles.films} style={{ width: 100, height: 140, marginLeft: 22, }} source={require('./src/films/konbat.png')} />
        <Image style={styles.films} style={{ width: 100, height: 140, marginLeft: 22, }} source={require('./src/films/samurai.png')} />
          
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.FonteLançamentos} style={{ color: '#fffffd' }}>EM BREVE NO TELECINE</Text>
        <Image style={styles.SetaLançamento} source={require('./assets/Seta.png')} />
      </View>

      <View style={{ flexDirection: 'row', }}>

        <Image style={styles.films} style={{ width: 100, height: 140, marginLeft: 22, }} source={require('./src/films/viuva.png')} />
        <Image style={styles.films} style={{ width: 100, height: 140, marginLeft: 22, }} source={require('./src/films/velozes.png')} />
        <Image style={styles.films} style={{ width: 100, height: 140, marginLeft: 22, }} source={require('./src/films/sexy.png')} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.FonteLançamentos} style={{ color: '#fffffd' }}>SERIES</Text>
        <Image style={styles.SetaLançamento} source={require('./assets/Seta.png')} />
      </View>

      <View style={{ flexDirection: 'row', }}>

        <Image style={styles.series} style={{ width: 100, height: 140, marginLeft: 22, }} source={require('./src/films/Dom.png')} />
        <Image style={styles.series} style={{ width: 100, height: 140, marginLeft: 22, }} source={require('./src/films/loki.png')} />
        <Image style={styles.series} style={{ width: 100, height: 140, marginLeft: 22, }} source={require('./src/films/sweet.png')} />
      </View>

    </View>
    // <View>
    //   <Login /> 
    // </View>
  );
};




export default App;