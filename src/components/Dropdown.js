import React, {Component} from 'react';
import {TextField, View} from 'react-native-ui-lib';
import {colors, fonts, margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Dropdown({
    items = [],
    placeholder = '',
    underlineColor = colors.primary,
    placeholderColor = colors.primary,
    activeItemColor = colors.primary,
    labelColor = colors.primary,
    activeLabelColor = colors.primary,
    onChangeItem = null,
}) {
  return (
    <DropDownPicker
      items={items}
      placeholder={placeholder}
      defaultIndex={0}
      containerStyle={{borderWidth: 0}}
      style={{
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: underlineColor,
        color: 'red',
        marginTop: -8,
      }}
      placeholderStyle={{color: placeholderColor}}
      onChangeItem={onChangeItem}
      activeItemStyle={{color: activeItemColor, fontFamily: fonts.regular}}
      labelStyle={{
        color: labelColor,
        padding: 0,
        margin: 0,
        fontSize: 16.3,
        marginLeft: -1,
      }}
      activeLabelStyle={{
        color: activeLabelColor,
        fontFamily: fonts.regular,
        fontSize: 16.3,
      }}
      showArrow={true}
    />
  );
}
