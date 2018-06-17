import React, { Component } from 'react';
import { Header, Text, Icon } from 'react-native-elements';

var Styles = require('../resources/styles.js');

export default class AppHeader extends Component {

    render(){

        return(
            <Header 
                backgroundColor={Styles.header.color}
                centerComponent={
                    <Text h3 style={{color: "#FFF"}}>Sudoku</Text>
                }
                rightComponent={
                    <Icon
                        name='g-translate'
                        color='#FFF' 
                        onPress={this.props.openMenu}
                    />
                }
            />

        );
    }

}