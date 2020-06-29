import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  ScrollBar,
  TouchableOpacity,
  DateTimePicker,
} from 'react-native-ui-lib';
import {ScrollView, StyleSheet} from 'react-native';
import TextField from '../../../components/TextField';
import NumericField from '../../../components/NumericField';
import ButtonLarge from '../../../components/ButtonLarge';
import {padding, margin, fonts, colors} from '../../../globals/Styles';
import Heading from '../../../components/Heading';
import {RFValue} from 'react-native-responsive-fontsize';
import SocialButton from '../../../components/SocialButton';
import DatePicker from '../../../components/DatePicker';
import Dropdown from '../../../components/Dropdown';
import DocumentPicker from '../../../components/DocumentPicker';
import {toDate} from '../../../globals/Functions';
import Autocomplete from 'react-native-autocomplete-input';
import {errors} from '../../../globals/Errors';
import {validatePhoneNumber} from '../../../globals/Functions';

import Api from '../../../network/Api';
export default class PageOne extends Component {
  constructor (props) {
    super (props);
    this.state = {
      firstNameText: '',
      showFirstNameError: false,

      lastNameText: '',
      showLastNameError: false,
      dateOfBirthText: toDate ('01-01-2002'),
      statusText: '',
      showStatusError: false,
      addressText: '',
      showAddressError: false,
      phoneNoText: '',
      showPhoneNoError: false,
      phoneError: '',
      hideResults: false,
      uri: '',
      showUriError: false,

      experienceText: '',

      showExperienceError: false,
      experienceError: '',
      addresses: [],
    };
  }

