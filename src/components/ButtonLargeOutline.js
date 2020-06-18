import React, {Component} from 'react';
import {Button} from 'react-native-ui-lib';
import {colors, fonts,margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function ButtonLargeOutline({
  label = '',
  outlineColor = colors.primary,
  onPress = null,
  labelColor = colors.primary,
}) {
  return (
    <Button
      borderRadius={5}
      style={{width: '90%', height: 64.2, marginTop: margin.vertical}}
      text65
      black
      outline={true}
      outlineColor={outlineColor}
      label={label}
      labelStyle={{color: colors.primary}}
      onPress={onPress}
      labelStyle={{fontFamily: fonts.buttonBold, fontSize: RFValue (18),color:labelColor}}
      outlineWidth={3}
    />
  );
}
