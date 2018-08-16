import React, {Component} from 'react';
import { 
  AlertIOS
} from 'react-native';

import Profile from './src/scenes/Profile/index';
import ProfileOverView from './src/scenes/Profile/components/profile-overview';
import FollowOverView from './src/scenes/Profile/components/follow-overview';
import FormOverView from './src/scenes/Profile/components/form-overview';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state ={
      profile: {}
    }
  }

  //Método de Cilo de Vida
  componentDidMount (){
    const profile = {
      name: 'Alexander Londoño Espejo',
      location: 'Caucasia - Ant',
      image: 'https://pbs.twimg.com/profile_images/939327802746208256/i2GEJvdF_400x400.jpg',
      followers: 45678,
      followings: 789008,
      phone: "3338880",
      twitter: '@alexlondon07'
    };
    this.setState({
      profile
      //profile: profile
    })
  }

  showAlert(){
    AlertIOS.alert( 
      'Alert Title', 
      'My Alert Msg'
    );
  }

  changeText = text => {
    console.log('changeText');
    this.setState({ profile:{ ... this.state.profile, name: text } });
  }

  render() {
    return (
      <Profile>
        <ProfileOverView profile={ this.state.profile } />
        <FollowOverView followings={ this.state.profile.followings } followers={ this.state.profile.followers }/>
        <FormOverView onPress={ this.showAlert } profile={ this.state.profile } onChangeText = { this.changeText }/>
      </Profile>
    );
  }
}