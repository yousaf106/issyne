import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import NavigationDrawer from './Drawer/Drawer';
import {createStackNavigator} from '@react-navigation/stack';
import ToggleButton from './Drawer/ToggleButton';
import Welcome from '../screens/Welcome';

import Login from '../screens/Login';

import PageOneTeacher from '../screens/register/Teacher/PageOne';
import PageTwoTeacher from '../screens/register/Teacher/PageTwo';
import PageOneStudent from '../screens/register/Student/PageOne';
import PageTwoStudent from '../screens/register/Student/PageTwo';
import PageThreeTeacher from '../screens/register/Teacher/PageThree';
import Registration from '../screens/register/Registration';
import CourseNavigator from '../screens/course/BottomNavigator';
import {colors} from '../globals/Styles';
import Splash from '../screens/Splash';
import {fromLeft} from 'react-navigation-transitions';

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const Stack = createStackNavigator ();

const navigationStack = () => (
  <Stack.Navigator>



<Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
        transitionSpec: {
          open: config,
          close: config,
        },
      })}
      name="Registration"
      component={Registration}
    />



<Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
        transitionSpec: {
          open: config,
          close: config,
        },
      })}
      name="Splash"
      component={Splash}
    />



    <Stack.Screen
      options={({navigation}) => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },
        transitionSpec: {
          open: config,
          close: config,
        },
        headerTitleStyle: {
          color: 'white',
          alignSelf: 'center',
        },
      })}
      name="CourseNavigator"
      component={CourseNavigator}
    />

    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
        transitionSpec: {
          open: config,
          close: config,
        },
      })}
      name="PageOneTeacher"
      component={PageOneTeacher}
    />

    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
        transitionSpec: {
          open: config,
          close: config,
        },
      })}
      name="PageTwoTeacher"
      component={PageTwoTeacher}
    />
    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
        transitionSpec: {
          open: config,
          close: config,
        },
      })}
      name="PageThreeTeacher"
      component={PageThreeTeacher}
    />

    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
        transitionSpec: {
          open: config,
          close: config,
        },
      })}
      name="PageOneStudent"
      component={PageOneStudent}
    />

    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
        transitionSpec: {
          open: config,
          close: config,
        },
      })}
      name="PageTwoStudent"
      component={PageTwoStudent}
    />

    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
        transitionSpec: {
          open: config,
          close: config,
        },
      })}
      name="Login"
      component={Login}
    />

    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
        transitionSpec: {
          open: config,
          close: config,
        },
      })}
      name="Welcome"
      component={Welcome}
    />

    {/* 
<Stack.Screen
      options={({navigation}) => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: 'white',
        },
        title: 'Instructor Registration',
      })}
      name="StepManager"
      component={StepManager}
    />



    <Stack.Screen
      options={({navigation}) => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: 'white',
        },
        title: 'Student Registration',
      })}
      name="StudentForm"
      component={StudentForm}
    />



    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
      })}
      name="Login"
      component={Login}
    />

    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
      })}
      name="Splash"
      component={Splash}
    />
    <Stack.Screen
      name="Drawer"
      component={NavigationDrawer}
      options={({navigation}) => ({
        headerStyle: {backgroundColor: 'red'},
        headerLeft: ({}) => <ToggleButton />,
        //  headerLeft:()=>ToggleButton(navigation),
      })}
    /> */}
  </Stack.Navigator>
);
export default navigationStack;
