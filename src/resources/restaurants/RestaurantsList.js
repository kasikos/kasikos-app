import React from 'react';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';

// Components
import RestaurantsItemY from '../../components/restaurants/RestaurantsItemY';

export default class RestaurantsList extends React.Component {

    state = { restaurants: null}

    componentDidMount() {
        this.setState({
            restaurants: [
                {id: 1, location: '12 min away', name: 'KFC', logo: 'https://via.placeholder.com/150'},
                {id: 2, location: '30 min away', name: 'Fish and Chips', logo: 'https://via.placeholder.com/150'},
                {id: 3, location: '1h10 min away', name: 'Shisanyama', logo: 'https://via.placeholder.com/150'},
                {id: 4, location: '14 min away', name: 'Hot Spot', logo: 'https://via.placeholder.com/150'}
            ]
        });
    }

    _renderRestaurants({item}) {
        return <RestaurantsItemY id={this.props.componentId} data={item} />
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

    static options(props) {
        return {
            topBar: { 
                visible: true, 
                title: {
                    text: props.data.title
                } 
            }
        }
    }

    render() {
        return (
            <View style={css.container}>
                <ScrollView style={css.body}>
                    <View style={css.main}>
                        {this._renderVerticalList(
                            this.state.restaurants, 
                            this._renderRestaurants.bind(this)
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
    body: {
        paddingTop: 0
    }
});