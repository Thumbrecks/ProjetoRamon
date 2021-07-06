import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerGeral: {
        height: '100%',
        backgroundColor: '#101010',
    },

    containerRetangulo: {
         height: 90,
        width:  '100%',
        backgroundColor: '#252527',
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 45,
        width: '92%',
        left: '80%',
    },

    input: {
        height: 50,
        width: 200,
        borderBottomWidth: 2,
    },

    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    Image: {
        width: 20,
        left: -100,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: 5,
    },

    Image1: {
        right: -85,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 4.2,
    },

    FonteTelecine: {
        fontSize: 30,
    },

    FonteLançamentos: {
        
        fontSize: 30,
       
    },

    Carrosel: {
        width: '100%',
        height: 210,
        resizeMode: 'cover',
        flexDirection: 'column',  
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    SetaLançamento: {
        
        width: 8,
        left: 5,
    },

    films: {
        flexDirection: 'row',
      flex:1,
    },

    series: {
        flexDirection: 'row',
      flex:1,
    },
});
 

