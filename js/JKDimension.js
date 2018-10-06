import React, {Component} from 'react';
import {View} from 'react-native';

export default class JKDimension extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{width:50,height:100,background:'bule'}}/>
                <View style={{width:50,height:100,background:'red',flex:1}}/>
            </View>
        );
    }
}