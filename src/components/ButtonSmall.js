import React, {Component} from 'react';
import {Button} from 'react-native-ui-lib';
import {colors, fonts} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function ButtonSmall({
  label = '',
  bgColor = colors.primary,
  onPress = null,
  labelSize = RFValue(12),
  height = null,
  width = null,
}) {
  return (
    <Button
      borderRadius={5}
      style={{paddingStart:25,paddingEnd:25,paddingTop:5,paddingBottom:5,height:height,width:width}}
      backgroundColor={bgColor}
      text65
      white
      label={label}
      labelStyle={{fontFamily: fonts.arialBold, fontSize: labelSize,color:'white'}}
      onPress={onPress}
    />
  );
}
