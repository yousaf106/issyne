import React, {Component} from 'react';
import {
  View,
  TextField,
  Text,
  Button,
  ScrollBar,
  TouchableOpacity,
} from 'react-native-ui-lib';
import {ScrollView} from 'react-native';
import PasswordField from '../components/PasswordField';
import EmailField from '../components/EmailField';
import ButtonLarge from '../components/ButtonLarge';
import {padding, margin, fonts, colors} from '../globals/Styles';
import Heading from '../components/Heading';
import {RFValue} from 'react-native-responsive-fontsize';
import SocialButton from '../components/SocialButton';
export default class Login extends Component {
  render () {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingStart: padding.sidePadding,
          paddingEnd: padding.sidePadding,
          justifyContent: 'center',
        }}
      >
        <ScrollView 
        showsVerticalScrollIndicator = {false}
        >
          <View style={{height: 60}} />
          <Heading title="LOGIN" />
          <EmailField />
          <PasswordField />
          <View center>
            <ButtonLarge label={'LOGIN'} />
            <View style={{marginTop: margin.vertical}} />
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: RFValue (14),
                  fontFamily: fonts.regular,
                  color: colors.primary,
                }}
              >
                Password Forgotton?
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                marginTop: margin.vertical,
                fontSize: RFValue (16),
                fontFamily: fonts.regular,
                color: colors.primary,
              }}
            >
              OU

            </Text>
            <SocialButton
              source={require ('../../res/images/facebook.png')}
              label={'COUTINUER AVEC FACEBOOK'}
              bgColor={colors.facebookBlue}
            />
            <SocialButton
              source={require ('../../res/images/google.png')}
              label={'COUTINUER AVEC GOOGLE'}
              bgColor={colors.googleRed}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
