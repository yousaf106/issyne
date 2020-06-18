import React, {Component} from 'react';
import {Text, View, Checkbox, TouchableOpacity} from 'react-native-ui-lib';
import {colors, fonts, margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function box({
  onValueChanged = false,
  checked = false,
  label = '',
  onPress = null,
  placeholder = 'Placeholder',
  helperText = 'Helper',
  underlineColor = colors.primary,
  onChangeText = null,
  floatngTextColor = colors.primary,
  placeholderColor = colors.primary,
}) {
  return (
    <TouchableOpacity onPress={onPress} row flex left>
      <Checkbox
        value={checked}
        onValueChange={onValueChanged}
        borderRadius={3}
        style={{marginTop: 3, borderColor: 'gray', borderWidth: 1.5}}
        size={13}
        color={checked ? colors.primary : 'black'}
        iconColor={colors.primary}
      />
      <Text
        style={
          checked
            ? {
                color: colors.primary,
                marginStart: 5,
                fontSize: RFValue (14),
                fontWeight: 'bold',
                letterSpacing: 1.5,
              }
            : {
                color: 'black',
                marginStart: 5,
                fontSize: RFValue (14),
                fontWeight: 'bold',
                letterSpacing: 1.5,
              }
        }
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
