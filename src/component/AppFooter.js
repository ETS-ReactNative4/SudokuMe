import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

var Styles = require('../resources/styles');
var Constants = require('../source/constants');

export default class AppFooter extends Component {

    render(){
        if(this.props.editMode){
            return(
                <View style={Styles.footer}>
                    <Button large
                        raised
                        onPress={this.props.saveGame}
                        title="Save"
                        backgroundColor={Styles.buttonSave.color}
                        fontSize={Styles.buttonSave.fontSize}
                    />
                </View>
            );
        }
        else{
            if(this.props.buttonState == Constants.BUTTON_RESTART){
                return(
                    <View style={Styles.footer}>
                        <Button large
                            raised
                            onPress={this.props.restart}
                            title="Restart"
                            backgroundColor={Styles.buttonRestart.color}
                            fontSize={Styles.button.fontSize}
                        />
                    </View>
                );
            }
            else{
                return(
                    <View style={Styles.footer}>
                        <Button large
                            raised
                            onPress={this.props.solveClick}
                            title="Sudoku Me!"
                            backgroundColor={Styles.buttonSolve.color}
                            fontSize={Styles.button.fontSize}
                        />
                    </View>
                );

            }
        }
    }

}