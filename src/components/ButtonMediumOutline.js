import React, {Component} from 'react';
import {Button} from 'react-native-ui-lib';
import {colors,fonts} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function ButtonMeduimOutline({label = '', outlineColor = colors.primary,onPress = null}) {
  return (
    <Button
      borderRadius={5}
      style={{width: '38%', height: 50}}
      text65
      black
      outline = {true}
      outlineColor = {outlineColor}
      label={label}
      onPress = {onPress}
      labelStyle={{fontFamily: fonts.regular, fontSize: RFValue (18)}}

    outlineWidth = {3}
    />
  );
}
