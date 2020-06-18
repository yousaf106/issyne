import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  ScrollBar,
  TouchableOpacity,
  DateTimePicker,
} from 'react-native-ui-lib';
import {ScrollView} from 'react-native';
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
export default class PageOne extends Component {
  constructor (props) {
    super (props);
    this.state = {uri: ''};
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
              (2/3)
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
            placeholder="Current Status"
            onChangeItem={item => console.warn (item)}
          />
          <TextField placeholder="Address" helperText="Enter Full Address" />
          <NumericField
            placeholder="Phone Number"
            helperText="Enter Last Name"
          />
          <NumericField
            placeholder="Years of experience as a teacher"
            helperText="Enter Experience"
          />

          <DocumentPicker
            value={this.state.uri}
            placeholder="Picture"
            onReceiveUri={uri => {
              if (uri != null) this.setState ({uri: uri});
            }}
          />
          <View center>
            <ButtonLarge
              onPress={() => this.props.navigation.navigate ('PageThreeTeacher')}
              label={'NEXT'}
            />

          </View>
        </ScrollView>
      </View>
    );
  }
}
