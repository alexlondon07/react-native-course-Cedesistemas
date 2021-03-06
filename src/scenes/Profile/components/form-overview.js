import React from 'react';
import { 
    Text, 
    StyleSheet,
    AlertIOS,
    ScrollView,
    Button,
    TextInput,
    Switch
  } from 'react-native';

  const FormOverView = props => (
    <ScrollView style={ styles.formWrapper }>
            <Button
              title ="My Contacts"
              onPress = { ()=>{ props.navigation.navigate('ContactScreen', { name: 'Batman'} ) } }
            />
            <Text style={ styles.followLabel }> Name </Text>
            <TextInput
                placeholder = 'Name field is required'
                style = { styles.formInput }
                value = { props.profile.name }
                onChangeText = { props.onChangeText }
            />

            <Text style={ styles.followLabel }> @Twitter </Text>
            <TextInput
                placeholder = 'Twitter name field is required'
                style = { styles.formInput }
                value = { props.profile.username }
            />

            <Text style={ styles.followLabel }> Email </Text>
            <TextInput
                placeholder = 'Email field is required'
                style = { styles.formInput }
                value = { props.profile.email }
            />

            <Text  style={ styles.followLabel } >All Share Social Data </Text>
            <Switch
              onTintColor={ '#3949AB' } 
              value={ true } 
            />

            <Button
                onPress = { props.onPress }
                color = { "#3949AB" }
                title = { 1 == 1 ? "Sync with facebook": "no show nothing"} 
            />
            
    </ScrollView>
  );


  const styles = StyleSheet.create({
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

  export default FormOverView;