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
const Stack = createStackNavigator ();

const navigationStack = () => (
  <Stack.Navigator>

    <Stack.Screen
      options={({navigation}) => ({
        
        headerStyle: {
          backgroundColor: colors.primary,
        },
        
        headerTitleStyle: {
          color: 'white',
          alignSelf:'center',
        },
        title: 'Fina a teacher',
      })}
      name="CourseNavigator"
      component={CourseNavigator}
    />

    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
      })}
      name="Registration"
      component={Registration}
    />

    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
      })}
      name="PageOneTeacher"
      component={PageOneTeacher}
    />

    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
      })}
      name="PageTwoTeacher"
      component={PageTwoTeacher}
    />
    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
      })}
      name="PageThreeTeacher"
      component={PageThreeTeacher}
    />

    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
      })}
      name="PageOneStudent"
      component={PageOneStudent}
    />

    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
      })}
      name="PageTwoStudent"
      component={PageTwoStudent}
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
