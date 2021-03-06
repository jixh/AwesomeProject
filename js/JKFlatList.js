import React, {Component} from 'react';
import {View,Text, FlatList, StyleSheet} from 'react-native';

export default class JK extends Component {

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data=
                        {[
                            {key: 'Devin'},
                            {key: 'Jackson'},
                            {key: 'James'},
                            {key: 'Joel'},
                            {key: 'John'},
                            {key: 'Jillian'},
                            {key: 'Jimmy'},
                            {key: 'Julie'},
                        ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 38,
        height: 244,
    },
});