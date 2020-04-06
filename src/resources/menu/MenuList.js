import React from 'react';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';

// Components
import MenuItemY from '../../components/menu/MenuItemY';

export default class MenuList extends React.Component {

    state = { menu: null}

    componentDidMount() {
        this.setState({
            menu: [
                {id: 1, price: 'R35.00', location: '5 min away', name: 'Chicken Dust and Pap', image: 'https://via.placeholder.com/150'},
                {id: 2, price: 'R15.00', location: '12 min away', name: 'Double Cheese Kota', image: 'https://via.placeholder.com/150'},
                {id: 3, price: 'R40.00', location: '12 min away', name: 'Dumbling and Stew', image: 'https://via.placeholder.com/150'},
                {id: 4, price: 'R80.00', location: '12 min away', name: 'Gatspy and Drink', image: 'https://via.placeholder.com/150'},
                {id: 5, price: 'R12.00', location: '7 min away', name: 'Samusa', image: 'https://via.placeholder.com/150'},
                {id: 6, price: 'R20.00', location: '35 min away', name: 'Vegs and Slice', image: 'https://via.placeholder.com/150'},
                {id: 7, price: 'R75.00', location: '8 min away', name: 'Double Skhambane', image: 'https://via.placeholder.com/150'},
                {id: 8, price: 'R8.00', location: '1h away', name: 'Blank Kota', image: 'https://via.placeholder.com/150'}
            ]
        });
    }

    _renderMenu({item}) {
        return <MenuItemY id={this.props.componentId} data={item} />
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
                            this.state.menu, 
                            this._renderMenu.bind(this)
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