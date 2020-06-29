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
            onReceiveUri (res);
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
          style={{color: '#070606', fontSize: RFValue (14),fontFamily:fonts.arial}}
        >
          {headingText}
        </Text>
        <Text style={{color: '#070606', fontSize: RFValue (12),fontFamily:fonts.airalItalic}}>
          {subHeadingText}
        </Text>

      </TouchableOpacity>
    </View>
  );
}
