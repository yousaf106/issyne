import React, {Component} from 'react';
import {Button} from 'react-native-ui-lib';
import {colors, fonts} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function ButtonSmall({
  label = '',
  bgColor = colors.primary,
  onPress = null,
}) {
  return (
    <Button
      borderRadius={5}
      style={{paddingStart:25,paddingEnd:25,paddingTop:5,paddingBottom:5}}
      backgroundColor={bgColor}
      text65
      white
      label={label}
      labelStyle={{fontFamily: fonts.arialBold, fontSize: RFValue (12),}}
      onPress={onPress}
    />
  );
}
