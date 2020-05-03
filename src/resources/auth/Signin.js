import React from 'react';
import { Route } from '../../app/Router';
import { StyleSheet, View, Alert } from 'react-native';
import { Input, Button, Text } from 'react-native-elements'

// Components
import Storage from '../../app/Storage';

// Icon
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Signin extends React.Component {

    state = { email: null, password: null, active: false }

    async _login() {

        this.setState({ active: true });

        // Creditials
        let creditials = {
            email: this.state.email,
            password: this.state.password
        };

        const account = await Storage.get('creditials');

        if (account) {
            const auth = JSON.parse(account);
            // Attempt login
            if (auth.email == creditials.email && auth.password == creditials.password) {
                await Storage.set('token', 'asdhyIUOY908234LjaskK');

                this.setState({ active: false });
                return Route.back();
            }
        }
        
        this.setState({ active: false });
        Alert.alert('Signin', 'Wrong email or password!');
    }

    render() {

        return (
            <View style={css.container}>
                <View style={css.header}>
                    <Text h3 style={css.headerTitle}>Account Signin</Text>
                </View>
                <View style={css.form}>
                    <Input
                        placeholder='Email'
                        onChangeText={email => this.setState({ email })}
                        leftIcon={<Icon name='envelope' style={css.icon} size={15} color='#666' />}
                    />
                    <Input
                        secureTextEntry
                        placeholder='Password'
                        onChangeText={password => this.setState({ password })}
                        leftIcon={<Icon name='lock' style={css.icon} size={20} color='#666' />}
                    />
                    <View style={css.buttonSection}>
                        <Button 
                            title="Signin"
                            loading={this.state.active} 
                            buttonStyle={css.buttonContainer} 
                            onPress={this._login.bind(this)} />
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