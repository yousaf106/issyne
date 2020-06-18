import React, {Component} from 'react';
import {TextField, View} from 'react-native-ui-lib';
import {colors, fonts, margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function EmailField({
  placeholder = 'E-mail address',
  helperText = 'Enter Email',
  underlineColor = colors.primary,
  onChangeText = null,
  floatngTextColor = colors.primary,
  placeholderColor = colors.primary,
}) {
  return (
    <View style={{marginTop: margin.vertical-5}}>

      <TextField
        style={{fontFamily: fonts.sfuiTextMeduim}}
        placeholder={placeholder}
        expandable={false}
        floatingPlaceholder={true}
        dark10
        helperText={helperText}
        underlineColor={underlineColor}
        placeholderTextColor={placeholderColor}
        floatingPlaceholderColor={floatngTextColor}
        floatOnFocus={true}
        onChangeText={onChangeText}
        keyboardType = 'email-address'
      />
    </View>
  );
}
