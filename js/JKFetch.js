import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';

export default class JK extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true};
    }

    componentDidMount() {
        return fetch("http://facebook.github.io/react-native/movies.json")
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function () {

                });
            })
            .catch(error => {
                console.log(error);
            });
    }


    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        )
    }
}
//
// let jsonurl = "https://facebook.github.io/react-native/movies.json";
//
// const url = 'http://v.juhe.cn/joke/content/list.php?key=c8c21b0f0f42b2e30d5e25f6701b9cee&page=2&pagesize=10&sort=asc&time=1418745237';