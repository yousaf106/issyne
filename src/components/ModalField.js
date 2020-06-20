import React, {Component} from 'react';
import {TextField} from 'react-native-ui-lib';
import {colors, fonts, margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {View} from 'react-native';
export default function ModalField({
  placeholder = 'Placeholder',
  onChangeText = null,
  placeholderColor = colors.primary,
  isMarginBottom = false,
  fullWidth = false,
  makeNarrow = false,
  fixedWidth = null,
}) {
  return (
    <View
      style={{
        marginTop: margin.vertical,
        
      }}
    >

      <TextField
        style={{
          fontFamily: fonts.arial,
          fontSize: RFValue (12),
          borderColor: colors.darkGray,
          paddingStart: 3,
          marginBottom:isMarginBottom ? -20 :0,
          width: fullWidth ? '100%':fixedWidth,
          height: makeNarrow ? 22 :null,
        }}
        placeholder={placeholder}
        expandable={true}
        hideUnderline={true}
        dark10
        placeholderTextColor={placeholderColor}
        onChangeText={onChangeText}
      />
    </View>
  );
}
