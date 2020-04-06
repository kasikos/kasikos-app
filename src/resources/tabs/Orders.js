import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Orders extends React.Component {

    static options(props) {
        return {
            topBar: { visible: false }
        }
    }

    render() {
        return (
            <View style={css.container}>
                <Text>Orders Screen</Text>
            </View>
        );
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    }
});