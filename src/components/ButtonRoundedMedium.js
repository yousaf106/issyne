import React, {Component,Image} from 'react';
import {Button} from 'react-native-ui-lib';
import {colors, fonts, margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function ButtonRoundedMedium({
  label = '',
  bgColor = colors.primary,
  onPress = null,
  fontFamily = fonts.buttonBold,
}) {
  return (
    <Button
      borderRadius={35}
      style={{  marginTop: margin.vertical,paddingStart:45,paddingEnd:45,paddingTop:14,paddingBottom:14}}
      backgroundColor={bgColor}
      text65
      white
      label={label}
      labelStyle={{fontFamily: fontFamily, fontSize: RFValue (19),color:'white'}}
      onPress={onPress}
    />
  );
}
