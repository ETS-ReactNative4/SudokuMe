import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem, Icon, Divider } from 'react-native-elements';

var Styles = require('../resources/styles.js');

export default class Menu extends Component {

    render(){
 
        return(
            <View style={Styles.menuContainer}>
                <List> 
                    <ListItem
                        key={0}
                        title="Back"
                        leftIcon={
                            <Icon
                                name='ios-arrow-back'
                                type='ionicon'
                                color={Styles.menuIcon.color} 
                                iconStyle={Styles.menuIconStyle}
                            />
                        }
                        onPress={this.props.closeMenu}
                        hideChevron={true}
                    />

                    <ListItem
                        key={1}
                        title="Restart"
                        leftIcon={
                            <Icon
                                name='ios-refresh'
                                type='ionicon'
                                color={Styles.menuIcon.color} 
                                iconStyle={Styles.menuIconStyle}
                            />
                        }
                        onPress={this.props.restart}
                        hideChevron={true}
                    />

                    <Divider style={{ backgroundColor: 'black' }} />

                    <ListItem
                        key={2}
                        title="Easy"
                        onPress={()=>this.props.newGame("easy")}
                        hideChevron={true}
                    />

                    <ListItem
                        key={3}
                        title="Medium"
                        onPress={()=>this.props.newGame("medium")}
                        hideChevron={true}
                    />

                    <ListItem
                        key={4}
                        title="Hard"
                        onPress={()=>this.props.newGame("hard")}
                        hideChevron={true}
                    />

                    <Divider style={{ backgroundColor: 'black' }} />

                    <ListItem
                        key={5}
                        title="Create Game"
                        leftIcon={
                            <Icon
                                name='ios-add'
                                type='ionicon'
                                color={Styles.menuIcon.color}
                                iconStyle={Styles.menuIconStyle}
                            />
                        }
                        onPress={this.props.createGame}
                        hideChevron={true}
                    />

                </List>
            </View>

        );
    }

}