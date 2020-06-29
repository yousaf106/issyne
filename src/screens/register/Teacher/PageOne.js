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
import {errors} from '../../../globals/Errors';
import {validateEmail} from '../../../globals/Functions';

export default class PageOne extends Component {
  constructor (props) {
    super (props);
    this.state = {
      emailText: '',
      passwordText: '',
      confirmPasswordText: '',
      passwordErrorText: '',
      confirmPassworErrorText: '',

      showPasswordError: false,
      showConfirmPasswordError: false,

      showEmailError: false,
    };
  }
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
          <EmailField
            value={this.state.emailText}
            onChangeText={text => this.setState ({emailText: text})}
            onError={error => {
              this.setState ({showEmailError: error});
            }}
            showError={this.state.showEmailError}
          />
          <PasswordField
            value={this.state.passwordText}
            onFocus={() => {
              if (this.state.passwordText.length === 0) {
                this.setState ({
                  passwordErrorText: errors.PASSWORD_EMPTY,
                  showPasswordError: true,
                });
              } else
                this.setState ({
                  passwordErrorText: '',
                  showPasswordError: false,
                });
            }}
            onEmptyPasswordError={isEmpty => {
              if (isEmpty)
                this.setState ({
                  passwordErrorText: errors.PASSWORD_EMPTY,
                  showPasswordError: true,
                });
              else
                this.setState ({
                  passwordErrorText: '',
                  showPasswordError: false,
                });
            }}
            error={
              this.state.showPasswordError ? this.state.passwordErrorText : ''
            }
            onChangeText={async text => {
              this.setState ({passwordText: text});

              if (text != this.state.confirmPasswordText) {
                await this.setState ({
                  confirmPassworErrorText: errors.PASSWORD_NOT_MATCH,
                  showConfirmPasswordError: true,
                });
              }
              if (text === this.state.confirmPasswordText) {
                await this.setState ({
                  confirmPassworErrorText: '',
                  showConfirmPasswordError: false,
                });
              }
            }}
          />
          <PasswordField
            error={
              this.state.showConfirmPasswordError
                ? this.state.confirmPassworErrorText
                : ''
            }
            value={this.state.confirmPasswordText}
            onEmptyPasswordError={isEmpty => {
              if (isEmpty)
                this.setState ({
                  confirmPassworErrorText: errors.PASSWORD_EMPTY,
                  showConfirmPasswordError: true,
                });
              else
                this.setState ({
                  confirmPassworErrorText: '',
                  showConfirmPasswordError: false,
                });
            }}
            onChangeText={async text => {
              await this.setState ({confirmPasswordText: text});

              if (text.length != 0)
                await this.setState ({
                  confirmPassworErrorText: '',
                  showConfirmPasswordError: false,
                });

              if (text != this.state.passwordText) {
                await this.setState ({
                  confirmPassworErrorText: errors.PASSWORD_NOT_MATCH,
                  showConfirmPasswordError: true,
                });
              }
              if (text === this.state.passwordText) {
                await this.setState ({
                  confirmPassworErrorText: '',
                  showConfirmPasswordError: false,
                });
              }
            }}
            onFocus={() => {
              if (this.state.confirmPasswordText.length === 0)
                this.setState ({
                  confirmPassworErrorText: errors.PASSWORD_EMPTY,
                  showConfirmPasswordError: true,
                });
              else
                this.setState ({
                  confirmPassworErrorText: '',
                  showConfirmPasswordError: false,
                });
            }}
            placeholder={'Confirm the Password'}
          />
          <View center>
            <ButtonLarge
              onPress={async () => {
                await this.areAllfieldsFilled ();
                if (this.areAllFieldsClear ())
                  this.props.navigation.navigate ('PageTwoTeacher', {
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
    if (this.state.emailText.length != 0) {
      this.setState ({showEmailError: false});
    } else this.setState ({showEmailError: true});

    if (this.state.passwordText.length === 0) {
      this.setState ({
        showPasswordError: true,
        passwordErrorText: errors.PASSWORD_EMPTY,
      });
    } else
      this.setState ({
        showPasswordError: false,
        passwordErrorText: '',
      });

    if (this.state.confirmPasswordText.length === 0) {
      this.setState ({
        showConfirmPasswordError: true,
        confirmPassworErrorText: errors.PASSWORD_EMPTY,
      });
    } else
      this.setState ({
        showConfirmPasswordError: false,
        confirmPassworErrorText: '',
      });
    if (validateEmail (this.state.emailText))
      this.setState ({showEmailError: false});
    else this.setState ({showEmailError: true});
    if (
      this.state.confirmPasswordText.length != 0 &&
      this.state.passwordText.length != 0 &&
      this.state.confirmPasswordText === this.state.passwordText
    )
      this.setState ({
        showConfirmPasswordError: false,
        confirmPassworErrorText: '',
      });
    else
      this.setState ({
        showConfirmPasswordError: true,
        confirmPassworErrorText: errors.PASSWORD_NOT_MATCH,
      });
  };
  areAllFieldsClear = () => {
    if (
      !this.state.showEmailError &&
      !this.state.showPasswordError &&
      !this.state.confirmPassworErrorText
    )
      return true;

    return false;
  };
}
