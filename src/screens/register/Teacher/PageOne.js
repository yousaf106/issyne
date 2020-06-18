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
import PasswordField from '../../../components/PasswordField';
import EmailField from '../../../components/EmailField';
import ButtonLarge from '../../../components/ButtonLarge';
import {padding, margin, fonts, colors} from '../../../globals/Styles';
import Heading from '../../../components/Heading';
import {RFValue} from 'react-native-responsive-fontsize';
import SocialButton from '../../../components/SocialButton';
import {color} from 'react-native-reanimated';
export default class PageOne extends Component {
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
          contentContainerStyle={{
            paddingBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{height: 60}} />
          <Heading title="REGISTER" />
          <View center style={{marginTop: margin.vertical}}>
            <Text
              style={{
                fontFamily: fonts.regular,
                color: colors.primary,
                fontSize: RFValue (16),
              }}
            >
              (1/3)
            </Text>
          </View>
          <EmailField />
          <PasswordField />
          <PasswordField placeholder={'Confirm the Password'} />

          <View center>
            <ButtonLarge
              onPress={() => this.props.navigation.navigate ('PageTwoTeacher')}
              label={'CONTINUE'}
            />
            <View style={{marginTop: margin.vertical}} />

            <Text
              style={{
                marginTop: margin.vertical,
                fontSize: RFValue (16),
                fontFamily: fonts.regular,
                color: colors.primary,
              }}
            >
              OR

            </Text>
            <SocialButton
              source={require ('../../../../res/images/facebook.png')}
              label={'COUTINUER AVEC FACEBOOK'}
              bgColor={colors.facebookBlue}
            />
            <SocialButton
              source={require ('../../../../res/images/google.png')}
              label={'COUTINUER AVEC GOOGLE'}
              bgColor={colors.googleRed}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
