import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {FC} from 'react';
import Home from './screens/Home';
import {Image} from 'react-native';
import Reports from './screens/Reports';
import Profile from './screens/Profile';
import {EmotionSelector} from './screens/form/EmotionSelector';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabs: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let icon: number | undefined;
          if (route.name === 'Home') {
            icon = focused
              ? require('./assets/home-focused.png')
              : require('./assets/home.png');
          } else if (route.name === 'Reports') {
            icon = focused
              ? require('./assets/reports-focused.png')
              : require('./assets/reports.png');
          } else if (route.name === 'Profile') {
            icon = focused
              ? require('./assets/profile.png')
              : require('./assets/profile.png');
          }
          return <Image source={icon} />;
        },
        tabBarStyle: {
          backgroundColor: '#121212',
          paddingBottom: 24,
          height: 70,
          borderTopColor: '#121212',
        },
        tabBarLabelStyle: {
          fontFamily: 'Mulish-SemiBold.ttf',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#878787',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Reports" component={Reports} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="EmotionSelector" component={EmotionSelector} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
