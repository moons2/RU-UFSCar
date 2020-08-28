/**
 * @format
 * @flow strict-local
 */

import {AppRegistry} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';

import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
