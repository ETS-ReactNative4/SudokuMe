import React, { Component } from 'react';
import { Header, Text, Icon } from 'react-native-elements';

var Styles = require('../resources/styles.js');

export default class AppHeader extends Component {

    render(){

        return(
            <Header
                backgroundColor={Styles.header.color}
                outerContainerStyles={Styles.headerOuterContainer}
                innerContainerStyles={Styles.headerInnerContainer}
                centerComponent={
                    <Text h3 style={Styles.headerText}>SUDOKU</Text>
                }
                rightComponent={
                    <Icon
                        name='menu'
                        color={Styles.headerIcon.color}
                        underlayColor={Styles.headerIcon.underlayColor}
                        containerStyle={Styles.headerIconContainer}
                        size={Styles.headerIcon.size}
                        onPress={this.props.openMenu}
                    />
                }
            />

        );
    }

}