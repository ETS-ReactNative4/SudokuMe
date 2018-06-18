import { Dimensions, Platform, StyleSheet } from 'react-native';

var mainColor =  "#267600";
var secondColor = "#FFA726";
var thirdColor = "#E2E2E2";

module.exports = {

    header:{
        color: mainColor
    },

    headerOuterContainer:{
        justifyContent: "space-evenly",
        height: 80,
        paddingTop: 35
    },

    headerInnerContainer: {
        alignItems: "center"
    },

    headerText:{
        color: "#FFF",
        marginRight: -40
    },

    headerIcon:{
        size: 35,
        color: "#FFF",
        underlayColor: "#458c40"
    },

    headerIconContainer:{
        padding: 15
    },

    buttonSolve: {
        color: secondColor,
        fontSize: 25,
    },

    buttonSave: {
        color: "red",
        fontSize: 25,
    },
 
    mainContainer: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },

    menuIcon: {
        color: "#5F5F61"
    },

    menuIconStyle:{
        padding: 5
    },
 
    menuContainer: {
        flex: 1,
        height: Dimensions.get('window').height,
        backgroundColor: thirdColor,
    },

    gridContainer: {
        height: Dimensions.get('window').width - 5,
        marginTop: 35,
        margin: 5,
        paddingLeft: 4,
        paddingTop: 5,
    },

	gridItem: {
        flex: 1,
        padding: 1,
	},
	itemContent: {
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

    footer: {
        paddingBottom: 10
    }
}