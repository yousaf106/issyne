import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet, FlatList} from 'react-native';
import {
  View,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native-ui-lib';
import FilterButton from '../../components/ButtonRoundedMedium';
import MoalField from '../../components/ModalField';

import {colors, fonts, margin} from '../../globals/Styles';
import ButtonSmall from '../../components/ButtonSmall';
import {RFValue} from 'react-native-responsive-fontsize';
import CheckBox from '../../components/Checkbox';
import Avatar from '../../components/Avatar';
const data = [1, 2, 3, 4, 5, 6];
export default class Find extends Component {
  constructor (props) {
    super (props);
    this.state = {
      showFilterModal: false,
      allChecked: false,
      allRatinChecked: false,
      ratingChecked: false,
      showTeacherDetailModal: false,
    };
  }

  render () {
    return (
      <View flex style={{backgroundColor: 'white', paddingStart: 5}}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View center>
            <FilterButton
              bgColor={colors.pink}
              fontFamily={fonts.arialBold}
              label="Filters"
              onPress={() => this.setState ({showFilterModal: true})}
            />
          </View>
          <FlatList
            data={data}
            renderItem={({item, index}) => (
              <View style={{marginTop: 30}}>
                <View style={{width: '100%', flexDirection: 'row'}}>
                  <View flex style={{flex: 1}}>
                    <View row>
                      <View
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 10,
                          backgroundColor: colors.liveGreen,
                          alignSelf: 'center',
                        }}
                      />
                      <View style={{marginStart: 15}}>
                        <Avatar
                          source={require ('../../../res/images/avatar.png')}
                          sizeMedium = {true}
                          label = {'Xavier Bertand'}
                        />
                        </View>
                    </View>
                  </View>
                  <View flex style={{flex: 1, justifyContent: 'center'}}>

                    <View>
                      <Text style={styles.desctiptionText}>
                        Mathematics / Physics
                      </Text>
                      <Text style={styles.desctiptionText}>
                        10 Years of experience
                      </Text>
                      <View row>
                        <Image
                          style={{
                            width: 19,
                            height: 19,
                            resizeMode: 'contain',
                            alignSelf: 'center',
                            marginEnd: 2,
                          }}
                          source={require ('../../../res/images/star.png')}
                        />
                        <Text style={styles.desctiptionText}>
                          4.3/5 (321 Ratings)
                        </Text>
                      </View>

                    </View>

                  </View>

                </View>
                <View center style={{marginTop: 20}}>
                  <ButtonSmall
                    bgColor={colors.pink}
                    label={'Start the course'}
                  />
                  <View
                    style={{
                      marginTop: 20,
                      width: '80%',
                      height: 1,
                      backgroundColor: colors.primary,
                    }}
                  />
                </View>
              </View>
            )}
          />

          <Modal
            animationType="slide"
            transparent={true}
            overlayBackgroundColor={'rgba(228, 228, 228,0.7)'}
            visible={this.state.showFilterModal}
            onRequestClose={() => {}}
          >
            <View center flex>
              <View style={styles.modalContainer}>

                <View style={styles.modalTopBar}>
                  <TouchableOpacity
                    onPress={() => this.setState ({showFilterModal: false})}
                  >
                    <Image
                      source={require ('../../../res/images/close.png')}
                      style={styles.modalCloseButton}
                    />
                  </TouchableOpacity>
                  <Text style={styles.modalHeadingTitle}>Filters</Text>

                </View>
                <View style={styles.filterContentContainer}>
                  <View style={styles.filterLeftColumn}>
                    <Text style={styles.filterContentHeadingText}>Course:</Text>

                    <MoalField
                      isMarginBottom={true}
                      placeholder="type course name"
                    />
                    <CheckBox
                      isFlex={false}
                      checked={this.state.allChecked}
                      onValueChanged={allChecked =>
                        this.setState ({allChecked})}
                      label="All"
                      labelSize={RFValue (12)}
                      onPress={() =>
                        this.setState ({
                          allChecked: !this.state.allChecked,
                        })}
                    />
                  </View>
                  <View style={styles.filterRightColumn}>
                    <Text style={styles.filterContentHeadingText}>
                      Ratings:
                    </Text>
                    <View style={{marginTop: margin.vertical + 5}} />

                    <CheckBox
                      isFlex={false}
                      checked={this.state.ratingChecked}
                      onValueChanged={ratingChecked =>
                        this.setState ({ratingChecked})}
                      label="3/5 or more"
                      labelSize={RFValue (12)}
                      onPress={() =>
                        this.setState ({
                          ratingChecked: !this.state.ratingChecked,
                        })}
                    />
                    <View style={{marginTop: margin.vertical + 5}} />
                    <CheckBox
                      isFlex={false}
                      checked={this.state.allRatinChecked}
                      onValueChanged={allRatinChecked =>
                        this.setState ({allRatinChecked})}
                      label="All"
                      labelSize={RFValue (12)}
                      onPress={() =>
                        this.setState ({
                          allRatinChecked: !this.state.allRatinChecked,
                        })}
                    />
                  </View>
                </View>
              </View>

            </View>
          </Modal>

          <Modal
            animationType="slide"
            transparent={true}
            overlayBackgroundColor={'rgba(228, 228, 228,0.7)'}
            visible={this.state.showTeacherDetailModal}
            onRequestClose={() => {}}
          >
            <View center flex>
              <View style={styles.modalContainer}>

                <View style={styles.modalTopBar}>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState ({showTeacherDetailModal: false})}
                  >
                    <Image
                      source={require ('../../../res/images/close.png')}
                      style={styles.modalCloseButton}
                    />
                  </TouchableOpacity>
                  <Text style={styles.modalHeadingTitle}>Validar la seane</Text>

                </View>
                <View style={styles.teacherModalContentContainer}>

                  <Avatar
                    source={require ('../../../res/images/avatar.png')}
                    sizeLarge = {true}
                    label = {'Nick Thomas'}  
                  />
                  <Text
                  style = {{
                    color:'#565656',
                    fontFamily:fonts.arial,
                    fontSize:RFValue(10),
                  }}
                  >Note 4.2/5</Text>
                  <Text
                  style = {{
                    color:'#282828',
                    fontFamily:fonts.arial,
                    fontSize:RFValue(18),
                    marginTop:margin.vertical,
                  }}
                  >Mathematics/Physics</Text>
                  <Text style = {styles.teacherProfileHeading}>Course Length:</Text>
                  <Text style = {styles.teacherProfileText}>15 minutes (Possibility to extend)</Text>
                  <Text style = {styles.teacherProfileHeading}>My Credits:</Text>
                  <Text style = {styles.teacherProfileText}>You don't have any credits</Text>
                  <Text style = {styles.teacherProfileHeading}>Cost:</Text>
                  <Text style = {styles.teacherProfileText}>5$</Text>          
                  <Text style = {styles.teacherProfileHeading}>Payment Method:</Text>
                  
                  <MoalField
                    fullWidth={true}
                    isMarginBottom={true}
                    placeholder="Create de credit ********4331"
                    makeNarrow = {true}
                  />
                     <ButtonSmall
                    bgColor={colors.pink}
                    label={'Pay'}
                  />

                </View>
              </View>

            </View>
          </Modal>

        </ScrollView>

      </View>
    );
  }
}
const styles = StyleSheet.create ({
  desctiptionText: {
    fontSize: RFValue (12),
    fontFamily: fonts.arialBold,
    color: colors.primary,
    marginTop: 5,
  },
  modalTopBar: {
    width: '100%',

    backgroundColor: colors.primary,
    paddingStart: 10,
    paddingEnd: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  modalHeadingTitle: {
    fontFamily: fonts.arialBold,
    color: 'white',
    fontSize: RFValue (20),
    textAlign: 'center',
    flex: 1,
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
  },
  teacherModalContentContainer: {
    width: '100%',
    paddingStart: 10,
    paddingEnd: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCloseButton: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    flex: 1,
  },
  filterLeftColumn: {flex: 1},
  filterRightColumn: {flex: 1, paddingStart: 15},
  filterContentContainer: {
    width: '100%',
    paddingStart: 10,
    paddingEnd: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: 'white',
    borderTopWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterContentHeadingText: {
    color: colors.primary,
    fontFamily: fonts.arialBold,
    fontSize: RFValue (12),
  },
  teacherProfileHeading:{
    color:'#565656',
    fontFamily:fonts.arialBold,
    fontSize:RFValue(13),
    marginTop:margin.vertical,
  },
  teacherProfileText:{
    color:'#565656',
    fontFamily:fonts.arial,
    fontSize:RFValue(13),
  },
});
