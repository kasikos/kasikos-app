import React from 'react';
import { TabBar } from 'react-native-tab-view';

export default class CustomTabBar extends React.PureComponent {
    render() {
        return <TabBar {...this.props}
            indicatorStyle={{ backgroundColor: '#FF6F00' }}
            style={{ backgroundColor: '#FFF' }}
            activeColor="#FF6F00"
            inactiveColor="#333"
            pressColor="#DDD"
        />;
    }
}