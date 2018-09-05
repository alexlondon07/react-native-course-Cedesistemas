import React, { Component } from 'react'
import { 
    SectionList, 
    View,
    StyleSheet,
    Text,
    Platform 
} from 'react-native'

import ItemContact from './../Contacts/components/item-contact';
import CustomText from './components/custom-text';

class Diary extends Component {
    
  constructor(props){
    super(props);
    this.state = {
        contactList: []
    };
  } 

  componentDidMount = () =>{
    const contacts = [
        {
            name: 'Alexander Londoño',
            phone: '123455666',
            photo: 'https://cdn.images.express.co.uk/img/dynamic/36/590x/Avengers-Iron-Man-was-almost-played-by-another-major-star-936289.jpg',
            id: '1'
        },
        {
            name: 'Juana Maria Peréz',
            phone: '5632980912',
            photo: 'https://media.gq.com/photos/5a010af26c531f2c62ea3fb9/master/pass/women-hp-circle-4x3.gif',
            id: '2'
        },
        {
            name: 'Alejandro Londoño',
            phone: '987654321',
            photo: 'https://i0.wp.com/hipertextual.com/archivo/wp-content/uploads/2013/09/android.jpg?resize=670%2C413&ssl=1',
            id: '3'
        },
    ];
    this.setState ({
        contactList: contacts
    });
}

renderItem = ( { item }) => <ItemContact navigation = { this.props.navigation } contact = { item } />

sectionHeader = ({ section }) => <Text style = { styles.header }> { section.key }</Text>

keyExtractor = item => item.id.toString();

render() {
    return (
      <View>
        <CustomText/>
        <SectionList
            renderItem={ this.renderItem }
            renderSectionHeader = { this.sectionHeader }
            sections = {[
                {
                    data: this.state.contactList, key: 'A Lista 1'
                },
                {
                    data: this.state.contactList, key: 'B Lista 2'
                }
            ]}
            keyExtractor = { this.keyExtractor }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
      backgroundColor: Platform.OS == 'ios' ? '#ccc': '#992277',
      ...Platform.select({
          ios: {
            paddingVertical: 5,
            marginBottom: 5,
          },
          android: {
            paddingVertical: 15,
            marginBottom: 15,
          }
      })
  }
})

export default Diary;