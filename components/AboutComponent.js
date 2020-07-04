import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'About Us',
  };

  render() {
    return (
      <ScrollView>
        <Text></Text>
      </ScrollView>
    );
  }
}

export default About;
