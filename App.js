import React, {Component} from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  Image,
  TextInput,
  Switch,
  Button,
  ScrollView,
  AlertIOS
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  
  showAlert(){
    AlertIOS.alert( 
      'Alert Title', 
      'My Alert Msg'
    );
  }

  
  render() {
    return (
      <ScrollView>

        <View style={styles.profileContainer}>
            <Text style={styles.profileTittle}> View Profile </Text>
            <Image
              source = { { uri: 'https://pbs.twimg.com/profile_images/939327802746208256/i2GEJvdF_400x400.jpg' } }
              style={styles.profileImage}
            />
            <Text style={styles.profileName}> Alexander Andrés </Text>
            <Text style={styles.profileLocation}> Medellín - Colombia </Text>
        </View>

        <View style={styles.followContainer}>
            <View style={ styles.followWrapper}>
              <Text style={ styles.followValue }> 90,000 </Text>
              <Text style={ styles.followTittle }> Followers </Text>
            </View>
            <View style={ styles.followWrapper}>
              <Text style={ styles.followValue }> 10,000 </Text>
              <Text style={ styles.followTittle }> Followings </Text>
            </View>
        </View>

        <View style={ styles.formWrapper }>
          <Text style={ styles.followLabel }> Name </Text>
          <TextInput
            placeholder = 'Name field is required'
            style = { styles.formInput }
           />
          <Text style={ styles.followLabel }> @Twitter </Text>
          <TextInput
            placeholder = 'Twitter name field is required'
            style = { styles.formInput }
           />
          <Text style={ styles.followLabel }> Phone </Text>
          <TextInput
            placeholder = 'Phone field is required'
            style = { styles.formInput }
           />
            <Text  style={ styles.followLabel } >All Share Social Data </Text>
            <Switch
              onTintColor={ '#3949AB' } 
              value={ true } 
            /> 
            <Button
                onPress = { this.showAlert }
                color = { "#3949AB" }
                title = { 1 == 1 ? "Sync with facebook": "no show nothing"} 
            /> 

        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#3949AB',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileTittle:{
    color: '#fff',
    fontSize: 30,
    marginTop: 10
  },
  profileName:{
    color: '#fff',
    fontSize: 24,
    marginTop: 20
  },
  profileImage:{
    width: 140,
    height: 140,
    borderRadius: 70,
    resizeMode: 'cover'
  },
  profileLocation:{
    color: '#fff',
    padding: 10
  },
  followContainer:{
    backgroundColor: '#1976D2',
    flexDirection: 'row'
  },
  followTittle: {
    color: '#fff',
    fontSize: 18,
  },
  followValue: {
    color: '#fff',
    fontSize: 20,
  },
  followWrapper:{
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  formWrapper:{
    marginHorizontal: 25
  },
  followLabel:{
    color: '#3F51B5',
    marginVertical: 10
  },
  formInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});
