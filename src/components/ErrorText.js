import React from 'react';
import {Text} from 'react-native';
import {fonts} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';
export default (ErrorText = ({error = '', font = fonts.arial}) => (
  <Text
    style={{
      color: 'red',
      fontFamily: fonts.arial,
      marginTop: 15,
      fontSize: RFValue (12),
    }}
  >
    {error}
  </Text>
));
