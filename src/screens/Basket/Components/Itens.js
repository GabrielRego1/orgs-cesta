import Content from "../../../components/Content";
import { View, Image, StyleSheet } from "react-native";

export default function Itens({ title, list }) {
    return (
        <>
            <Content style={styles.title} >{title}</Content>
            {
                list.map((item, index) => (
                    <View key={index} style={styles.item}>
                        <Image source={item.image} styles={styles.image} />
                        <Content style={styles.name}>{item.name}</Content>
                    </View>
                ))
            }
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center'
    },
    image: {
        width: 46,
        height: 46,
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646'
    }
})