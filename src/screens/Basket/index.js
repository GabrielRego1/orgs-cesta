import { StyleSheet, View } from 'react-native';

import Top from './Components/Top';
import Details from './Components/Details';
export default function Basket({ top, details }) {
    return <>
        <Top {...top} />
        <View style={styles.bucket}>
            <Details {...details} />
        </View>
    </>
}

const styles = StyleSheet.create({
    bucket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
});