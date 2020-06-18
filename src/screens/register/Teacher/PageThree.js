import React, {Component} from 'react';
import {View, Text, Colors} from 'react-native-ui-lib';
import {ScrollView} from 'react-native';
import ButtonLarge from '../../../components/ButtonLarge';
import {padding, margin, fonts, colors} from '../../../globals/Styles';
import Heading from '../../../components/Heading';
import Title from '../../../components/Title';

import {RFValue} from 'react-native-responsive-fontsize';
import DocumentPicker from '../../../components/DocumentPicker';

import CheckBox from '../../../components/Checkbox';
import UploadDocumentButton from '../../../components/UploadDocumentButton';
export default class PageThree extends Component {
  constructor (props) {
    super (props);
    this.state = {
      uri: '',
      primitiveSelected: false,
      collegeSelected: false,
      lyceeSelected: false,
      universitySelected: false,
      mathematicsSelected: false,
      physicsSlected: false,
      svtSelected: false,
      frenchSelected: false,
      matterFiveSelected: false,
      matterSixSelected: false,
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
              (3/3)
            </Text>
          </View>
          <Title title="You want to provide course for:" />
          <View row style={{flexDirection: 'row', marginTop: margin.vertical}}>
            <CheckBox
              checked={this.state.primitiveSelected}
              onValueChanged={primitiveSelected =>
                this.setState ({primitiveSelected})}
              label="Primaire"
              onPress={() =>
                this.setState ({
                  primitiveSelected: !this.state.primitiveSelected,
                })}
            />
            <CheckBox
              checked={this.state.lyceeSelected}
              onValueChanged={lyceeSelected => this.setState ({lyceeSelected})}
              label="Lycee"
              onPress={() =>
                this.setState ({lyceeSelected: !this.state.lyceeSelected})}
            />
          </View>
          <View row style={{flexDirection: 'row', marginTop: margin.vertical}}>
            <CheckBox
              checked={this.state.collegeSelected}
              onPress={() =>
                this.setState ({collegeSelected: !this.state.collegeSelected})}
              onValueChanged={collegeSelected =>
                this.setState ({collegeSelected})}
              label="College"
            />
            <CheckBox
              onPress={() =>
                this.setState ({collegeSelected: !this.state.collegeSelected})}
              checked={this.state.universitySelected}
              onValueChanged={universitySelected =>
                this.setState ({universitySelected})}
              label="Universitie"
            />
          </View>

          <Title title="Metrics You want to teach:" />
          <View row style={{flexDirection: 'row', marginTop: margin.vertical}}>
            <CheckBox
              onPress={() =>
                this.setState ({
                  mathematicsSelected: !this.state.mathematicsSelected,
                })}
              checked={this.state.mathematicsSelected}
              onValueChanged={mathematicsSelected =>
                this.setState ({mathematicsSelected})}
              label="Mathematics"
            />
            <CheckBox
              onPress={() =>
                this.setState ({physicsSlected: !this.state.physicsSlected})}
              checked={this.state.physicsSlected}
              onValueChanged={physicsSlected =>
                this.setState ({physicsSlected})}
              label="Physice"
            />
          </View>
          <View row style={{flexDirection: 'row', marginTop: margin.vertical}}>
            <CheckBox
              onPress={() =>
                this.setState ({svtSelected: !this.state.svtSelected})}
              checked={this.state.svtSelected}
              onValueChanged={svtSelected => this.setState ({svtSelected})}
              label="SVT"
            />
            <CheckBox
              onPress={() =>
                this.setState ({frenchSelected: !this.state.frenchSelected})}
              checked={this.state.frenchSelected}
              onValueChanged={frenchSelected =>
                this.setState ({frenchSelected})}
              label="French"
            />
          </View>

          <View row style={{flexDirection: 'row', marginTop: margin.vertical}}>
            <CheckBox
              onPress={() =>
                this.setState ({
                  matterFiveSelected: !this.state.matterFiveSelected,
                })}
              checked={this.state.matterFiveSelected}
              onValueChanged={matterFiveSelected =>
                this.setState ({matterFiveSelected})}
              label="Matter5"
            />
            <CheckBox
              onPress={() =>
                this.setState ({
                  matterSixSelected: !this.state.matterSixSelected,
                })}
              checked={this.state.matterSixSelected}
              onValueChanged={matterSixSelected =>
                this.setState ({matterSixSelected})}
              label="Matter6"
            />
          </View>

          <Title title="Documents to upload:" />

          <UploadDocumentButton
            headingText="ID Card"
            subHeadingText="1 document uploaded"
            onReceiveUri={uri => {
              if (uri != null) console.warn (uri);
            }}
          />
          <UploadDocumentButton
            headingText="K-Bis"
            subHeadingText="0 document uploaded"
            onReceiveUri={uri => {
              if (uri != null) console.warn (uri);
            }}
          />
          <UploadDocumentButton
            headingText="Diploma"
            subHeadingText="0 document uploaded"
            onReceiveUri={uri => {
              if (uri != null) console.warn (uri);
            }}
          />
          <View center>
            <ButtonLarge
              onPress={() => this.props.navigation.navigate ('PageThree')}
              label={'COMPLETE'}
            />
            <View style={{marginTop: margin.vertical}} />

          </View>
        </ScrollView>
      </View>
    );
  }
}
