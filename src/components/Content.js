import { StyleSheet, Text } from 'react-native';
export default function Content({ children, style }) {
    let styleContent = styles.text;

    if (style?.fontWeight === 'bold')
        styleContent = styles.textBold;

    return <Text style={[style, styleContent]}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal'
    },
    textBold: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
});