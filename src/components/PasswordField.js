import React, {Component} from 'react';
import {TextField,View} from 'react-native-ui-lib';
import {colors, fonts,margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function PasswordField({
  placeholder = 'Password',
  helperText = 'Enter Password',
  underlineColor = colors.primary,
  onChangeText = null,
  floatngTextColor = colors.primary,
  placeholderColor = colors.primary,
}) {
  return (
    <View style = {{marginTop:-20}}>
      <TextField
        style={{fontFamily: fonts.sfuiTextMeduim}}
        placeholder={placeholder}
        expandable={false}
        placeholderStyle={{fontFamily: fonts.regular}}
        floatingPlaceholder={true}
        secureTextEntry
        dark10
        helperText={helperText}
        underlineColor={underlineColor}
        placeholderTextColor={placeholderColor}
        floatingPlaceholderColor={floatngTextColor}
        floatOnFocus={true}
        onChangeText={onChangeText}
      />
    </View>
  );
}
