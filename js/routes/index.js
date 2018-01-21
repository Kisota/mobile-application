/* @flow */

import React from 'react';
import { ScreenOrientation } from 'expo';

import {
  Platform,
} from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

/* screens */
import {
  HomeScreen,
  SettingsScreen,
  StatisticsScreen,
} from '../screens';

import {
  WorkoutList,
  WorkoutViewer,

  /* creator */
  WorkoutCreator,
  WorkoutCreatorStepNameScreen,
  WorkoutCreatorStepStepsScreen,

  /* player */
  WorkoutPlayer,
} from '../screens/Workout/screens';

ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);

export const WorkoutStack = StackNavigator({
  WorkoutList: {
    screen: WorkoutList,
  },
  WorkoutPlayer: {
    screen: WorkoutPlayer,
  },
  WorkoutViewer: {
    screen: WorkoutViewer,
  },
  WorkoutCreator: {
    screen: WorkoutCreator,
  },
  WorkoutCreatorStepNameScreen: {
    screen: WorkoutCreatorStepNameScreen,
  },
  WorkoutCreatorStepStepsScreen: {
    screen: WorkoutCreatorStepStepsScreen,
  },
});

const Tabs = TabNavigator(
  {
    // Index: {
    //   screen: HomeScreen,
    //   navigationOptions: {
    //     tabBarLabel: 'Home',
    //     tabBarIcon: ({ tintColor, focused }) => (
    //       <Ionicons
    //         name={focused ? 'ios-home' : 'ios-home-outline'}
    //         size={26}
    //         style={{ color: tintColor }}
    //       />
    //     ),
    //   },
    // },
    // Workouts: {
    Index: {
      screen: WorkoutStack,
      path: '/workouts',
      navigationOptions: {
        title: 'lol',
        tabBarLabel: 'Workouts',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-heart' : 'ios-heart-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    // Statistics: {
    //   screen: StatisticsScreen,
    //   navigationOptions: {
    //     tabBarLabel: 'Stats',
    //     tabBarIcon: ({ tintColor, focused }) => (
    //       <Ionicons
    //         name={focused ? 'ios-analytics' : 'ios-analytics-outline'}
    //         size={26}
    //         style={{ color: tintColor }}
    //       />
    //     ),
    //   },
    // },
    // Settings: {
    //   screen: SettingsScreen,
    //   navigationOptions: {
    //     tabBarLabel: 'Settings',
    //     tabBarIcon: ({ tintColor, focused }) => (
    //       <Ionicons
    //         name={focused ? 'ios-settings' : 'ios-settings-outline'}
    //         size={26}
    //         style={{ color: tintColor }}
    //       />
    //     ),
    //   },
    // },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',

    /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  },
);

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
