import React, {Component} from 'react';
import {View, Text, Colors} from 'react-native-ui-lib';
import {ScrollView, StyleSheet} from 'react-native';
import ButtonLarge from '../../../components/ButtonLarge';
import {padding, margin, fonts, colors} from '../../../globals/Styles';
import Heading from '../../../components/Heading';
import Title from '../../../components/Title';
import {errors} from '../../../globals/Errors';
import {RFValue} from 'react-native-responsive-fontsize';
import ErrorText from '../../../components/ErrorText';
import DocumentPicker from '../../../components/DocumentPicker';
import Api from '../../../network/Api';
import CheckBox from '../../../components/Checkbox';
import UploadDocumentButton from '../../../components/UploadDocumentButton';
const courseLabels = {
  primaire: 'Primaire',
  lycee: 'Lycee',
  college: 'College',
  university: 'Universitie',
};
const metrics = {
  math: 'Mathematics',
  pyh: 'Physice',
  svt: 'SVT',
  french: 'Frence',
  matter5: 'Matter 5',
  matter6: 'Matter 6',
};
export default class PageThree extends Component {
  componentDidMount = () => {};
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

      courses: [],
      showCoursesError: false,
      metrics: [],
      showMetricsError: false,
      idUri: '',
      showIdUriError: false,
      kbisUri: '',
      showKbisUriError: false,
      diplomaUri: '',
      showDiplomaUriError: false,
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
          <View style={{height: 40}} />
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
          <View style={{marginTop: 30}} />
          <Title title="You want to provide course for:" />
          <View row style={{flexDirection: 'row', marginTop: 20}}>
            <CheckBox
              checked={this.state.primitiveSelected}
              onValueChanged={primitiveSelected =>
                this.setState ({primitiveSelected})}
              label={courseLabels.primaire}
              onPress={() =>
                this.setState ({
                  primitiveSelected: !this.state.primitiveSelected,
                })}
            />

            <CheckBox
              checked={this.state.lyceeSelected}
              onValueChanged={lyceeSelected => this.setState ({lyceeSelected})}
              label={courseLabels.lycee}
              onPress={() =>
                this.setState ({lyceeSelected: !this.state.lyceeSelected})}
            />
          </View>

          <View row style={{flexDirection: 'row', marginTop: 15}}>
            <CheckBox
              checked={this.state.collegeSelected}
              onPress={() =>
                this.setState ({collegeSelected: !this.state.collegeSelected})}
              onValueChanged={collegeSelected =>
                this.setState ({collegeSelected})}
              label={courseLabels.college}
            />
            <CheckBox
              onPress={() =>
                this.setState ({
                  universitySelected: !this.state.universitySelected,
                })}
              checked={this.state.universitySelected}
              onValueChanged={universitySelected =>
                this.setState ({universitySelected})}
              label={courseLabels.university}
            />
          </View>
          {this.state.showCoursesError
            ? <ErrorText error={errors.CHECKBOX_ERROR} />
            : null}
          <View style={{marginTop: 30}} />

          <Title title="Metrics You want to teach:" />
          <View row style={{flexDirection: 'row', marginTop: 20}}>
            <CheckBox
              onPress={() =>
                this.setState ({
                  mathematicsSelected: !this.state.mathematicsSelected,
                })}
              checked={this.state.mathematicsSelected}
              onValueChanged={mathematicsSelected =>
                this.setState ({mathematicsSelected})}
              label={metrics.math}
            />
            <CheckBox
              onPress={() =>
                this.setState ({physicsSlected: !this.state.physicsSlected})}
              checked={this.state.physicsSlected}
              onValueChanged={physicsSlected =>
                this.setState ({physicsSlected})}
              label={metrics.pyh}
            />
          </View>
          <View row style={{flexDirection: 'row', marginTop: 15}}>
            <CheckBox
              onPress={() =>
                this.setState ({svtSelected: !this.state.svtSelected})}
              checked={this.state.svtSelected}
              onValueChanged={svtSelected => this.setState ({svtSelected})}
              label={metrics.svt}
            />
            <CheckBox
              onPress={() =>
                this.setState ({frenchSelected: !this.state.frenchSelected})}
              checked={this.state.frenchSelected}
              onValueChanged={frenchSelected =>
                this.setState ({frenchSelected})}
              label={metrics.french}
            />
          </View>

          <View row style={{flexDirection: 'row', marginTop: 15}}>
            <CheckBox
              onPress={() =>
                this.setState ({
                  matterFiveSelected: !this.state.matterFiveSelected,
                })}
              checked={this.state.matterFiveSelected}
              onValueChanged={matterFiveSelected =>
                this.setState ({matterFiveSelected})}
              label={metrics.matter5}
            />
            <CheckBox
              onPress={() =>
                this.setState ({
                  matterSixSelected: !this.state.matterSixSelected,
                })}
              checked={this.state.matterSixSelected}
              onValueChanged={matterSixSelected =>
                this.setState ({matterSixSelected})}
              label={metrics.matter6}
            />
          </View>

          {this.state.showMetricsError
            ? <ErrorText error={errors.CHECKBOX_ERROR} />
            : null}

          <View style={{marginTop: 30}} />

          <Title title="Documents to upload:" />
          <View style={{marginTop: 20}} />

