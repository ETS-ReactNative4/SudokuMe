import React from 'react';
import Main from './src/view/Main';
export default class App extends React.Component {

  constructor(){
    super();
    this.state= {
      isReady: false
    };
  }

  async componentWillMount() {
    try{
      await Expo.Font.loadAsync({
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
      });

      this.setState({ isReady: true });
    }
    catch(error){
      console.log("error loading App:", error);
    }
}

  render() {
    if(!this.state.isReady){
      return <Expo.AppLoading />
    }
    else{
      return <Main />; 
    }
  }
}