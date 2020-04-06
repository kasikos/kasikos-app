import React from 'react';
import TouchableScale from 'react-native-touchable-scale';
import { Route } from '../../app/Router';
import { ListItem } from 'react-native-elements';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';

// Components
import Search from '../../components/Search';
import MenuItemX from '../../components/menu/MenuItemX';
import MenuItemY from '../../components/menu/MenuItemY';
import RestaurantsItemX from '../../components/restaurants/RestaurantsItemX';


export default class Home extends React.Component {

    state = { menu: null, restaurants: null }

    _componentId = 'Component2';

    componentDidMount() {
        this.setState({
            menu: [
                {id: 1, price: 'R35.00', location: '120m away', name: 'Chicken Dust and Pap', image: 'https://via.placeholder.com/150'},
                {id: 2, price: 'R15.00', location: '120m away', name: 'Double Cheese Kota', image: 'https://via.placeholder.com/150'},
                {id: 3, price: 'R40.00', location: '120m away', name: 'Dumbling and Stew', image: 'https://via.placeholder.com/150'},
                {id: 4, price: 'R80.00', location: '120m away', name: 'Gatspy and Drink', image: 'https://via.placeholder.com/150'}
            ],
            restaurants: [
                {id: 1, location: '12 min away', name: 'KFC', logo: 'https://via.placeholder.com/150'},
                {id: 2, location: '30 min away', name: 'Fish and Chips', logo: 'https://via.placeholder.com/150'},
                {id: 3, location: '1h10 min away', name: 'Shisanyama', logo: 'https://via.placeholder.com/150'},
                {id: 4, location: '14 min away', name: 'Hot Spot', logo: 'https://via.placeholder.com/150'}
            ],
        });
    }
    
    _openMenu(title) {
        Route.open(this._componentId, 'MenuList', { title });
    }
    
    _openRestaurants(title) {
        Route.open(this._componentId, 'RestaurantsList', { title });
    }

    _header(title, subtitle, openFunction) {
        return <ListItem
            Component={TouchableScale} 
            activeScale={0.95}
            friction={90} 
            tension={100} 
            title={title}
            subtitle={subtitle}
            containerStyle={css.header}
            titleStyle={css.headerText}
            subtitleStyle={css.headerSubText}
            chevron={{ color: 'black', size: 25 }} 
            onPress={() => openFunction(title)}
        />
    }

    _renderMenu({item}) {
        return <MenuItemX id={this._componentId} data={item} />
    }

    _renderRestaurants({item}) {
        return <RestaurantsItemX id={this._componentId} data={item} />
    }

    _renderFavourite({item}) {
        return <MenuItemY id={this._componentId} data={item} />
    }

    _renderVerticalList(data, itemComponent) {
        return (
            <FlatList
                data={data}
                numColumns={2}
                initialNumToRender={2}
                renderItem={itemComponent}
                contentContainerStyle={css.menu}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

    _renderHorizontalList(data, itemComponent) {
        return (
            <FlatList
                horizontal
                data={data}
                initialNumToRender={2}
                renderItem={itemComponent}
                contentContainerStyle={css.menu}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

    render() {
        return (
            <View style={css.container}>
                <View style={css.search}>
                    <Search />
                </View>
                <ScrollView style={css.body}>
                    <View style={css.main}>
                        {this._header('Close to you', "Near Petsana (FS)", this._openMenu.bind(this))}
                        {this._renderHorizontalList(
                            this.state.menu, 
                            this._renderMenu.bind(this)
                        )}
                    </View>
                    <View style={css.main}>
                        {this._header('Restaurants', "Based in your area (Petsana)", this._openRestaurants.bind(this))}
                        {this._renderHorizontalList(
                            this.state.restaurants, 
                            this._renderRestaurants.bind(this)
                        )}
                    </View>
                    <View style={css.main}>
                        {this._header('Your Favourite', "What you'd like to eat", this._openMenu.bind(this))}
                        {this._renderVerticalList(
                            this.state.menu, 
                            this._renderFavourite.bind(this)
                        )}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    search: {
        height: 70
    },
    header: {},
    headerText: {
        fontSize: 20,
        color: '#000',
    },
    headerSubText: {
        fontSize: 12,
        color: '#666',
        letterSpacing: 1
    },  
    headerButton: {
        flex: 0.12,
        paddingTop: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonIcon: {
        fontSize: 18,
        color: '#999'
    },
    body: {
        paddingTop: 0
    },
    main: {},
    menu: {},
    restaurants: {},
});