import React, { Component } from 'react';
import {
    StyleSheet, View, Dimensions, Text
} from 'react-native';
import SquareGrid from 'react-native-square-grid';

var Styles = require('../resources/styles.js');

export default class SudokuGrid extends Component {

    render(){
        
        return(
            <View style={Styles.mainView}>         
             <SquareGrid rows={9} columns={9} items={this.props.sudoku} renderItem={renderItem} />
            </View>
        );
    }

}

function renderItem(item) {

    if(item.value){

        var celStyle = item.isFix ? Styles.fixValue : Styles.newValue;

        return (

            <View style={Styles.item}>
                <View style={Styles.content}>
                    <Text style={celStyle}>{item.value}</Text>
                </View>
            </View>
        );
    }
    else{
        return (
            <View style={Styles.item}>
                <View style={Styles.content}>
                    <Text style={Styles.fixValue}>{item}</Text>
                </View>
            </View>
        );
    }
}