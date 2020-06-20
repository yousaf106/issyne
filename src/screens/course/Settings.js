import React, {Component} from 'react';
import {Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import ButtonLarge from '../../components/ButtonLarge';
import ButtonMedium from '../../components/ButtonMedium';
import Avatar from '../../components/Avatar';
import {fonts, colors, margin} from '../../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {View, Image, Modal, TouchableOpacity} from 'react-native-ui-lib';
import ButtonSmall from '../../components/ButtonSmall';

import MoalField from '../../components/ModalField';
import OutlineButton from '../../components/ButtonSmallOutline';
export default class Settings extends Component {
  render () {
    return (
      <View flex center style={{backgroundColor: 'white'}}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{marginTop: 20}}>
            <Avatar
              source={require ('../../../res/images/avatar.png')}
              label="Will"
              labelCenter={true}
              labelColor={'#363434'}
              fontFamily={fonts.arialBold}
              customImageSize={119}
              customLabelSize={16}
            />
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(145,145,145,0.2)',
                position: 'absolute',
                width: RFValue (110),
                height: RFValue (110),
                borderRadius: RFValue (119) / 2,
                alignSelf: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                style={{width: 22, height: 22, alignSelf: 'center'}}
                resizeMode="contain"
                source={require ('../../../res/images/plus.png')}
              />
            </TouchableOpacity>
          </View>
          <View center style={{marginTop: 20}}>
            <ButtonSmall
              bgColor={colors.pink}
              label={'Compmlete Profile Information'}
              labelSize={RFValue (16)}
            />
          </View>
          <View style={{marginTop: 40}} />
          <Text
            style={{
              fontSize: RFValue (15),
              color: '#565656',
              textAlign: 'center',
              fontFamily: fonts.avenRomam,
            }}
          >
            Payment Method
          </Text>
          <View row center style = {{justifyContent:'space-around'}}>
            <MoalField
              fullWidth={false}
              isMarginBottom={true}
              placeholder="Create de credit ********4331"
              makeNarrow={true}
              fixedWidth={'80%'}
              placeholderColor = {'#070606'}
            />
            <TouchableOpacity>
              <Image
                source={require ('../../../res/images/close.png')}
                style={{
                  width: 15,
                  height: 15,
                  resizeMode: 'center',
                  tintColor: '#ED3851',
                  marginStart: 5,
                }}
              />
            </TouchableOpacity>

          </View>
          <View center style={{marginTop: 40}}>
            <OutlineButton 
            height = {50}
            label={'Read Conditions Of Use'} />
          </View>
          <View center style={{marginTop: 20}}>
            <ButtonSmall
              bgColor={colors.pink}
              label={'Log out'}
              width = '90%'
              height = {50}
              labelSize={RFValue (16)}
            />
          </View>
        </ScrollView>

      </View>
    );
  }
}
const styles = StyleSheet.create ({
  
  
});
