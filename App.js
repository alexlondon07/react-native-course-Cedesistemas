import React, { Component } from "react";

import { StackNavigator } from "react-navigation";
import Profile from "./src/scenes/Profile";
import Contacts from "./src/scenes/Contacts";
import Diary from "./src/scenes/Diary";

import RNLanguage from 'react-native-languages';
import i18n from "./src/i18n";
import VideoInfo from "./src/scenes/Video";
import Localization from "./src/scenes/Localization";

const AppNavigator = StackNavigator(
  {
    ProfileScreen: {
      screen: Profile
    },
    ContactScreen: {
      screen: Contacts
    },
    DiaryScreen :{
      screen: Diary,
      navigationOptions: () => ({
        title: 'Diary'
      })
    },
    VideoScreen :{
      screen: VideoInfo,
      navigationOptions: () => ({
        title: 'Video'
      })
    },
    LocalizationScreen :{
      screen: Localization,
      navigationOptions: () => ({
        title: 'Localization'
      })
    }    
  },
  {
    initialRouteName: 'LocalizationScreen',
    navigationOptions : {
      title: 'View Profile',
      headerStyle: {
          backgroundColor: '#3949AB',
          borderBottomColor: '#3949AB',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: '500',
          fontSize: 26
      },
    }
  }
);

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    RNLanguage.addEventListener('change', this.onChangeLanguage)
  }

  componentWillUnmount (){
    RNLanguage.removeEventListener('change', this.onChangeLanguage)
  }

  onChangeLanguage =({ languaje }) =>{
    i18n.locale = languaje;
  };

  render() {
    return <AppNavigator />;
  }
}
