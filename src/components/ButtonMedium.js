import React, {Component} from 'react';
import {Button} from 'react-native-ui-lib';
import {colors, fonts} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function ButtonMeduim({
  label = '',
  bgColor = colors.primary,
  onPress = null,
}) {
  return (
    <Button
      borderRadius={5}
      style={{width: '38%', height: 50}}
      backgroundColor={bgColor}
      text65
      white
      label={label}
      labelStyle={{fontFamily: fonts.buttonBold, fontSize: RFValue (18),}}
      onPress={onPress}
    />
  );
}
