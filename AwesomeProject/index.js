/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
