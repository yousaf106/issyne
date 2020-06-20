import React, {Component} from 'react';
import {Button} from 'react-native-ui-lib';
import {colors, fonts} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function ButtonSmallOutline({
  label = '',
  labelColor = colors.primary,
  outlineColor = colors.primary,
  onPress = null,
  fontFamily = fonts.arialBold,
  height = 40.1,
  width = '90%',
  labelSize = RFValue(16),

}) {
  return (
    <Button
      borderRadius={5}
      style={{width: width, height: height}}
      text65
      black
      outline={true}
      outlineColor={outlineColor}
      label={label}
      onPress={onPress}
      labelStyle={{
        fontFamily: fontFamily,
        fontSize:labelSize,
        color: labelColor,
      }}
      outlineWidth={3}
    />
  );
}
