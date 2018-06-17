import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Drawer from 'react-native-drawer';


import AppHeader from '../component/AppHeader';
import AppFooter from '../component/AppFooter';
import SudokuGrid from '../component/SudokuGrid';
import Menu from '../component/Menu'

import { SolveSudoku, MatrixToArray } from '../source/functions';

var Styles = require('../resources/styles');
var Games = require('../resources/games');



export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = { 
            game: Games.medium[0],
            sudokuPrint: MatrixToArray(Games.medium[0]),
            menuOpen: false
        }

        this.solveClick = this.solveClick.bind(this);
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.restart = this.restart.bind(this);
        this.newGame = this.newGame.bind(this);
    }

    solveClick(){
        this.setState({sudokuPrint: SolveSudoku(this.state.game)});
    }

    openMenu(){
        this.setState({menuOpen: true});
    }

    closeMenu(){
        this.setState({menuOpen: false});
    }

    restart(){
        this.setState({
            sudokuPrint: MatrixToArray(this.state.game),
            menuOpen: false
        });
    }

    newGame(difficulty){

        var game = Games[difficulty][Math.floor(Math.random() * Games[difficulty].length)];
        this.setState({
            game: game,
            sudokuPrint: MatrixToArray(game),
            menuOpen: false
        })
    }

    render() {
        return(
            <View style={Styles.mainContainer}>

                <Drawer
                    open={this.state.menuOpen}
                    content={ 
                        <Menu closeMenu={this.closeMenu} 
                            restart={this.restart}
                            newGame={this.newGame}    
                        /> 
                    }
                    type="overlay"
                    openDrawerOffset={150}
                    side="right"
                >

                    <AppHeader openMenu={this.openMenu}/>
                    <SudokuGrid sudoku={this.state.sudokuPrint} />
                    <AppFooter solveClick={this.solveClick} />

                </Drawer>
            </View>
        )
    }
}