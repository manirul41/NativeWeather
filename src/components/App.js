/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import store from '../config/store';
import { MainRoute } from '../routers';

// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//     android:
//         'Double tap R on your keyboard to reload,\n' +
//         'Shake or press menu button for dev menu',
// });

export default class App extends Component {
    render() {
            return (
                <Provider store={store}>
                  <MainRoute />
                </Provider>
            );
    }
}
