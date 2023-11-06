import { Dimensions, StyleSheet, Image, Text } from 'react-native';
import top from '../../../../assets/top.png'
const width = Dimensions.get('screen').width
export default function Top() {
    return (
        <>
            <Image source={top} style={styles.top} />
            <Text style={styles.title}>Detalhes da Cesta</Text>
        </>
    )
}


const styles = StyleSheet.create({
    top: {
        width: "100%",
        height: 578 / 768 * width
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        lineHeight: 16,
        fontWeight: 'bold',
        padding: 16
    },
})