import React from 'react';
import {
    Text,
    View,
    StyleSheet ,
    Image
} from 'react-native';

const ItemContact = (props) => (
    <View style={ styles.container }>
        <View>
            <Image
                style={ styles.image }
                source ={{ uri: props.contact.photo }}
            />
        </View>
        <View style={ styles.context }>
            <View>
                <Text style={ styles.contactName }> { props.contact.name }</Text>
                <Text>{ props.contact.phone }</Text>
            </View>
        </View>
    </View>
);


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    context:{
        paddingLeft: 10,
        justifyContent: 'center'
    },
    image:{ 
        width: 70,
        height: 70,
        borderRadius: 35,
        padding: 5,
        margin: 5,
    },
    contactName:{
        fontSize: 24,
        fontWeight: '200',
    }
});

export default ItemContact;
