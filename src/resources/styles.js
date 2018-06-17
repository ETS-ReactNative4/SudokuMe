import { Dimensions, Platform, StyleSheet } from 'react-native';


module.exports = {

    header:{
        color: "#7fbc3c",
    },

    button: {
        color: "#FAB414",
        fontSize: 25,
    },

    mainContainer: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },


    menuContainer: {
        backgroundColor: "gray",
        height: Dimensions.get('window').height,
    },

    //Grid
	item: {
        flex: 1,
        padding: 1
	},
	content: {
		flex: 1,
		backgroundColor: "#E2E2E2",
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
        // color: "white",
        fontSize: 26,
    },
    
    mainView:{
        height: Dimensions.get('window').width,
        // justifyContent: "center"
    }
};