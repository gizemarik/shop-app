import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../constant/Colors';
import {createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

export default createAppContainer(ProductsNavigator);