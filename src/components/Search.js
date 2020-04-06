import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Search extends React.Component {

    state = { value: null }

    _onSearch() {
        
    }

    render() {
        return (
            <View style={css.container}>
                <SearchBar 
                    placeholder="Search"
                    value={this.state.value}
                    containerStyle={css.content}
                    onBlur={this._onSearch.bind(this)}
                    inputContainerStyle={css.inputContainer}
                    onChangeText={value => this.setState({ value })}
                />
                <Button containerStyle={css.button} type="clear" icon={
                    <Icon name="ellipsis-v" size={25} color="#666" />
                }/>
            </View>
        );
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderBottomWidth: 0,
        borderTopWidth: 0,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderBottomWidth: 0,
        borderTopWidth: 0,
    },
    inputContainer: {
        flex: 2,
        backgroundColor: '#FFF'
    },
    button: {
        flex: 0.15,
        alignSelf: 'center',
        paddingVertical: 10,
    }
});