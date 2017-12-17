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
            <TouchableOpacity style={styles.menuItem}>
              <Icon name="refresh" type="font-awesome" size={25} color="#333" style={{ margin: 15 }} />
              <Text style={styles.menuItemText}>Refresh Data</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => Actions.list()} >
              <Icon name="opencart" type="font-awesome" size={25} color="#333" style={{ margin: 15 }} />
              <Text style={styles.menuItemText}>Transaksi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => Actions.report()}>
              <Icon name="database" type="foundation" size={25} color="#333" style={{ margin: 15 }} />
              <Text style={styles.menuItemText}>Data Penjualan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Icon name="logout" type="simple-line-icon" size={25} color="#333" style={{ margin: 15 }} />
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
    backgroundColor: 'rgba(255,255,255,0.43)',
    marginLeft: 15
  },
  menuItem: {
    flexDirection: 'row'
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: '300',
    margin: 15,
  }
}

export default DrawerItem
