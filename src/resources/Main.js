import React from 'react';
import { Route } from '../app/Router';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import RNSecureKeyStore from "react-native-secure-key-store";

// Components
import TabBar from '../components/TabBar';

// Routes
import Home from './tabs/Home';
import Specials from './tabs/Specials';
import Orders from './tabs/Orders';
import Account from './tabs/Account';
import Auth from './auth/Auth';

export default class Main extends React.Component {

    state = { isLogged: false, index: 0, routes: [
        {key: 'home', title: 'Home' },
        {key: 'specials', title: 'Specials' },
        {key: 'orders', title: 'Orders' },
        {key: 'account', title: 'Account' },
    ] };

    _isMounted = false;

    _scenes() {
        return SceneMap({
            'home': Home,
            'specials': Specials,
            'orders': Orders,
            'account': Account,
        });
    }

    _tabBar(props) {
        return <TabBar {...props} />;
    }    

    _scenesChange(index) {
        this.setState({ index });
    }

    async _isAuthenticated() {
        try {
            // Check token exits on the server before authenticating
            const res = await RNSecureKeyStore.get('token');
            return this.setState({ isLogged: true });
            // Return true if exits and match local token
        } catch(err) {}

        Route.set('Auth');
    }

    static options(props) {
        return {
            topBar: { visible: false }
        }
    }

    componentDidMount() {
        this._isMounted = true;
        
        if (this._isMounted) {
            this._isAuthenticated();
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        if (this.state.isLogged) {
            return (
                <TabView
                    renderScene={this._scenes()}
                    navigationState={this.state}
                    tabBarPosition="bottom"
                    renderTabBar={this._tabBar}
                    onIndexChange={this._scenesChange.bind(this)}
                />
            );
        } else {
            return (
                <View style={css.indicator}>
                    <ActivityIndicator size={35} color="#FF6F00" />
                    <Text style={{ paddingTop: 5, color: '#666' }}>Loading...</Text>
                </View>
            );
        }

    }
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    indicator: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    }
});