import React, {Component} from 'react';
import {Text,View} from 'react-native';

class Blink extends Component{
    constructor(props){
        super(props);
        this.state = {showText:true};

        setInterval(() => {
            this.setState(previousState => {
                return {showText:!previousState.showText};
            });
        },1000);
    }

    render(){
        let display = this.state.showText?this.props.text:'';
        return(
            <Text>{display}</Text>
        );
    }
}

export default class JKState  extends Component{
    render(){
        return(
            <View>
                <Blink text='this is test state1'/>
                <Blink text='this is test state2'/>
                <Blink text='this is test state3'/>
            </View>
        );
    }
}