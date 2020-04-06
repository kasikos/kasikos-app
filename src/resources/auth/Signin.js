import React from 'react';
import { Input, Button, Text } from 'react-native-elements'
import { StyleSheet, View } from 'react-native';

// Icon
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Signin extends React.Component {

    render() {

        return (
            <View style={css.container}>
                <View style={css.header}>
                    <Text h3 style={css.headerTitle}>Account Signin</Text>
                </View>
                <View style={css.form}>
                    <Input
                        placeholder='Email'
                        leftIcon={<Icon name='envelope' style={css.icon} size={15} color='#666' />}
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={<Icon name='lock' style={css.icon} size={20} color='#666' />}
                    />
                    <View style={css.buttonSection}>
                        <Button title="Signin" buttonStyle={css.buttonContainer} />
                    </View>
                </View>
            </View>
        );
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center'
    },
    header: {
        alignItems: 'center'
    },
    headerTitle: {
        color: '#FF6F00',
        letterSpacing: 1,
        textTransform: 'uppercase'
    },
    form: {
        padding: 25
    },
    icon: { 
        width: 20 
    },
    buttonSection: {
        paddingVertical: 30,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#FF6F00'
    }
});