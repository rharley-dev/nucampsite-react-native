import React, { Component } from 'react';
import { ScrollView } from 'react-native';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }
  render() {
    return <ScrollView> </ScrollView>;
  }
}

export default Contact;
