import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MealDetails extends React.Component {

    static options(props) {
        return {
            topBar: { 
                visible: true, 
                title: {text: props.data.name } 
            }
        }
    }

    render() {
        return (
            <View style={css.container}>
                <Text>Meal Screen</Text>
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