import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerGeral: {
        height: '100%',
        backgroundColor: '#101010',
    },

    containerRetangulo: {
         height: 50,
        width:  '100%',
        backgroundColor: '#252527',
    },

    container: {
        flexDirection: 'row',
        height: 50,
        width:  '100%',
        backgroundColor: '#252527',
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
        margin: 13,
        marginLeft: 17,
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

    FonteTele: {
        fontSize: 20,
        alignSelf: 'center',
        marginLeft: 117,
        color: '#fffffd', 
        marginTop: 1,
        fontWeight: '700',

    },

    FonteCine: {
        color: '#ec1831',
        fontSize: 20,
        alignSelf: 'center',
        marginLeft: 0.8,
        marginTop: 1,
        fontWeight: '700',
       
    },
});
 

