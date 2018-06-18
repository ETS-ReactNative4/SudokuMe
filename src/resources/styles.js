import { Dimensions, Platform, StyleSheet } from 'react-native';

var mainColor =  "#087E8B";
var secondColor = "#F19F4D";
var thirdColor = "#DFDFDF";
var fourthColor = "#F45C4E";
var borderColor = "#3C3C3C";

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
        fontFamily: "sans-serif-thin",
        marginRight: -40
    },

    headerIcon:{
        size: 35,
        color: "#FFF",
        underlayColor: "#8EC4CA"
    },

    headerIconContainer:{
        padding: 15
    },

    button: {
        fontSize: 25,
    },

    buttonSolve: {
        color: secondColor,
        fontFamily: "sans-serif-thin",
        fontSize: 25,
    },

    buttonSolving: {
        color: thirdColor,
    },

    buttonRestart: {
        color: fourthColor,
    },

    buttonSave: {
        color: fourthColor,
        fontFamily: "sans-serif-thin",
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

    menuText: {
        fontFamily: "sans-serif-thin",
        fontWeight: "bold",
        fontSize: 20
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
        padding: 1
    },

    gridItemRighBorder: {
        borderRightWidth: 2,
        borderRightColor: borderColor
    },

    gridItemBottomBorder: {
        borderBottomWidth: 2,
        borderBottomColor: borderColor
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
        paddingBottom: 20
    }
}