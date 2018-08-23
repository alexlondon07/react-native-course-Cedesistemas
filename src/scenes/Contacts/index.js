import React, {Component} from 'react'
import {
    View,
    Text,
    Button
} from 'react-native';


class Contacts extends Component{
    static navigationOptions = {
        title: 'Contacts',
      }
    render(){
        return (
            <View>
                <Button
                title ="Go back"
                onPress = { ()=>{ this.props.navigation.goBack() } }
                />
                <Text>{ this.props.navigation.getParam('name', 'NO-SUPERHERO')}</Text>
            </View>
        )
    }
}
export default Contacts;