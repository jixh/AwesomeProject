import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
    render(){
        return (
            <Text>Hi {this.props.name} !</Text>
        );
    }
}

export default class LotsOfGreetings extends Component{
    render(){
        return (
            <View style={{alignItems: 'center'}}>
              <Greeting name='LSFKD'/>
              <Greeting name='LSFKD'/>
              <Greeting name='LSFKD'/>
            </View>
        );
    }
}

