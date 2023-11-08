import { StyleSheet, View, ScrollView } from 'react-native';

import Top from './Components/Top';
import Details from './Components/Details';
import Itens from './Components/Itens';
export default function Basket({ top, details, itens }) {
    return <ScrollView>
        <Top {...top} />
        <View style={styles.bucket}>
            <Details {...details} />
            <Itens {...itens} />
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    bucket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
});