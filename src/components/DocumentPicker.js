import React, {Component} from 'react';
import {TextField, View, TouchableOpacity, Avatar} from 'react-native-ui-lib';
import {colors, fonts, margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';
import DocumentPicker from 'react-native-document-picker';

export default function FilePicker({
  placeholder = '',
  placeholderColor = colors.primary,
  underlineColor = colors.primary,
  value = '',
  onReceiveUri = null,
}) {
  return (
    <TouchableOpacity
      onPress={async () => {
        try {
          const res = await DocumentPicker.pick ({
            type: [DocumentPicker.types.images],
          });
          onReceiveUri (res.uri);
          console.log (
            res.uri,
            res.type, // mime type
            res.name,
            res.size
          );
        } catch (err) {
          onReceiveUri (null);
          if (DocumentPicker.isCancel (err)) {
            // User cancelled the picker, exit any dialogs or menus and move on
          } else {
            throw err;
          }
        }
      }}
    >

      <TextField
        style={{fontFamily: fonts.regular,color:colors.primary}}
        placeholder={placeholder}
        expandable={false}
        floatingPlaceholder={false}
        dark10
        editable={false}
        underlineColor={underlineColor}
        placeholderTextColor={placeholderColor}
        floatOnFocus={true}
        value={value}
      />
      <Avatar 
      containerStyle = {{position:'absolute',alignSelf:'flex-end',marginTop:-5}}
      source={value.length !=0 ? {uri: value} : require('../../res/images/avatar.png')} size={40} />
    </TouchableOpacity>
  );
}
