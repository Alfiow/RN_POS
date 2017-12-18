import _ from 'lodash'
import firebase from 'firebase';
import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  ListView
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Icon } from 'react-native-elements'
import { userFetch, logoutUser } from './actions' 
import { connect } from 'react-redux'
import DrawerItemComponent from './DrawerItemComponent'


class DrawerMenu extends Component {

  componentWillMount() {
    this.props.userFetch()
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ users }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(users)
  }

  render() {
    //console.log(this.props.users)
    return (
      <View style={{ flex: 1, backgroundColor: '#bdc3c7' }}>
        <DrawerItemComponent
          users={this.dataSource}
          logoutUser={logoutUser}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  const users = _.map(state.auth.users, (val, uid) => {
    return { ...val, uid };
  })
  return {
    users: users
    //users: state.auth.users
  }
}

export default connect(mapStateToProps, { userFetch })(DrawerMenu)
