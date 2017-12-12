import {Dimensions} from 'react-native'
const constants = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  minimumOrderFee: 13.00
}
module.exports = constants
