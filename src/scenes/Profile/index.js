import React, { Component } from "react";

import { 
    AlertIOS,
    View
  } from 'react-native';

  import ProfileOverView from './components/profile-overview';
  import FollowOverView from './components/follow-overview';
  import FormOverView from './components/form-overview';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state ={
        profile: {}
      }
  }

  //Método de Cilo de Vida
  componentDidMount() {
    const profile = {
      name: "Alexander Londoño Espejo",
      location: "Caucasia - Ant",
      image:
        "https://pbs.twimg.com/profile_images/939327802746208256/i2GEJvdF_400x400.jpg",
      followers: 45678,
      followings: 789008,
      phone: "3338880",
      twitter: "@alexlondon07"
    };
    this.setState({
      profile
      //profile: profile
    });
  }

  showAlert() {
    AlertIOS.alert("Alert Title", "My Alert Msg");
  }

  changeText = text => {
    console.log("changeText");
    this.setState({ profile: { ...this.state.profile, name: text } });
  };

  static navigationOptions = {
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

  render() {
    return (
      <View>
        <ProfileOverView profile={this.state.profile} />
        <FollowOverView
          followings={this.state.profile.followings}
          followers={this.state.profile.followers}
        />
        <FormOverView
          navigation = { this.props.navigation }
          onPress={this.showAlert}
          profile={this.state.profile}
          onChangeText={this.changeText}
        />
      </View>
    );
  }
}

export default Profile;
