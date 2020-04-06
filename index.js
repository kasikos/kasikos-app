import { Navigation } from 'react-native-navigation';
import { Route } from './src/app/Router';
import Bootstrap from './src/Bootstrap';

Bootstrap();

Navigation.events().registerAppLaunchedListener(() => {
    Route.set('Main');
});