import React from 'react';
import { TabBar } from 'react-native-tab-view';
import AD from 'react-native-vector-icons/AntDesign';
import SL from 'react-native-vector-icons/SimpleLineIcons';

export default class CustomTabBar extends React.PureComponent {

    _icons({ route, color }) {
        switch (route.key) {
            case 'home':
                return <AD style={{ paddingVertical: 0 }} name="home" size={28} color={color} />
                break
            case 'specials':
                return <SL style={{ paddingVertical: 0 }} name="fire" size={26} color={color} />
                break
            case 'orders':
                return <AD style={{ paddingVertical: 0 }} name="shoppingcart" size={28} color={color} />
                break
            case 'account':
                return <AD style={{ paddingVertical: 0 }} name="user" size={28} color={color} />
                break
        }
    }

    render() {
        return <TabBar {...this.props}
            indicatorStyle={{ backgroundColor: '#FF6F00' }}
            style={{ backgroundColor: '#FFF' }}
            renderIcon={this._icons}
            activeColor="#FF6F00"
            pressColor="#DDD"
            inactiveColor="#333"
            renderLabel=""
        />;
    }
}