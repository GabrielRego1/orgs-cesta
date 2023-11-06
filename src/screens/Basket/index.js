import { StyleSheet, View } from 'react-native';

import Top from './Components/Top';
import Details from './Components/Details';
export default function Basket() {
    return <>
        <Top />
        <View style={styles.bucket}>
            <Details />
        </View>
    </>
}

const styles = StyleSheet.create({
    bucket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
});