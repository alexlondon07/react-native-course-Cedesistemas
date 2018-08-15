import React from 'react';
import { 
    Text, 
    View,
    StyleSheet,
    AlertIOS
  } from 'react-native';

  const FollowOverView = props => (
    <View style={styles.followContainer}>
        <View style={ styles.followWrapper}>
        <Text style={ styles.followValue }> { props.followings }  </Text>
        <Text style={ styles.followTittle }> Followers </Text>
        </View>
        <View style={ styles.followWrapper}>
        <Text style={ styles.followValue }> { props.followers }  </Text>
        <Text style={ styles.followTittle }> Followings </Text>
        </View>
    </View>
  );

  const styles = StyleSheet.create({
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
    });

  export default FollowOverView;