          <UploadDocumentButton
            headingText="ID Card"
            subHeadingText="1 document uploaded"
            onReceiveUri={uri => {
              if (uri != null) {
                this.setState ({idUri: uri});
              } else this.setState ({idUri: ''});
            }}
          />

          {this.state.showIdUriError
            ? <ErrorText error={errors.DOCUMENT_ERROR} />
            : null}

          <View style={{marginTop: 10}} />

          <UploadDocumentButton
            headingText="K-Bis"
            subHeadingText="0 document uploaded"
            onReceiveUri={uri => {
              if (uri != null) {
                this.setState ({kbisUri: uri, showKbisUriError: true});
              }
              else
              this.setState ({kbisUri: '', showKbisUriError: false});
            }}
          />

          {this.state.showKbisUriError
            ? <ErrorText error={errors.DOCUMENT_ERROR} />
            : null}

          <View style={{marginTop: 10}} />

          <UploadDocumentButton
            headingText="Diploma"
            subHeadingText="0 document uploaded"
            onReceiveUri={uri => {
              if (uri != null) this.setState ({diplomaUri: uri});
              else this.setState ({diplomaUri: ''});
            }}
          />

          {this.state.showDiplomaUriError
            ? <ErrorText error={errors.DOCUMENT_ERROR} />
            : null}

          <View style={{marginTop: 20}} />

          <View center>
            <ButtonLarge
              onPress={async () => {
                await this.postFormData ();
                await this.areAllFieldsClear ();
                if (this.hasNoError ()) {
                } else console.warn ('error');
              }}
              label={'COMPLETE'}
            />
            <View style={{marginTop: margin.vertical}} />

          </View>
        </ScrollView>
      </View>
    );
  }

  postFormData = async () => {
    const {
      email,
      password,
      fName,
      lastName,
      date,
      status,
      address,
      phone,
      exp,
      uri,
    } = this.props.route.params;

    let formdata = new FormData ();
    formdata.append ('email', email);
    formdata.append ('password', password);
    formdata.append ('firstName', fName);
    formdata.append ('lastName', lastName);
    formdata.append ('dateOfBirth', '10-6-1991');
    formdata.append ('currentStatus', status);
    formdata.append ('address', address);
    formdata.append ('phoneNumber', phone);
    formdata.append ('experience', exp);
    const avatar = JSON.parse (uri);

    formdata.append ('metrics', this.state.metrics);
    formdata.append ('courses', this.state.courses);

    const profilePhoto = {
      uri: avatar.uri,
      type: avatar.type,
      name: avatar.name,
    };

    const kb = {
      uri: this.state.kbisUri.uri,
      type: this.state.kbisUri.type,
      name: this.state.kbisUri.name,
    };
    const diploma = {
      uri: this.state.diplomaUri.uri,
      type: this.state.diplomaUri.type,
      name: this.state.diplomaUri.name,
    };
    const id = {
      uri: this.state.idUri.uri,
      type: this.state.idUri.type,
      name: this.state.idUri.name,
    };

    formdata.append ('profileImage', profilePhoto);

    formdata.append ('idCard', id);
    formdata.append ('kbis', kb);
    formdata.append ('diploma', diploma);

    try {
      const response = await Api.postFormData ('register', formdata);
      console.warn (response);
      // console.warn(JSON.stringify(response));
    } catch (err) {}
  };

  hasNoError = () => {
    if (
      !this.state.showCoursesError &&
      !this.state.showMetricsError &&
      !this.state.showIdUriError &&
      //!this.state.showKbisUriError &&
      !this.state.showDiplomaUriError
    )
      return true;
    return false;
  };

  areAllFieldsClear = () => {
    const selectedCourses = [];
    if (this.state.primitiveSelected)
      selectedCourses.push (courseLabels.primaire);
    if (this.state.lyceeSelected) selectedCourses.push (courseLabels.lycee);
    if (this.state.collegeSelected) selectedCourses.push (courseLabels.college);
    if (this.state.universitySelected)
      selectedCourses.push (courseLabels.university);

    const selectedMetrics = [];
    if (this.state.mathematicsSelected) selectedMetrics.push (metrics.math);
    if (this.state.physicsSlected) selectedMetrics.push (metrics.pyh);
    if (this.state.svtSelected) selectedMetrics.push (metrics.svt);
    if (this.state.frenchSelected) selectedMetrics.push (metrics.french);
    if (this.state.matterFiveSelected) selectedMetrics.push (metrics.matter5);
    if (this.state.matterSixSelected) selectedMetrics.push (metrics.matter6);

    if (selectedCourses.length != 0) {
      this.setState ({
        courses: selectedCourses,
        showCoursesError: false,
      });
    } else this.setState ({showCoursesError: true});
    if (selectedMetrics.length != 0) {
      this.setState ({
        metrics: selectedMetrics,
        showMetricsError: false,
      });
    } else this.setState ({showMetricsError: true});

    if (this.state.idUri.length === 0) this.setState ({showIdUriError: true});
    else this.setState ({showIdUriError: false});

    if (this.state.kbisUri.length === 0)
      this.setState ({showKbisUriError: true});
    else this.setState ({showKbisUriError: false});

    if (this.state.diplomaUri.length === 0)
      this.setState ({showDiplomaUriError: true});
    else this.setState ({showDiplomaUriError: false});
  };
}

const styles = StyleSheet.create ({
  errorText: {},
});