  render () {
    const comp = (a, b) =>
      a.toLowerCase ().trim () === b.toLowerCase ().trim ();

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
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
          }}
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
              (2/3)
            </Text>
          </View>
          <TextField
            value={this.state.firstNameText}
            onChangeText={text => this.setState ({firstNameText: text})}
            placeholder="First Name"
            helperText="Enter First Name"
            onError={error => {
              this.setState ({showFirstNameError: error});
            }}
            showError={this.state.showFirstNameError}
          />
          <View style={{marginTop: -30}}>
            <TextField
              value={this.state.lastNameText}
              onChangeText={text => this.setState ({lastNameText: text})}
              placeholder="Last Name"
              helperText="Enter Last Name"
              onError={error => {
                this.setState ({showLastNameError: error});
              }}
              showError={this.state.showLastNameError}
            />
          </View>
          <DatePicker
            placeholder={'Date of Birth'}
            onChange={value => this.setState ({dateOfBirthText: value})}
            value={this.state.dateOfBirthText}
          />

          <View style={{marginTop: 25}} />

          <Dropdown
            items={[
              {label: 'Item 1', value: 'item1'},
              {label: 'Item 2', value: 'item2'},
            ]}
            placeholder="Current Status"
            underlineColor={this.state.showStatusError ? 'red' : colors.primary}
            onChangeItem={item =>
              this.setState ({
                statusText: item.value,
                showStatusError: false,
              })}
          />
          <View style={{marginTop: 25}} />
          <Autocomplete
            hideResults={this.state.hideResults}
            flatListProps={{
              nestedScrollEnabled: true,
              showsVerticalScrollIndicator: false,
            }}
            listContainerStyle={{
              maxHeight: 200,
            }}
            inputContainerStyle={{
              borderWidth: 0,
              margin: 0,
              marginBottom: -25,
            }}
            renderTextInput={() => (
              <TextField
                placeholder={'Address'}
                helperText={'Enter City Name'}
                value={this.state.addressText}
                onChangeText={text => {
                  this.setState ({addressText: text});

                  fetch (
                    'https://api-adresse.data.gouv.fr/search/?q=' +
                      text +
                      '&type=housenumber&autocomplete=1'
                  )
                    .then (response => response.json ())
                    .then (async responseJson => {
                      var addressToSet = [];
                      if (text.length === 0) return;
                      for (var i = 0; i < responseJson.features.length; i++) {
                        addressToSet.push ({
                          id: i,
                          label: responseJson.features[i].properties.label,
                        });
                      }
                      if (addressToSet.length > 0) {
                        await this.setState ({
                          addresses: addressToSet,
                          hideResults: false,
                        });
                      }
                    })
                    .catch (error => {
                      console.error (error);
                    });
                }}
                onError={error => {
                  this.setState ({showAddressError: error});
                }}
                showError={this.state.showAddressError}
              />
            )}
            autoCapitalize="none"
            autoCorrect={false}
            containerStyle={styles.autocompleteContainer}
            data={
              //this.state.addresses
              this.state.addresses.length === 1 &&
                comp (this.state.addressText, this.state.addresses[0].label)
                ? []
                : this.state.addresses
            }
            defaultValue={this.state.addressText}
            placeholder="Address"
            renderItem={(
              {item} //you can change the view you want to show in suggestion from here
            ) => (
              <TouchableOpacity
                onPress={() =>
                  this.setState ({
                    addressText: item.label,
                    hideResults: true,
                    showAddressError: false,
                  })}
              >
                <Text style={styles.itemText}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
          />

          <View style={{marginTop: 25}} />

          <NumericField
            placeholder="Phone Number"
            helperText="Enter Phone Number"
            onFocus={() => {
              if (this.state.phoneNoText.length === 0)
                this.setState ({
                  phoneError: errors.PHONE_EMPTY,
                  showPhoneNoError: true,
                });
              else this.setState ({phoneError: '', showPhoneNoError: false});
            }}
            onEmptyError={isEmpty => {
              if (isEmpty)
                this.setState ({
                  phoneError: errors.PHONE_ERROR,
                  showPhoneNoError: true,
                });
              else this.setState ({phoneError: '', showPhoneNoError: false});
            }}
            value={this.state.phoneNoText}
            maxLength={10}
            onChangeText={async text => {
              await this.setState ({phoneNoText: text});
              if (validatePhoneNumber (text)) {
                this.setState ({phoneError: '', showPhoneNoError: false});
              } else {
                this.setState ({
                  phoneError: errors.PHONE_ERROR,
                  showPhoneNoError: true,
                });
              }
            }}
            error={this.state.phoneError}
          />

          <View style={{marginTop: 25}} />

          <NumericField
            onFocus={() => {
              if (this.state.experienceText.length === 0)
                this.setState ({
                  experienceError: errors.FIELD_REQUIRED,
                  showExperienceError: true,
                });
              else
                this.setState ({
                  experienceError: '',
                  showExperienceError: false,
                });
            }}
            onEmptyError={isEmpty => {
              if (isEmpty)
                this.setState ({
                  experienceError: errors.FIELD_REQUIRED,
                  showExperienceError: true,
                });
              else
                this.setState ({
                  experienceError: '',
                  showExperienceError: false,
                });
            }}
            onChangeText={async text => {
              await this.setState ({experienceText: text});
            }}
            value={this.state.experienceText}
            error={this.state.experienceError}
            placeholder="Years of experience as a teacher"
            helperText="Enter Experience"
          />

          <View style={{marginTop: 25}} />

          <DocumentPicker
            value={this.state.uri.uri}
            placeholder="Picture"
            underlineColor={this.state.showUriError ? 'red' : colors.primary}
            onReceiveUri={uri => {
              if (uri != null) this.setState ({uri: uri, showUriError: false});
            }}
          />
          <View center>
            <ButtonLarge
              onPress={async () => {
                await this.checkForEmptyFields ();
                if (!this.areAllFieldsClear ()) return;
                else {
                  const {email, password} = this.props.route.params;

                  this.props.navigation.navigate ('PageThreeTeacher', {
                    email: email,
                    password: password,
                    fName: this.state.firstNameText,
                    lastName: this.state.lastNameText,
                    date: this.state.dateOfBirthText,
                    status: this.state.statusText,
                    address: this.state.addressText,
                    phone: this.state.phoneNoText,
                    exp: this.state.experienceText,
                    uri: JSON.stringify (this.state.uri),
                  });
                }
              }}
              label={'NEXT'}
            />

          </View>
        </ScrollView>
      </View>
    );
  }

  areAllFieldsClear = () => {
    if (
      !this.state.showFirstNameError &&
      !this.state.showLastNameError &&
      !this.state.showStatusError &&
      !this.state.showAddressError &&
      !this.state.showPhoneNoError &&
      !this.state.showExperienceError &&
      !this.state.showUriError
    )
      return true;
    return false;
  };

  checkForEmptyFields = () => {
    if (this.state.firstNameText.length === 0)
      this.setState ({showFirstNameError: true});
    else this.setState ({showFirstNameError: false});

    if (this.state.lastNameText.length === 0)
      this.setState ({showLastNameError: true});
    else this.setState ({showLastNameError: false});
    if (this.state.statusText.length === 0)
      this.setState ({showStatusError: true});
    else this.setState ({showStatusError: false});
    if (this.state.addressText.length === 0)
      this.setState ({showAddressError: true});
    else this.setState ({showAddressError: false});
    if (validatePhoneNumber (this.state.phoneNoText))
      this.setState ({showPhoneNoError: true, phoneError: errors.PHONE_ERROR});
    else this.setState ({showPhoneNoError: false, phoneError: ''});
    if (this.state.phoneNoText.length === 0)
      this.setState ({showPhoneNoError: true, phoneError: errors.PHONE_EMPTY});
    else this.setState ({showPhoneNoError: false, phoneError: ''});

    if (this.state.experienceText.length === 0)
      this.setState ({experienceError: errors.FIELD_REQUIRED});
    else this.setState ({experienceError: ''});

    if (this.state.uri.length === 0) this.setState ({showUriError: true});
    else this.setState ({showUriError: false});
  };
}
const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    padding: 16,
    marginTop: 40,
  },
  autocompleteContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 0,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
    color: colors.primary,
    fontFamily: fonts.sfuiTextMeduim,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
  },
});
