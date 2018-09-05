import React from 'react';
import { 
    Text, 
    View,
    Image,
    StyleSheet
  } from 'react-native';


  const ProfileOverView = props => (
    <View style={styles.profileContainer}>
        <Image
        source = { { uri: props.profile.photo } }
        style={styles.profileImage}
        />
        <Text style={styles.profileName}> { props.profile.name } </Text>
        <Text style={styles.username}> @{ props.profile.username } </Text>
    </View>
  );

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
      username:{
        color: '#fff',
        padding: 10
      },
    });

  export default ProfileOverView;