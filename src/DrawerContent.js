import React from 'react';
import firebase from 'firebase';
import { Text, View, ViewPropTypes } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { logoutUser } from './actions'

class DrawerContent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => logoutUser()}>
          Log Out
        </Button>

        <Button onPress={() => Actions.pop()}>
          Back
        </Button>
      </View >
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#3b5998',
  },
};

export default DrawerContent;
