import React, {Component} from 'react';
import {Text, View, Checkbox, TouchableOpacity} from 'react-native-ui-lib';
import {colors, fonts, margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function box({
  onValueChanged = false,
  checked = false,
  label = '',
  onPress = null,
  labelSize = 14,
  checboxSize = 13,
  checkedColor = colors.primary,
  idleColor = 'black',
  isFlex = true,
}) {

  if(isFlex)
  return (
    <TouchableOpacity 
    onPress={onPress} row  left flex >
      <Checkbox
        value={checked}
        onValueChange={onValueChanged}
        borderRadius={3}
        style={{marginTop: 3, borderColor: 'gray', borderWidth: 1.5}}
        size={checboxSize}
        color={checked ? checkedColor :idleColor}
        iconColor={checkedColor}
      />
      <Text
        style={
          checked
            ? {
                color: checkedColor,
                marginStart: 5,
                fontSize: RFValue (labelSize),
                fontFamily:fonts.arial,
              }
            : {
                color: idleColor,
                marginStart: 5,
                fontSize: RFValue (labelSize),
                fontFamily:fonts.arial,
              }
        }
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <TouchableOpacity 
    onPress={onPress} row  left >
      <Checkbox
        value={checked}
        onValueChange={onValueChanged}
        borderRadius={3}
        style={{marginTop: 3, borderColor: 'gray', borderWidth: 1.5}}
        size={checboxSize}
        color={checked ? checkedColor :idleColor}
        iconColor={checkedColor}
      />
      <Text
        style={
          checked
            ? {
                color: checkedColor,
                marginStart: 5,
                fontSize: RFValue (labelSize),
                fontFamily:fonts.arial,
              }
            : {
                color: idleColor,
                marginStart: 5,
                fontSize: RFValue (labelSize),
                fontFamily:fonts.arial,
              }
        }
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
