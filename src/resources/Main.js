import React from 'react';
import { StyleSheet } from 'react-native';
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

export default class Splash extends React.Component {

    state = { isLogged: false, index: 0, routes: [
        {key: 'home', title: 'Home' },
        {key: 'specials', title: 'Specials' },
        {key: 'orders', title: 'Orders' },
        {key: 'account', title: 'Account' },
    ] };

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

            // Return true if exits and match local token
            return true;
        } catch(err) {
            return false;
        }
    }

    static options(props) {
        return {
            topBar: { visible: false }
        }
    }

    componentDidMount() {
        this.isAuthenticated = this._isAuthenticated();
    }

    render() {

        if (this.isAuthenticated) {
            return (
                <TabView
                    renderScene={this._scenes()}
                    navigationState={this.state}
                    tabBarPosition="bottom"
                    renderTabBar={this._tabBar}
                    onIndexChange={this._scenesChange.bind(this)}
                />
            );
        }

        return <Auth />
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
});