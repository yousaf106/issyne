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
import ButtonLarge from '../../components/ButtonLarge';
import BorderButton from '../../components/ButtonLargeOutline';
import {padding, margin, fonts, colors} from '../../globals/Styles';
import Heading from '../../components/Heading';
import {RFValue} from 'react-native-responsive-fontsize';
import SocialButton from '../../components/SocialButton';
import {color} from 'react-native-reanimated';
export default class Registration extends Component {
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
    
      
          <View center>
              <Text style = {{marginTop:55,marginBottom:35,color:colors.primary,fontSize:RFValue(19)}}>Your are a :</Text>
            <ButtonLarge
              onPress={() => this.props.navigation.navigate ('PageOneStudent')}
              label={'STUDENT'}
            />
            <View style ={{marginTop:margin.vertical}}/>
            <View style ={{marginTop:margin.vertical}}/>
 
            <BorderButton
              onPress={() => this.props.navigation.navigate ('PageOneTeacher')}
              label={'TEACHER'}
            />
     
          </View>
        </ScrollView>
      </View>
    );
  }
}
