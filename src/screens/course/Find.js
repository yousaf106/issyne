import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet, FlatList} from 'react-native';
import {View, Image, Avatar} from 'react-native-ui-lib';
import FilterButton from '../../components/ButtonRoundedMedium';
import {colors, fonts, margin} from '../../globals/Styles';
import ButtonSmall from '../../components/ButtonSmall';
import {RFValue} from 'react-native-responsive-fontsize';
const data = [1, 2, 3, 4, 5, 6];
export default class Find extends Component {
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
                          size={65}
                          containerStyle={{alignSelf: 'center'}}
                        />
                        <Text
                          style={{
                            marginTop: margin.vertical,
                            color: colors.primary,
                            fontSize: RFValue (12),
                            fontFamily: fonts.arial,
                          }}
                        >
                          Xavier Bertand
                        </Text>
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
});
