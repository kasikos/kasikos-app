import React from 'react';
import TouchableScale from 'react-native-touchable-scale';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Route } from '../../app/Router';
import { Image, Text } from 'react-native-elements';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export default class MenuItemX extends React.Component {

    _openMealDetails() {
        const { data, id } = this.props;
        Route.open(id, 'MealDetails', data);
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
                            onPress={this._openMealDetails.bind(this)}>
                            <Image style={css.image}
                                source={{ uri: this.props.data.image }}
                                PlaceholderContent={<ActivityIndicator />}
                            />
                        </TouchableScale>
                    </View>
                    <View style={css.main}>
                        <Text style={css.name}>{ this.props.data.name }</Text>
                        <View style={css.priceContainer}>
                            <Icon name="star" style={{ paddingRight: 5, fontSize: 12 }} />
                            <Text style={{ paddingRight: 5, fontSize: 12 }}>2.4 -</Text>
                            <Text style={css.price}>{ this.props.data.price }</Text>
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
        flex: 1,
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
    price: {
        fontSize: 12,
        color: '#FF6F00',
        marginBottom: 10,
    },
    priceContainer: {
       flexDirection: 'row' 
    }
});