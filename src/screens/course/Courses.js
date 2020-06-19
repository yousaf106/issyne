import React, {Component} from 'react';
import {Text, ScrollView, StyleSheet,FlatList} from 'react-native';
import ButtonLarge from '../../components/ButtonLarge';
import ButtonMedium from '../../components/ButtonMedium';
import Avatar from '../../components/Avatar';
import {fonts, colors, margin} from '../../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {View, Image, Modal, TouchableOpacity} from 'react-native-ui-lib';
const data = [1, 2, 3, 4, 5, 6];

export default class Courses extends Component {
  render () {
    return (
      <View flex style={{backgroundColor: 'white', paddingStart: 5}}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.heading}>
            Live Course:
          </Text>
          <View row style={{marginTop: margin.vertical}}>
            <View flex style={{marginStart: 5}}>
              <Avatar
                fontSize={15}
                sizeMedium={true}
                source={require ('../../../res/images/avatar.png')}
                isMiddle={false}
                marginStart={5}
                label="Nick Thomas"
              />
            </View>
            <View style={{flex: 2}}>
              <ButtonLarge bgColor={colors.pink} label={'GO TO THE CHAT'} />
            </View>
          </View>
          <Text style={[styles.heading, {marginTop: 45}]}>
            Past Courses:
          </Text>
          <FlatList
            data={data}
            renderItem={({item, index}) => (
              <View>
                <View style={styles.pastCousesRow}>
                  <View row flex center>
                    <View>
                      <Text style={styles.dateTimeText}>12/5/2020</Text>
                      <Text style={styles.dateTimeText}>15mns</Text>
                    </View>
                    <View style={{marginStart: 15}}>
                      <Avatar
                        fontSize={15}
                        sizeMedium={true}
                        source={require ('../../../res/images/avatar.png')}
                        isMiddle={false}
                        marginStart={8}
                        label="Nick Thomas"
                      />
                    </View>
                  </View>
                  <View flex right>
                    <ButtonMedium
                      label="REPORT"
                      bgColor={colors.pink}
                      isWidthFixed={false}
                      labelSize={14}
                    />
                  </View>
                </View>
              </View>
            )}
          />

        </ScrollView>

      </View>
    );
  }
}
const styles = StyleSheet.create ({
  heading: {
    fontFamily: fonts.arialBold,
    fontSize: RFValue (18),
    color: colors.primary,
    marginTop: margin.vertical,
  },
  dateTimeText: {
    fontFamily: fonts.arial,
    fontSize: RFValue (15),
    color: '#545454',
    textAlign: 'center',
  },
  pastCousesRow: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: margin.vertical,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {flex: 1},
  leftColumnRow: {
    flexDirection: 'row',
  },
});
