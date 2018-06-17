import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import SquareGrid from 'react-native-square-grid';

var Styles = require('../resources/styles.js');

export default class SudokuGrid extends Component {

    render(){
        if(this.props.editmode){
            return(
                <View style={Styles.mainView}>         
                 <SquareGrid rows={9} columns={9} items={this.props.sudoku} renderItem={renderNewGame} />
                </View>
            );
        }
        else{
            return(
                <View style={Styles.mainView}>         
                <SquareGrid rows={9} columns={9} items={this.props.sudoku} renderItem={renderGame} />
                </View>
            );
        }
    }

}

function renderGame(item) {

    if(item.value){
        var celStyle = item.isFix ? Styles.fixValue : Styles.newValue;
        return (
            <View style={Styles.item}>
                <View style={Styles.content}>
                    <TextInput style={celStyle} value={`${item.value}`}
                        editable={false}
                        underlineColorAndroid='transparent'
                        textAlign={'center'}/>
                </View>
            </View>
        );
    }
    else{
        return (
            <View style={Styles.item}>
                <View style={Styles.content}>
                    <TextInput style={Styles.fixValue} value={`${item}`}
                        editable={false}
                        underlineColorAndroid='transparent'
                        textAlign={'center'}/>
                </View>
            </View>
        );
    }
}

function renderNewGame(item) {
    console.log("renderNewGame")
    return (
        <View style={Styles.item}>
            <View style={Styles.content}>
                <TextInput style={Styles.fixValue}
                    underlineColorAndroid='transparent'
                    textAlign={'center'}/>
            </View>
        </View>
    );
}