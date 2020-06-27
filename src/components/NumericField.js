import React, {Component} from 'react';
import {TextField, View} from 'react-native-ui-lib';
import {colors, fonts, margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function NumericField({
  placeholder = 'Placeholer',
  helperText = 'Helper',
  underlineColor = colors.primary,
  onChangeText = null,
  floatngTextColor = colors.primary,
  placeholderColor = colors.primary,
  onFocus = null,
  onEmptyError = null,
  error = '',
  value = '',
  maxLength = null,
}) {
  return (
    <View style={{marginTop: -30,marginBottom:error.length!=0 ? 20:0}}>

      <TextField
      value = {value}
        style={{fontFamily: fonts.sfuiTextMeduim}}
        placeholder={placeholder}
        expandable={false}
        floatingPlaceholder={true}
        dark10
        maxLength = {maxLength}
        helperText={helperText}
        underlineColor={underlineColor}
        placeholderTextColor={placeholderColor}
        floatingPlaceholderColor={floatngTextColor}
        floatOnFocus={true}
        onChangeText={text => {
          onChangeText (text);
          if (onEmptyError != null) {
            onEmptyError (text.length === 0);
          }
        }}
        keyboardType="numeric"
        error={error}
        onFocus={onFocus}
      />
    </View>
  );
}
