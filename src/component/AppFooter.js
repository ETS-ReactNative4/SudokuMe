import React, { Component } from 'react';
import { Button } from 'react-native-elements';

var Styles = require('../resources/styles.js');

export default class AppFooter extends Component {

    render(){
        return(
                <Button large
                    onPress={this.props.solveClick}
                    title="Sudoku Me!"
                    backgroundColor={Styles.button.color}
                    fontSize={Styles.button.fontSize}
                />
        );
    }

}