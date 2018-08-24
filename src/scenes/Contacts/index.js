import React, {Component} from 'react'
import {
    View,
    Text,
    Button,
    FlatList
} from 'react-native';
import ItemContact from './components/item-contact';
import ItemSeparator from './components/item-separator';

class Contacts extends Component{

    constructor(props){
        super(props);
        this.state = {
            contactList: []
        }
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

    static navigationOptions = {
        title: 'Contacts',
        headerTitleStyle: {
            fontSize: 18
        },
    }
    renderItem = ( { item }) => <ItemContact contact = { item } />

    separatorComponent = () => <ItemSeparator />;

    emptyComponent = () => <Text>Contacts not found </Text>

    keyExtractor = item => item.id.toString();

    render(){
        return (
            <View>
                <Button
                title ="Go back"
                onPress = { ()=>{ this.props.navigation.goBack() } }
                />
                {/* <Text>{ this.props.navigation.getParam('name', 'NO-SUPERHERO')}</Text> */}

                <FlatList
                    data ={ this.state.contactList }
                    renderItem={ this.renderItem }
                    ItemSeparatorComponent = { this.separatorComponent }
                    ListEmptyComponent = { this.emptyComponent }
                    keyExtractor = { this.keyExtractor }
                />
            </View>
        )
    }
}
export default Contacts;