import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

var Styles = require('../resources/styles.js');

export default class Menu extends Component {

    render(){

        return(
            <View style={Styles.menuContainer}>
                <List> 
                    <ListItem
                        key={0}
                        title="Menu"
                        leftIcon={
                            <Icon
                                name='arrow-forward'
                                color='blue' 
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
                                name='arrow-forward'
                                color='blue' 
                            />
                        }
                        onPress={this.props.restart}
                        hideChevron={true}
                    />

                    <ListItem
                        key={2}
                        title="Easy"
                        leftIcon={
                            <Icon
                                name='arrow-forward'
                                color='blue' 
                            />
                        }
                        onPress={()=>this.props.newGame("easy")}
                        hideChevron={true}
                    />

                    <ListItem
                        key={3}
                        title="Medium"
                        leftIcon={
                            <Icon
                                name='arrow-forward'
                                color='blue' 
                            />
                        }
                        onPress={()=>this.props.newGame("medium")}
                        hideChevron={true}
                    />

                    <ListItem
                        key={4}
                        title="Hard"
                        leftIcon={
                            <Icon
                                name='arrow-forward'
                                color='blue' 
                            />
                        }
                        onPress={()=>this.props.newGame("hard")}
                        hideChevron={true}
                    />

                </List>
            </View>

        );
    }

}