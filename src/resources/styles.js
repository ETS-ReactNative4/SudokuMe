import { Dimensions, Platform, StyleSheet } from 'react-native';

var mainColor =  "#7FBC3C";
var secondColor = "#FAB414";
var thirdColor = "#E2E2E2";


module.exports = {

    header:{
        color: mainColor,
    },

    button: {
        color: secondColor,
        fontSize: 25,
    },

    mainContainer: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },


    menuContainer: {
        height: Dimensions.get('window').height,
    },

    //Grid
	item: {
        flex: 1,
        padding: 1
	},
	content: {
		flex: 1,
		backgroundColor: thirdColor,
		alignItems: "center",
		justifyContent: "center"
	},
	fixValue: {
        fontSize: 26,
    },
    newValue: {
        color: mainColor,
        fontSize: 26,
    },
    
    mainView:{
        height: Dimensions.get('window').width,
    }
};