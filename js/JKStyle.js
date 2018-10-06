import React, {Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';

export default class JKStyle extends Component{
    render(){
        return(
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.blue}>just blue</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        red:{ color:'red'},
        blue:{
            color:'blue',
            fontWeight:'bold',
            fontSize:20
        }
    }
);