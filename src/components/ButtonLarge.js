import React, {Component,Image} from 'react';
import {Button} from 'react-native-ui-lib';
import {colors, fonts, margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function ButtonLarge({
  label = '',
  bgColor = colors.primary,
  onPress = null,
}) {
  return (
    <Button
      borderRadius={5}
      style={{width: '90%', height: 64.2, marginTop: margin.vertical}}
      backgroundColor={bgColor}
      text65
      white
      label={label}
      labelStyle={{fontFamily: fonts.buttonBold, fontSize: RFValue (18),color:'white'}}
      onPress={onPress}
    />
  );
}
