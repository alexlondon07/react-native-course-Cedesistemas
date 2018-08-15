import React, { Component } from 'react';

class Profile extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            this.props.children
        );
    }
}

export default Profile;



