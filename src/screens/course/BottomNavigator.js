import * as React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, fonts} from '../../globals/Styles';
import Find from './Find';
import Courses from './Courses';
import Coin from './Coin';
import Settings from './Settings';
import {RFValue} from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator ();
export default class BottomNavigator extends React.Component {
  componentDidMount = () => {
    this.props.navigation.setOptions ({title: 'Find A Teacher'});
  };

  render () {
    return (
      <View
        style={{
          flex: 1,
          paddingStart: 5,
          paddingEnd: 5,
          backgroundColor: 'white',
        }}
      >

        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: colors.primary,
            inactiveTintColor: '#707070',
            style: {
              backgroundColor: 'white',
              height: 85,

              paddingTop: 5,
              paddingBottom: 5,
              borderTopWidth: 1,
              borderTopColor: colors.primary,
            },
            labelStyle: {
              textAlign: 'center',
              fontSize: RFValue (12),
              fontFamily: fonts.arialBold,
              marginTop: 5,
            },
            indicatorStyle: {
              borderBottomColor: '#87B56A',
              borderBottomWidth: 2,
            },
          }}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              if (route.name === 'Find') {
                return (
                  <Image
                    source={require ('../../../res/images/find.png')}
                    style={{
                      width: 80,
                      height: 80,
                      tintColor: color,
                      resizeMode: 'contain',
                    }}
                  />
                );
              }
              if (route.name === 'Courses') {
                return (
                  <Image
                    source={require ('../../../res/images/course.png')}
                    style={{
                      width: 55,
                      height: 55,
                      marginTop: 5,
                      tintColor: color,
                      resizeMode: 'contain',
                    }}
                  />
                );
              }

              if (route.name === 'Coin')
                return (
                  <Image
                    source={require ('../../../res/images/coins.png')}
                    style={{
                      width: 50,
                      height: 50,
                      marginTop: 5,
                      tintColor: color,
                      resizeMode: 'contain',
                    }}
                  />
                );

              if (route.name === 'Settings')
                return (
                  <Image
                    source={require ('../../../res/images/settings.png')}
                    style={{
                      width: 50,
                      height: 50,
                      marginTop: 5,
                      tintColor: color,
                      resizeMode: 'contain',
                    }}
                  />
                );
            },
          })}
        >

          <Tab.Screen
            name="Find"
            options={{
              tabBarLabel: 'Find',
            }}
            component={Find}
            listeners={{
              tabPress: e => {
                this.props.navigation.setOptions ({title: 'Find A Teacher'});
              },
            }}
          />
          <Tab.Screen
            name="Courses"
            options={{
              tabBarLabel: 'Courses',
            }}
            listeners={{
              tabPress: e => {
                this.props.navigation.setOptions ({title: 'My Courses'});
              },
            }}
            component={Courses}
          />

          <Tab.Screen
            name="Coin"
            options={{
              tabBarLabel: 'Coin',
            }}
            component={Coin}
            listeners={{
              tabPress: e => {
                this.props.navigation.setOptions ({title: 'My Coins'});
              },
            }}
          />

          <Tab.Screen
            name="Settings"
            options={{
              tabBarLabel: 'Settings',
            }}
            component={Settings}
            listeners={{
              tabPress: e => {
                this.props.navigation.setOptions ({title: 'Settings'});
              },
            }}
          />

        </Tab.Navigator>
      </View>
    );
  }
}
