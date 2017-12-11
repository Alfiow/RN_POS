import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {width} from '../config/constants'

module.exports = StyleSheet.create({
  ListBaseContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    flex: 1,
    marginBottom: 50
  },
  ItemBaseContainer: {
    flex: 1,
    width: width,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'grey'
  },
  PizzaNameDescriptionContainer: {
    flex: 2
  },
  PizzaName: {
    flex: 0.5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  PizzaDescription: {
    flex: 2,
    fontSize: 9,
    paddingLeft: 10,
    paddingTop: 1,
    alignItems: 'flex-end'
  },
  PizzaPriceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  PizzaPriceText: {
    flex: 2,
    fontSize: 10,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  PizzaAddButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  PizzaAddButton: {
    marginRight: 10,
  },
  PizzaAddButtonText: {
    fontSize: 40,
    fontWeight: '100',
    color: 'white',
    alignSelf: 'center'
  }

})
