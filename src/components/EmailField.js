import React, {Component} from 'react';
import {TextField, View} from 'react-native-ui-lib';
import {colors, fonts, margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {emailValid, validateEmail} from '../globals/Functions';
import {errors} from '../globals/Errors';
export default function EmailField({
  placeholder = 'E-mail address',
  helperText = 'Enter Email',
  underlineColor = colors.primary,
  floatngTextColor = colors.primary,
  placeholderColor = colors.primary,
  value = '',
  onChangeText = null,
  onError = null,
  showError = false,
}) {
  return (
    <View style={{marginTop: -5, marginBottom: showError ? 20 : 0}}>

      <TextField
        style={{fontFamily: fonts.sfuiTextMeduim}}
        placeholder={placeholder}
        expandable={false}
        floatingPlaceholder={true}
        dark10
        value={value}
        helperText={helperText}
        underlineColor={underlineColor}
        placeholderTextColor={placeholderColor}
        floatingPlaceholderColor={floatngTextColor}
        floatOnFocus={true}
        keyboardType="email-address"
        onChangeText={text => {
          onChangeText (text);
          if (onError != null) {
            onError (text.length === 0);
            if (text.length === 0) showError = true;
            else showError = false;
            onError (!validateEmail (text));
          }
        }}
        onFocus={() => {
          if (onError != null) {
            onError (value.length === 0);
            if (value.length === 0) showError = true;
            else showError = false;
            onError (!validateEmail (value));
          }
        }}
        error={!showError ? '' : errors.INVALID_EMAIL}
      />
    </View>
  );
}
