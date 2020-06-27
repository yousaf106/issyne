import React, {Component} from 'react';
import {TextField, View} from 'react-native-ui-lib';
import {colors, fonts, margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {emailValid, validateEmail} from '../globals/Functions';
export default function EmailField({
  placeholder = 'E-mail address',
  helperText = 'Enter Email',
  underlineColor = colors.primary,
  floatngTextColor = colors.primary,
  placeholderColor = colors.primary,
  value = '',
  onChangeText = null,
  errorText = 'Enter a valid email',
  onError = null,
}) {
  return (
    <View style={{marginTop: -5, marginBottom: errorText.length != 0 ? 20 : 0}}>

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
        onChangeText={text => {
          onChangeText (text);
          if (onError != null) {
            onError (validateEmail (text));
          }
        }}
        keyboardType="email-address"
        error={
          value.length != 0 ? (!validateEmail (value) ? errorText : '') : null
        }
      />
    </View>
  );
}
