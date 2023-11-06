import { StyleSheet, Image, View } from 'react-native';
import logo from '../../../../assets/logo.png'
import Content from '../../../components/Content'


export default function Details() {
    return (
        <>
            <Content style={styles.name}>Cesta de Verduras</Content>
            <View style={styles.boxFarm}>
                <Image source={logo} style={styles.imageFarm} />
                <Content style={styles.farm}>Jenny Jack Farm</Content>
            </View>
            <Content style={styles.description}>Uma cesta com produtos selecionados
                cuidadosamente da fazenda
                para sua cozinha</Content>
            <Content style={styles.price}>R$ 40,00</Content>
        </>
    )
}

const styles = StyleSheet.create({
    name: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    farm: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
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
