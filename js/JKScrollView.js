import React, {Component} from 'react';
import {Text,Image, ScrollView  } from 'react-native';

export default class JK extends Component {

    render() {
        return (
            <ScrollView>
                <Text style={{fontSize:26}}>Scroll me plz</Text>
                <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg", width: 64, height: 64}} />
                <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg", width: 64, height: 64}} />
                <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg", width: 64, height: 64}} />
                <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg", width: 64, height: 64}} />
                <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg", width: 64, height: 64}} />
                <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg", width: 64, height: 64}} />
                <Text style={{fontSize:26}}>Scroll me plz</Text>
            </ScrollView>
        );
    }
}

