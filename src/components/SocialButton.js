import React, {Component, Image} from 'react';
import {Button} from 'react-native-ui-lib';
import {colors, fonts, margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function SocailButton({
  label = '',
  bgColor = colors.primary,
  onPress = null,
  source = require('../../res/images/drawer.png'),
}) {
  return (
    <Button
      borderRadius={5}
      style={{width: '90%', height: 50, marginTop: margin.vertical}}
      backgroundColor={bgColor}
      text65
      white
      label={label}
      labelStyle={{fontFamily: fonts.buttonBold, fontSize: RFValue (13)}}
      onPress={onPress}
      iconSource={source}
      iconStyle={{width: 20, height: 20, resizeMode: 'center'}}
    />
  );
}
