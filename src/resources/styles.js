import { Dimensions, Platform, StyleSheet } from 'react-native';

var mainColor =  "#267600";
var secondColor = "#FAB414";
var thirdColor = "#E2E2E2";


module.exports = {

    header:{
        color: mainColor
    },

    headerOuterContainer:{
        paddingTop: 70,
        paddingBottom: 20,
        height:100
    },

    headerText:{
        color: "#FFF",
        marginRight: -50
    },

    headerIcon:{
        size: 35,
        color: "#FFF",
        underlayColor: "#458c40"
    },

    headerIconContainer:{
        padding: 20,
        marginBottom: -10
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