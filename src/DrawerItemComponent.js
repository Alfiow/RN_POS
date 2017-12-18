import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  ListView,
  Image,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Icon } from 'react-native-elements'
import ProfileComponent from './ProfileComponent'

const userData = {
  username: 'Emma',
  email: 'ewatson@gryffindor.io'
}

class DrawerItem extends Component {

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.props.users}
        renderRow={rowData => (
          <View style={styles.container} >
            <ProfileComponent username={rowData.name} email={rowData.email} />
            <TouchableOpacity style={styles.menuItem} onPress={() => Actions.drawer() || Actions.list()}>
              <View style={styles.iconStyle}>
                <Icon name="refresh" type="font-awesome" size={25} color="#333" style={{ margin: 15 }} />
              </View>
              <Text style={styles.menuItemText}>Refresh Data</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => Actions.list()} >
              <View style={styles.iconStyle}>
                <Icon name="opencart" type="font-awesome" size={25} color="#333" style={{ margin: 15 }} />
              </View>
              <Text style={styles.menuItemText}>Transaksi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => Actions.report()}>
              <View style={styles.iconStyle}>
                <Icon name="database" type="foundation" size={25} color="#333" style={{ margin: 15 }} />
              </View>
              <Text style={styles.menuItemText}>Data Transaksi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => this.props.logoutUser()}>
              <View style={styles.iconStyle}>
                <Icon name="logout" type="simple-line-icon" size={25} color="#333" style={{ margin: 15 }} />
              </View>
              <Text style={styles.menuItemText}>Logout</Text>
            </TouchableOpacity>
          </View >
        )}
      />
    )  
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: '#bdc3c7',
    marginLeft: 5
  },
  menuItem: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    margin: 15,
  },
  iconStyle: {
    flex: .2
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: '300',
    flex: .8
  }
}

export default DrawerItem
