import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {colors, fonts} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';
export default class Splash extends Component {
  render () {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={require ('../../res/images/splash.png')}
          style={{width: 217, height: 145, resizeMode: 'contain'}}
        />
        <Text
          style={{
            color: colors.primary,
            fontSize: RFValue (50),
            marginTop: 50,
            fontFamily: fonts.helveticaNeueBold,
          }}
        >
          ISSYNE
        </Text>
      </View>
    );
  }
}
