import React, { Component } from 'react';
import { Button } from 'react-native-elements';

var Styles = require('../resources/styles.js');

export default class AppFooter extends Component {

    render(){
        if(this.props.editMode){
            return(
                <Button large
                    raised
                    onPress={this.props.saveGame}
                    title="Save"
                    backgroundColor={Styles.buttonSave.color}
                    fontSize={Styles.buttonSave.fontSize}
                />
            );
        }
        else{
            return(
                    <Button large
                        raised
                        onPress={this.props.solveClick}
                        title="Sudoku Me!"
                        backgroundColor={Styles.buttonSolve.color}
                        fontSize={Styles.buttonSave.fontSize}
                    />
            );
        }
    }

}