import React from 'react';
import { 
    Text, 
    View,
    StyleSheet,
  } from 'react-native';
  import i18n from './../../../i18n';

  const FollowOverView = props => (
    <View style={styles.followContainer}>
        <View style={ styles.followWrapper}>
        <Text style={ styles.followValue }> { props.followings }  </Text>
        <Text style={ styles.followTittle }> { i18n.t('FOLLOWERS') } </Text>
        </View>
        <View style={ styles.followWrapper}>
        <Text style={ styles.followValue }> { props.followers }  </Text>
        <Text style={ styles.followTittle }> { i18n.t('FOLLOWERS') }</Text>
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