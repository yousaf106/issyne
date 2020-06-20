import React, {Component} from 'react';
import {Button} from 'react-native-ui-lib';
import {colors, fonts, padding} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function ButtonMeduim({
  label = '',
  bgColor = colors.primary,
  onPress = null,
  isWidthFixed = false,
  labelSize = null,
  fontFamily = fonts.sfuiTextMeduim,
}) {
  if (isWidthFixed)
    return (
      <Button
        borderRadius={5}
        style={{width: '38%', height: 50}}
        backgroundColor={bgColor}
        text65
        white
        label={label}
        labelStyle={{
          fontFamily: fontFamily,
          fontSize: labelSize === null ? RFValue (18) : RFValue (labelSize),
        }}
        onPress={onPress}
      />
    );
  return (
    <Button
      borderRadius={5}
      style={{paddingStart: 15, paddingEnd: 15, height: 50}}
      backgroundColor={bgColor}
      text65
      white
      label={label}
      labelStyle={{
        fontFamily: fonts.buttonBold,
        fontSize: labelSize === null ? RFValue (18) : RFValue (labelSize),
      }}
      onPress={onPress}
    />
  );
}
