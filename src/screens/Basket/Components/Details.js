import { StyleSheet, Image, View } from 'react-native';
import Content from '../../../components/Content'


export default function Details({ name,logo,farmName,description,price }) {
    return (
        <>
            <Content style={styles.name}>{name}</Content>
            <View style={styles.boxFarm}>
                <Image source={logo} style={styles.imageFarm} />
                <Content style={styles.farm}>{farmName}</Content>
            </View>
            <Content style={styles.description}>{description}</Content>
            <Content style={styles.price}>{price}</Content>
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
