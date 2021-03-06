import React, {Component} from 'react';
import {Button} from 'react-native-ui-lib';
import {colors, fonts} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function ButtonMeduimOutline({
  label = '',
  labelColor = colors.primary,
  outlineColor = colors.primary,
  onPress = null,
  fontFamily = fonts.sfuiTextMeduim,
}) {
  return (
    <Button
      borderRadius={5}
      style={{width: '38%', height: 50}}
      text65
      black
      outline={true}
      outlineColor={outlineColor}
      label={label}
      onPress={onPress}
      labelStyle={{
        fontFamily: fontFamily,
        fontSize: RFValue (18),
        color: labelColor,
      }}
      outlineWidth={3}
    />
  );
}
