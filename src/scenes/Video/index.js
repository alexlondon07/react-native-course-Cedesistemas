import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    Text,
} from 'react-native'
import Video from 'react-native-video';
import ControlVideo from './components/control-video';
import PlayPause from './components/pause-control';

class VideoInfo extends Component {

    state = {
        paused: true
    }

    render() {
        return (
        <View style={styles.container}>
            <View>
            <View style={styles.videoLayout}>
                <Video
                    source={require('./../../../assets/video/presentacionproducto.mp4')}
                    onError={this.videoError}
                    style={styles.video}
                    resizeMode="cover"
                    paused={ this.state.paused }
                    repeat={true}
                />
            </View>
            <View style={styles.overlayVideo}>
                <ControlVideo>
                    <PlayPause 
                        pause={ this.state.paused }
                        onPress = {this.playPause}
                    />
                    <Text>Play</Text>
                    <Text>Progreso</Text>
                    <Text>Tiempo</Text>              
                </ControlVideo>
            </View>
            </View>
        </View>
        );
    }

    videoError = (err) => {
        console.log(err);
      }
    
      playPause=()=>{
        this.setState({
          paused: !this.state.paused
        });
      }
    
      onLoadVideo = () => {
        this.setState({
          paused: false
        });
      }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1
  },
  videoLayout: {
    borderWidth: 1,
    borderColor: 'red',
    paddingBottom: '56.25%',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  overlayVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default VideoInfo;