import React, { useState } from 'react';
import { View, Text, Image, TextInput, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from './styles';


export const Login = () => {
    const [text, onChangeText] = React.useState();
    const [senha, onChangeSenha] = React.useState();

    return (
        <View style={styles.containerGeral} >
            <StatusBar color='black' translucent={false}></StatusBar>
            <View style={styles.cabesalho}>
                <Image style={{ marginTop: 13, marginLeft: 10 }} source={require('../../assets/x.png')}></Image>
                <Text style={styles.FonteTele}>TELE</Text>
                <Text style={styles.FonteCine}>CINE</Text>
            </View>
            <View>
                <View style={styles.caixalogo}>
                    <Image style={styles.sky} source={require('../../assets/sky.png')}></Image>
                </View>
                <TextInput paddingLeft={12} style={styles.Caxinha} value={text} onChangeText={onChangeText}  placeholder='Usuário (login) ou CPF'></TextInput>
                <TextInput paddingLeft={12} style={styles.Caxinha1} value={senha} onChangeSenha={onChangeSenha} placeholder='Digite sua senha'></TextInput>

                <TouchableOpacity style={styles.entrar}>
                    <Text style={{ alignSelf: 'center', color: 'white'}}> ENTRAR </Text>
                </TouchableOpacity>
                <Text style={{color: 'red', marginLeft: 50, fontWeight: '700', marginTop: 12}}>Esqueci minha senha</Text>

                <View style={{flexDirection: 'row'}} >
                    <View style={{backgroundColor: 'grey', height: 1, width: 100, marginTop: 15, marginLeft: 52}}></View>
                    <Text style={{marginLeft: 30, fontWeight: '700'}}>ou</Text>
                    <View style={{backgroundColor: 'grey', height: 1, width: 100,marginTop: 15, marginLeft: 40}}></View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{marginLeft: 52, marginTop: 15, fontWeight: '700' }}>Para primeiro acesso,</Text>
                    <Text style={{marginLeft: 3, marginTop: 15, fontWeight: '700', color: 'red' }}>clique aqui</Text>
                </View>
            </View>

        </View>
    );
};

