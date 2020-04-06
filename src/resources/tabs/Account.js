import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class Account extends React.Component {

    static options(props) {
        return {
            topBar: { visible: false }
        }
    }

    render() {
        return (
            <View style={css.container}>
                <Text>Account Screen</Text>
                <Button title="Notify" />
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