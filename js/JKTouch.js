import React, {Component} from 'react';
import {StyleSheet,Platform, Button,Text, View,TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';

export default class JK extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onButtonClick}
                        title="click me"
                        color="#841584"
                    />
                </View>
                <TouchableHighlight onPress={this._onButtonClick()} underlayColor="white">
                    <View style={styles.buttonContainer}>
                        <Text style={styles.textStyle}>
                            制作按钮或者链接。注意此组件的背景会在用户手指按下时变暗
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <Text>
                            用户手指按下时降低按钮的透明度，而不会改变背景的颜色
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableNativeFeedback
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.buttonContainer}>
                        <Text>TouchableNativeFeedback 用户手指按下时形成类似墨水涟漪的视觉效果</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback onLongPress={this._onLongClick}>
                    <View style={styles.buttonContainer}>
                        <Text>点击事件的同时不显示任何视觉反馈</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    _onButtonClick() {
        alert("you have click this")
    }

    _onLongClick(){
        alert('You long-pressed the button!')
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, flexDirection:'column',justifyContent: 'center' },
    buttonContainer: {
        marginBottom: 30,
        backgroundColor: '#2196F3',
        padding:10,
        justifyContent:'center'
    },
    textStyle:{
        justifyContent:'center',
        backgroundColor:'red'
    }
});