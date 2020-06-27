import React, {Component} from 'react';
import {TextField, View} from 'react-native-ui-lib';
import {colors, fonts, margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function SimpleTextField({
  placeholder = 'Placeholder',
  helperText = 'Helper',
  underlineColor = colors.primary,
  onChangeText = null,
  floatngTextColor = colors.primary,
  placeholderColor = colors.primary,
  value = '',
  error = 'This Field Is Required',
  onFocus = null,
  onEmptyTextError = null,
  onError = null,
  showError = false,
}) {
  return (
    <View style={{marginBottom:error.length!=0 ? 20:0  }}>

      <TextField
        value = {value}
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
        onChangeText={text => {
          onChangeText (text);
          if(onError!=null)
          {
            onError(text.length === 0)
            if(text.length === 0)
                showError = true;
                else
                showError = false;
          }
        }}
        error={!showError ? '':error}
        onFocus={()=>{
          if(onError!=null)
          {
            onError(value.length === 0)
            if(value.length === 0)
              showError = true;
              else
              showError = false;
          }
        }}        
      />
    </View>
  );
}
