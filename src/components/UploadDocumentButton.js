import React, {Component} from 'react';
import {Button, TouchableOpacity, View, Text} from 'react-native-ui-lib';
import {colors, fonts, margin} from '../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';
import DocumentPicker from 'react-native-document-picker';

export default function UploadDocumentButton({
  headingText = '',
  subHeadingText = '',
  onReceiveUri = null,
}) {
  return (
    <View center>
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
        style={{
          width: '60%',
          height: 60,
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: 'gray',
          marginTop: margin.vertical,
          alignItems: 'center',
          justifyContent: 'center',
        }}
     
      >
        <Text
          style={{color: 'black', fontSize: RFValue (15), fontWeight: 'bold'}}
        >
          {headingText}
        </Text>
        <Text style={{color: 'black', fontSize: RFValue (12)}}>
          {subHeadingText}
        </Text>

      </TouchableOpacity>
    </View>
  );
}
