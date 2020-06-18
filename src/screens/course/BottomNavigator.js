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

export default function App () {
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
            height: 90,

            paddingTop: 5,
            paddingBottom: 5,
            borderTopWidth: 1,
            borderTopColor: colors.primary,
          },
          labelStyle: {
            textAlign: 'center',
            fontSize: RFValue (12),
            fontFamily: fonts.arialBold,
            marginTop:5,
          },
          indicatorStyle: {
            borderBottomColor: '#87B56A',
            borderBottomWidth: 2,
          },
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            //   if (route.name === 'StundentForm') {
            //     iconName = focused
            //       ? 'ios-information-circle'
            //       : 'ios-information-circle-outline';
            //   } else if (route.name === 'StundentForm') {
            //     iconName = focused ? 'ios-list-box' : 'ios-list';
            //     iconName = focused ? 'ios-list-box' : 'ios-list';
            //   }
            // You can return any component that you like here!
            if (route.name === 'Find')
              return (
                <Image
                  source={require ('../../../res/images/find.png')}
                  style={{
                    width: 90,
                    height: 90,
                    tintColor: color,
                    resizeMode: 'contain',
                    marginTop: 5,
                  }}
                />
              );
            if (route.name === 'Courses')
              return (
                <Image
                  source={require ('../../../res/images/course.png')}
                  style={{
                    width: 60,
                    height: 60,
                    marginTop: 5,
                    tintColor: color,
                    resizeMode: 'contain',
                  }}
                />
              );
            if (route.name === 'Coin')
              return (
                <Image
                  source={require ('../../../res/images/coins.png')}
                  style={{
                    width: 60,
                    height: 60,
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
                    width: 60,
                    height: 60,
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
        />
        <Tab.Screen
          name="Courses"
          options={{
            tabBarLabel: 'Courses',
          }}
          component={Courses}
        />

        <Tab.Screen
          name="Coin"
          options={{
            tabBarLabel: 'Coin',
          }}
          component={Coin}
        />

        <Tab.Screen
          name="Settings"
          options={{
            tabBarLabel: 'Settings',
          }}
          component={Settings}
        />

      </Tab.Navigator>
    </View>
  );
}
const styles = StyleSheet.create ({
  icon: {},
});
