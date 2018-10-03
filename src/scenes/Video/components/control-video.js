import React from 'react';
import { View, StyleSheet } from 'react-native';

const ControlVideo = props => (
    <View style={styles.container}>
        { props.children }
    </View>
);

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        backgroundColor: 'yellow',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: 35,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.5)'
    }
})

export default ControlVideo;
