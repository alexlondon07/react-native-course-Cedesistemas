import React, { Component } from 'react';
import { View, Text , StyleSheet} from 'react-native';

class Localization extends Component {

    state={
        latitude: null,
        longitude: null,
        error: null
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position)=>{
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null
            });
        },
        (error)=>{
                this.setState({
                    error: error.message
                });
            },
            {
                enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
            });

            this.watchPosition();
    }

    watchPosition(){
        this.watchId = navigator.geolocation.watchPosition(
            (position)=>{
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null
                });
            },
            (error)=>{
                    this.setState({
                        error: error.message
                    });
                },
                {
                    enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
                }
        );
    }

    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.watchId);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Latitud : {this.state.latitude} </Text>
                <Text> Longigitud : {this.state.latitude} </Text>
                { this.state.error ? <Text>Error: {this.state.error}</Text>: null}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',

    }
})

export default Localization;