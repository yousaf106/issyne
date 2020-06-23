import React, {Component} from 'react';
import {View, Text} from 'react-native-ui-lib';
import {ScrollView} from 'react-native';
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
import {validatePhoneNumber} from '../../../globals/Functions';

export default class PageOne extends Component {
  constructor (props) {
    super (props);
    this.state = {
      uri: '',
      phoneNoText: '',
      phoneError: '',
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
          <TextField placeholder="First Name" helperText="Enter First Name" />
          <View style={{marginTop: -30}}>
            <TextField placeholder="Last Name" helperText="Enter Last Name" />
          </View>
          <DatePicker
            placeholder={'Date of Birth'}
            onChange={value => console.warn (value)}
          />

          <Dropdown
            items={[
              {label: 'Item 1', value: 'item1'},
              {label: 'Item 2', value: 'item2'},
            ]}
            placeholder="Educational Level"
            onChangeItem={item => console.warn (item)}
          />
          <TextField placeholder="City" helperText="Enter City Name" />
          <NumericField
            placeholder="Phone Number"
            helperText="Enter Phone Number"
            onFocus={() => {
              if (this.state.phoneNoText.length === 0)
                this.setState ({phoneError: errors.PHONE_EMPTY});
              else this.setState ({phoneError: ''});
            }}
            onEmptyError={isEmpty => {
              if (isEmpty) this.setState ({phoneError: errors.PHONE_ERROR});
              else this.setState ({phoneError: ''});
            }}
            value={this.state.phoneNoText}
            maxLength = {10}
            onChangeText={async text => {
             await this.setState ({phoneNoText: text});
              if (validatePhoneNumber (text)) {
                console.warn('inside If')
                this.setState ({phoneError: ''});
              } else {
                console.warn('inside Else')

                this.setState ({phoneError: errors.PHONE_ERROR});
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
            <TextField placeholder="Username" helperText="Enter Username" />
          </View>

          <DocumentPicker
            value={this.state.uri}
            placeholder="Picture"
            onReceiveUri={uri => {
              if (uri != null) this.setState ({uri: uri});
            }}
          />
          <View center>
            <ButtonLarge onPress={() => {}} label={'Complete'} />

          </View>
        </ScrollView>
      </View>
    );
  }
}
