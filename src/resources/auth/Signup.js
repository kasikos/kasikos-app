import React from 'react';
import _ from 'lodash';
import { StyleSheet, View, Alert } from 'react-native';
import { Input, Button, Text } from 'react-native-elements'

// Components
import Storage from '../../app/Storage';

// Icon
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Signup extends React.Component {

    state = { email: null, password: null, active: false }

    _register() {

        this.setState({ active: true });

        // Creditials
        let creditials = {
            email: this.state.email,
            password: this.state.password
        };

        if (_.isEmpty(creditials.email) || _.isEmpty(creditials.password)) {
            this.setState({ active: false });
            return Alert.alert('Signup', 'Registration fail!');
        }

        // Store
        Storage.set('creditials', JSON.stringify(creditials)).then(res => {
            this.setState({ active: false });
            Alert.alert('Signup', 'Account registered successfully!');
        }, err => console.log(err));

    }

    render() {

        return (
            <View style={css.container}>
                <View style={css.header}>
                    <Text h3 style={css.headerTitle}>Register Account</Text>
                </View>
                <View style={css.form}>
                    <Input
                        placeholder='Full Name'
                        leftIcon={<Icon name='user' style={css.icon} size={20} color='#666' />}
                    />
                    <Input
                        placeholder='Mobile Number'
                        leftIcon={<Icon name='mobile' style={css.icon} size={25} color='#666' />}
                    />
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
                    <Input
                        secureTextEntry
                        placeholder='Repeat Password'
                        leftIcon={<Icon name='lock' style={css.icon} size={20} color='#666' />}
                    />
                    <View style={css.buttonSection}>
                        <Button 
                            title="Signup"
                            loading={this.state.active} 
                            buttonStyle={css.buttonContainer} 
                            onPress={this._register.bind(this)} />
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