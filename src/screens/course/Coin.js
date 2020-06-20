import React, {Component} from 'react';
import {Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import ButtonLarge from '../../components/ButtonLarge';
import ButtonMedium from '../../components/ButtonMedium';
import Avatar from '../../components/Avatar';
import {fonts, colors, margin} from '../../globals/Styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {View, Image, Modal, TouchableOpacity} from 'react-native-ui-lib';

export default class Coins extends Component {
  render () {
    return (
      <View flex center style={{backgroundColor: 'white',}}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.heading}>
            You Have:
          </Text>

          <View style = {styles.circle}>
            <Text style = {styles.coinNumber}>2</Text>
            <Text style = {styles.coinsText}>Coins</Text>
          </View>
       
          <Text style={[styles.heading,{marginTop:20}]}>
            Buy:
          </Text>


          <TouchableOpacity
          style = {styles.buttonContainer}
          > 
            <Text style = {styles.buttonMainText}>5 Coins</Text> 
            <Text style = {styles.buttonSubText}>{'22.50'+'\u20AC'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.buttonContainer}
          > 
            <Text style = {styles.buttonMainText}>10 Coins</Text> 
            <Text style = {styles.buttonSubText}>{'45'+'\u20AC'}</Text>
          </TouchableOpacity>

        </ScrollView>

      </View>
    );
  }
}
const styles = StyleSheet.create ({
  heading: {
    textAlign:'center',
    fontFamily: fonts.arialBold,
    fontSize: RFValue (18),
    color: colors.primary,
    marginTop: margin.vertical,
  },
 circle:{
     width:190,
     height:190,
     borderRadius:190/2,
     backgroundColor:colors.pink,
     alignItems:'center',
     justifyContent:'center',
     marginTop:margin.vertical,
     alignSelf:'center',
 },
   coinNumber:{
       color:'white',
       fontFamily:fonts.arialBold,
       fontSize:RFValue(65),
   },
   coinsText:{
    color:'white',
    fontFamily:fonts.arialBold,
    fontSize:RFValue(25),
},
buttonContainer:{
    width:268,
    height:91.66,
    backgroundColor:colors.pink,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    borderRadius:5,
},
buttonMainText:{
    color:'white',
    fontFamily:fonts.arialBold,
    fontSize:RFValue(35),
},

buttonSubText:{
    color:'white',
    fontFamily:fonts.airalItalic,
    fontSize:RFValue(20),
},
});
