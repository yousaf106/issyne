import React, {Component} from 'react';
import {TextField, View, DateTimePicker} from 'react-native-ui-lib';
import {colors, fonts, margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {Image} from 'react-native';
export default function DatePicker({
  placeholder = 'Select a date',
  underlineColor = colors.primary,
  onChange = null,
  textColor = colors.primary,
  placeholderColor = colors.primary,
  title = '',
  value = '',

}) {
  return (
    <View style={{marginTop: 0}}>
        
      <DateTimePicker
        editable={true}
        dateFormat = {'DD-MM-YYYY'}
        value = {value}
        style={{color: textColor}}
        title={title}
        underlineColor={underlineColor}
        placeholderTextColor={placeholderColor}
        onChange={onChange}
        placeholder={placeholder}
        mode = 'date'
        showIcon = {true}
        
      />
      <Image
      style = {{position:'absolute',width:20,height:20,alignSelf:'flex-end'}} 
      source = {require('../../res/images/calendar.png')}
      />
    </View>
  );
}
