import React from 'react';
import { StyleSheet, View } from 'react-native';

const ItemSeparator = () => (
    <View style={styles.separator}></View>
);

const styles = StyleSheet.create({
    separator:{
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginVertical: 3
    }    
});

export default ItemSeparator;
