import React from 'react';
import { StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

// Components
import AuthTabBar from '../../components/AuthTabBar';

// Routes;
import Signin from './Signin';
import Signup from './Signup';

export default class Auth extends React.Component {

    state = { index: 0, routes: [
        {key: 'signin', title: 'Signin' },
        {key: 'signup', title: 'Signup' }
    ] };

    _scenes() {
        return SceneMap({
            'signin': Signin,
            'signup': Signup,
        });
    }
    
    _tabBar(props) {
        return <AuthTabBar {...props} />;
    } 

    _scenesChange(index) {
        this.setState({ index });
    }

    static options(props) {
        return {
            topBar: { visible: false }
        }
    }

    render() {
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
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
});