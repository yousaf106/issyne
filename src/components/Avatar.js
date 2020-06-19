import React, {Component} from 'react';
import {Text, View, Avatar} from 'react-native-ui-lib';
import {colors, fonts, margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';

export default function avatar({
  label = '',
  sizeMedium = false,
  sizeLarge = false,
  isMiddle = true,
  fontSize = null,
  marginStart = null,
  source = require ('../../res/images/avatar.png'),
}) {
  return (
    <View>
      <Avatar
        source={source}
        size={sizeLarge ? 93 : 0 || sizeMedium ? 65 : 0}
        containerStyle={{
          alignSelf: isMiddle ? 'center' : 'flex-start',
          marginStart: marginStart != null ? marginStart : 0,
        }}
      />
      <Text
        style={{
          marginTop: margin.vertical,
          color: 'black',
          fontSize: fontSize != null
            ? fontSize
            : 0 || sizeLarge
                ? RFValue (15)
                : RFValue (0) || sizeMedium ? RFValue (12) : 0,
          fontFamily: fonts.arial,
        }}
      >
        {label}
      </Text>
    </View>
  );
}
