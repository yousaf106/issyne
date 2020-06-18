import React, {Component} from 'react';
import {View, Button} from 'react-native-ui-lib';
import {Image} from 'react-native';
import ButtonMedium from '../components/ButtonMedium';
import ButtonMediumOutline from '../components/ButtonMediumOutline';

import Heading from '../components/Heading';
import {colors} from '../globals/Styles';
export default class Welcome extends Component {
  render () {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View flex paddingT-60>
          <Heading title="WELCOME" />
          <View center>
            <Image
              source={require ('../../res/images/welcome_img.jpg')}
              style={{width: '100%', height: 250, resizeMode: 'cover',marginTop:60}}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            bottom:0,
            marginBottom:70,
          }}
        >
          <ButtonMedium 
          onPress = {()=>this.props.navigation.navigate('Registration')}
          label={'Register'} />
          <View style={{width: 10}} />
          <ButtonMediumOutline 
          onPress = {()=>this.props.navigation.navigate('Login')}
          label={'Login'} />
        </View>
      </View>
    );
  }
}
