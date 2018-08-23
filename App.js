import React, { Component } from "react";

import { StackNavigator } from "react-navigation";
import Profile from "./src/scenes/Profile";
import Contacts from "./src/scenes/Contacts";

const AppNavigator = StackNavigator(
  {
    ProfileScreen: {
      screen: Profile
    },
    ContactScreen: {
      screen: Contacts
    }
  },
  {
    initialRouteName: 'ProfileScreen'
  }
);

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return <AppNavigator />;
  }
}
