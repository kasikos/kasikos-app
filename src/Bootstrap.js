import { Register } from './app/Router';

// Components
import Main from './resources/Main';
import Splash from './resources/Splash';

// Auth
import Auth from './resources/auth/Auth';

// Restaurants
import RestaurantsList from './resources/restaurants/RestaurantsList';
import RestaurantDetails from './resources/restaurants/RestaurantDetails';

// Menu
import MenuList from './resources/menu/MenuList';
import MealDetails from './resources/menu/MealDetails';


// register
export default () => {
    Register.route('Main', Main);
    Register.route('Splash', Splash);

    // Auth
    Register.route('Auth', Auth);

    // Restaurants
    Register.route('RestaurantsList', RestaurantsList);
    Register.route('RestaurantDetails', RestaurantDetails);

    // Menu
    Register.route('MenuList', MenuList);
    Register.route('MealDetails', MealDetails);
}