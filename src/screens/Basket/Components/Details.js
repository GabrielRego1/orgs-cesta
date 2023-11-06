import { StyleSheet, Image, Text, View } from 'react-native';
import logo from '../../../../assets/logo.png'

export default function Details() {
    return (
        <>
            <Text style={styles.name}>Cesta de Verduras</Text>
            <View style={styles.boxFarm}>
                <Image source={logo} style={styles.imageFarm} />
                <Text style={styles.farm}>Jenny Jack Farm</Text>
            </View>
            <Text style={styles.description}>Uma cesta com produtos selecionados
                cuidadosamente da fazenda
                para sua cozinha</Text>
            <Text style={styles.price}>R$ 40,00</Text>
        </>
    )
}

const styles = StyleSheet.create({
    name: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontFamily: 'MontserratBold'
    },
    farm: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: 'MontserratRegular'
    },
    imageFarm: {
        width: 32,
        height: 32,
    },
    boxFarm: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    description: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})
