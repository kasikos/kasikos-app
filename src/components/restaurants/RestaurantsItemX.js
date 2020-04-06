import React from 'react';
import TouchableScale from 'react-native-touchable-scale';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Route } from '../../app/Router';
import { Image, Text } from 'react-native-elements';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export default class RestaurantsItemX extends React.Component {

    _openRestaurantDetails() {
        const { data, id } = this.props;
        Route.open(id, 'RestaurantDetails', data);
    }

    render() {
        return (
            <View style={css.container}>
                <View style={css.card}>
                    <View style={css.imageCover}>
                        <TouchableScale 
                            activeScale={0.95} 
                            friction={90} 
                            tension={100} 
                            onPress={this._openRestaurantDetails.bind(this)}>
                            <Image style={css.image}
                                source={{ uri: this.props.data.logo }}
                                PlaceholderContent={<ActivityIndicator />}
                            />
                        </TouchableScale>
                    </View>
                    <View style={css.main}>
                        <Text style={css.name}>{ this.props.data.name }</Text>
                        <View style={css.locationContainer}>
                            <Icon name="directions-walk" style={{ paddingRight: 2 }} />
                            <Text style={css.location}>{ this.props.data.location }</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    card: {
        padding: 5
    },
    imageCover: {
        padding: 10
    },
    image: {
        width: 200,
        height: 100
    },
    main: {
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    name: {
        fontSize: 15,     
        fontWeight: 'bold',
    },
    location: {
        fontSize: 12,
        marginBottom: 10,
        letterSpacing: 1,
        color: '#999'
    },
    locationContainer: {
       flexDirection: 'row' 
    }
});