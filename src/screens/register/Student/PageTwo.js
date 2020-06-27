import React, {Component} from 'react';
import {View, Text} from 'react-native-ui-lib';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import TextField from '../../../components/TextField';
import NumericField from '../../../components/NumericField';
import ButtonLarge from '../../../components/ButtonLarge';
import {padding, margin, fonts, colors} from '../../../globals/Styles';
import Heading from '../../../components/Heading';
import {RFValue} from 'react-native-responsive-fontsize';
import DatePicker from '../../../components/DatePicker';
import Dropdown from '../../../components/Dropdown';
import DocumentPicker from '../../../components/DocumentPicker';
import {errors} from '../../../globals/Errors';
import {toDate} from '../../../globals/Functions';

import {validatePhoneNumber} from '../../../globals/Functions';
import Api from '../../../network/Api';
import Autocomplete from 'react-native-autocomplete-input';
import Cities from '../../../globals/cities.json';
export default class PageTwo extends Component {
  componentDidMount = () => {
    console.warn (this.props.route.params);
  };
  constructor (props) {
    super (props);
    this.state = {
      uri: '',
      showUriError: false,
      phoneNoText: '',
      showPhoneNoError: false,
      phoneError: '',
      firstNameText: '',
      showFirstNameError: false,

      lastNameText: '',
      showLastNameError: false,

      dateOfBirthText: toDate ('01-01-2002'),
      userNameText: '',
      educationalLevelText: '',
      showEducationalLevelError: false,
      cityText: '',
      showUserNameTextError: false,
      cities: Cities,
    };
  }
  findCity (cityText) {
    //method called everytime when we change the value of the input
    if (cityText === '') {
      //if the cityText is null then return blank
      return [];
    }

    const {cities} = this.state;
    //making a case insensitive regular expression to get similar value from the film json
    const regex = new RegExp (`${cityText.trim ()}`, 'i');
    //return the filtered film array according the cityText from the input
    return cities.filter (cities => cities.name.search (regex) >= 0);
  }

  render () {
    const {cityText} = this.state;
    const cities = this.findCity (cityText);
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
              (2/2)
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

          <Dropdown
            items={[
              {label: 'Item 1', value: 'item1'},
              {label: 'Item 2', value: 'item2'},
            ]}
            placeholder="Educational Level"
            underlineColor={
              this.state.showEducationalLevelError ? 'red' : colors.primary
            }
            onChangeItem={item =>
              this.setState ({
                educationalLevelText: item.value,
                showEducationalLevelError: false,
              })}
          />
          <Autocomplete
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
                placeholder={'City'}
                helperText={'Enter City Name'}
                value={this.state.cityText}
                onChangeText={text => this.setState ({cityText: text})}
                onError={error => {
                  this.setState ({showCityTextError: error});
                }}
                showError={this.state.showCityTextError}
              />
            )}
            autoCapitalize="none"
            autoCorrect={false}
            containerStyle={styles.autocompleteContainer}
            data={
              cities.length === 1 && comp (cityText, cities[0].name)
                ? []
                : cities
            }
            defaultValue={cityText}
            placeholder="City"
            renderItem={(
              {item} //you can change the view you want to show in suggestion from here
            ) => (
              <TouchableOpacity
                onPress={() => this.setState ({cityText: item.name})}
              >
                <Text style={styles.itemText}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />

          <View style={{marginTop: 35}} />

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

          <Text
            style={{
              marginBottom: margin.vertical + 12,
              fontSize: RFValue (15),
              color: colors.primary,
              fontFamily: fonts.sfuiTextMeduim,
            }}
          >
            For privacy matter, we ask the students to use a username and an avatar in this app. Please make sure that your username is different than your real name, and that you are not using your real picture.
          </Text>

          <View style={{marginTop: -30}}>
            <TextField
              value={this.state.userNameText}
              onChangeText={text => this.setState ({userNameText: text})}
              placeholder="Username"
              helperText="Enter Username"
              onError={error => {
                this.setState ({showUserNameTextError: error});
              }}
              showError={this.state.showUserNameTextError}
            />
          </View>

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
                let formdata = new FormData ();
                const {email, password} = this.props.route.params;
                formdata.append ('email', email);
                formdata.append ('password', password);
                formdata.append ('firstName', this.state.firstNameText);
                formdata.append ('lastName', this.state.lastNameText);
                formdata.append ('dateOfBirth', '12-12-12');
                formdata.append ('educationLevel', 'inter');
                formdata.append ('city', this.state.cityText);
                formdata.append ('phoneNumber', this.state.phoneNoText);
                formdata.append ('username', this.state.userNameText);
                const photo = {
                  uri: this.state.uri.uri,
                  type: this.state.uri.type,
                  name: this.state.uri.name,
                };
                console.log (JSON.stringify (photo));

                formdata.append ('profileImage', photo);

                try {
                  const response = await Api.postFormData (
                    'register',
                    formdata
                  );
                  console.warn (response);
                  // console.warn(JSON.stringify(response));
                } catch (err) {}
              }}
              label={'Complete'}
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
      !this.state.showEducationalLevelError &&
      !this.state.showCityTextError &&
      !this.state.showPhoneNoError &&
      !this.state.showUserNameTextError &&
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
    if (this.state.educationalLevelText.length === 0)
      this.setState ({showEducationalLevelError: true});
    else this.setState ({showEducationalLevelError: false});
    if (this.state.cityText.length === 0)
      this.setState ({showCityTextError: true});
    else this.setState ({showCityTextError: false});
    if (validatePhoneNumber (this.state.phoneNoText))
      this.setState ({showPhoneNoError: true, phoneError: errors.PHONE_ERROR});
    else this.setState ({showPhoneNoError: false, phoneError: ''});
    if (this.state.phoneNoText.length === 0)
      this.setState ({showPhoneNoError: true, phoneError: errors.PHONE_EMPTY});
    else this.setState ({showPhoneNoError: false, phoneError: ''});

    if (this.state.userNameText.length === 0)
      this.setState ({showUserNameTextError: true});
    else this.setState ({showUserNameTextError: false});

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
