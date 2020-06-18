import React, {Component} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {Text} from 'react-native-ui-lib';
import {colors, fonts} from '../globals/Styles';
export default function heading({title = '', centered = true}) {
  return (
    <Text
      color={colors.primary}
      center={centered}
      style={{
        fontWeight: 'bold',
        fontFamily: fonts.bold,
        letterSpacing: 3,
        fontSize: RFValue (30.5),
      }}
    >
      {title}
    </Text>
  );
}
