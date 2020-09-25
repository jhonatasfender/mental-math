import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    SafeAreaView: {
        height: '100%',
    },
    header: {
        flexDirection: 'row',
    },
    boxInfo: {
        alignItems: 'flex-end',
        flex: 1,
        padding: 20,
    },
    avatar: {
        margin: 20,
        width: 150,
        height: 150,
        borderRadius: 200,
    },
    boxPontos: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    pontos: {
        color: '#fff',
        fontWeight: 'bold',
        marginRight: 5,
        fontSize: 20
    },
    diamante: {
        width: 20,
        height: 20,
    },
    scrollView: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        padding: 10,
        borderRadius: 8,
        margin: 20,
        borderBottomWidth: 0,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'rgba(0,0,0,1)',
        shadowRadius: 2,
        elevation: 2,
    },
    footer: {
        marginVertical: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    },
    imgFooter: {
        width: 50,
        height: 50,
    },
    imgFooterPlay: {
        width: 150,
        height: 150
    },
    boxProgress: {
        position: 'relative'
    },
    barProgress: {
        height: 100,
        width: 100
    },
    textProgress: {
        position: 'absolute',
        top: 40,
        width: 100,
        textAlign: 'center',
        color: '#45ddfd',
        fontWeight: 'bold',
        fontSize: 15
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});
