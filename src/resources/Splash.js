import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Splash extends React.Component {

    render() {

        return (
            <View>
                <Text>Splash Screen</Text>
            </View>
        );
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
});