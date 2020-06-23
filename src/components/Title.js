import React, {Component} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {Text} from 'react-native-ui-lib';
import {colors, fonts, margin} from '../globals/Styles';
export default function title({title = '', centered = false}) {
  return (
    <Text
      color={colors.primary}
      center={centered}
      style={{
        fontFamily: fonts.arialBold,
        letterSpacing: 3,
        fontSize: RFValue (16),
      
        marginTop:margin.vertical,
    }}
    >
      {title}
    </Text>
  );
}
