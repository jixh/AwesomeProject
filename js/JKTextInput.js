import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

export default class JKTextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
                padding: 10
            }}>

                <Text style={{height: 50, backgroundColor: 'powderblue'}}>
                    {
                        this.state.text.split(' ').map((word) => word && 'JK').join(" ")
                    }
                </Text>


                <TextInput
                    style={{height: 50, backgroundColor: 'skyblue'}}
                    placeholder='place input something'
                    onChangeText={(text) => this.setState({text})}
                />
            </View>
        );
    }
}