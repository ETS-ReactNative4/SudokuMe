import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import SquareGrid from 'react-native-square-grid';

var Styles = require('../resources/styles');

export default class SudokuGrid extends Component {
    constructor(props){
        super(props);
        this.genericRender = this.genericRender.bind(this);
    }

    genericRender(item, index){

        var celStyle = Styles.fixValue;
        var value = item.value ? item.value : item;
        if(item.value && item.isFix == false){
            celStyle = Styles.newValue;
        }

        var borderRight = null;
        var borderBottom = null;

        if((index+1) % 3 == 0 && (index+1) % 9 != 0)
        {
            borderRight = Styles.gridItemRighBorder;
        }

        if((index >= 18 && index < 27) || (index >= 45 && index <54))
        {
            borderBottom = Styles.gridItemBottomBorder;
        }

        return (
            <View style={[Styles.gridItem, borderRight, borderBottom]}>
                <View style={Styles.itemContent}>
                    <TextInput style={celStyle} value={`${value}`}
                        editable={this.props.editMode}
                        underlineColorAndroid='transparent'
                        keyboardType='numeric'
                        textAlign={'center'}
                        maxLength={1}
                        onChangeText={(text)=>this.props.updateCel(text, index)}
                        />
                </View>
            </View>
        );
    }

    render(){
        return(
            <View style={Styles.gridContainer}>
                <SquareGrid rows={9} columns={9} items={this.props.sudoku} renderItem={this.genericRender} />
            </View>
        );
    }

}