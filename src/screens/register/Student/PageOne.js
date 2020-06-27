import React, {Component, isValidElement} from 'react';
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
import {errors} from '../../../globals/Errors';
import {validateEmail} from '../../../globals/Functions';
import Toast from 'react-native-simple-toast';
export default class PageOne extends Component {
  constructor (props) {
    super (props);
    this.state = {
      emailText: '',
      passwordText: '',
      confirmPasswordText: '',
      passwordErrorText: '',
      confirmPassworErrorText: '',
    };
  }

  componentDidUpdate = () => {};
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
              (1/2)
            </Text>
          </View>
          <EmailField
            value={this.state.emailText}
            onChangeText={text => this.setState ({emailText: text})}
            onError={isEmailValid => {}}
          />
          <PasswordField
            value={this.state.passwordText}
            onFocus={() => {
              if (this.state.passwordText.length === 0) {
                this.setState ({passwordErrorText: errors.PASSWORD_EMPTY});
              } else this.setState ({passwordErrorText: ''});
            }}
            onEmptyPasswordError={isEmpty => {
              if (isEmpty)
                this.setState ({passwordErrorText: errors.PASSWORD_EMPTY});
              else this.setState ({passwordErrorText: ''});
            }}
            error={this.state.passwordErrorText}
            onChangeText={async text => {
              this.setState ({passwordText: text});

              if (text != this.state.confirmPasswordText) {
                await this.setState ({
                  confirmPassworErrorText: errors.PASSWORD_NOT_MATCH,
                });
              }
              if (text === this.state.confirmPasswordText) {
                await this.setState ({confirmPassworErrorText: ''});
              }
            }}
          />
          <PasswordField
            error={this.state.confirmPassworErrorText}
            value={this.state.confirmPasswordText}
            onEmptyPasswordError={isEmpty => {
              if (isEmpty)
                this.setState ({
                  confirmPassworErrorText: errors.PASSWORD_EMPTY,
                });
              else this.setState ({confirmPassworErrorText: ''});
            }}
            onChangeText={async text => {
              await this.setState ({confirmPasswordText: text});

              if (text.length != 0)
                await this.setState ({confirmPassworErrorText: ''});

              if (text != this.state.passwordText) {
                await this.setState ({
                  confirmPassworErrorText: errors.PASSWORD_NOT_MATCH,
                });
              }
              if (text === this.state.passwordText) {
                await this.setState ({confirmPassworErrorText: ''});
              }
            }}
            onFocus={() => {
              if (this.state.confirmPasswordText.length === 0)
                this.setState ({
                  confirmPassworErrorText: errors.PASSWORD_EMPTY,
                });
              else this.setState ({confirmPassworErrorText: ''});
            }}
            placeholder={'Confirm the Password'}
          />

          <View center>
            <ButtonLarge
              onPress={async () => {
                if (this.areAllfieldsFilled () && this.areAllFieldsClear ())
                  this.props.navigation.navigate ('PageTwoStudent', {
                    email: this.state.emailText,
                    password: this.state.passwordText,
                  });
                else Toast.show ('All Fields Are Mandatory');
              }}
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
  areAllfieldsFilled = () => {

    if (
      this.state.emailText.length != 0 &&
      this.state.passwordText.length != 0 &&
      this.state.confirmPasswordText.length != 0
    ) {
      return true;
    } else return false;
  };
  areAllFieldsClear = () => {
    if (
      this.state.confirmPasswordText === this.state.passwordText &&
      validateEmail (this.state.emailText)
    )
      return true;
    return false;
  };
}
