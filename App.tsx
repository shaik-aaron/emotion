import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {FC} from 'react';
import Home from './screens/Home';
import {Image} from 'react-native';
import Reports from './screens/Reports';
import {EmotionSelector} from './screens/form/EmotionSelector';
import {Provider} from 'react-redux';
import store from './store/store';
import DescribeSelector from './screens/form/DescribeSelector';
import Reason from './screens/form/Reason';
import ActivitySelector from './screens/form/ActivitySelector';
import Final from './screens/form/Final';
import WeeklyReport from './screens/WeeklyReport';
import Summary from './screens/Summary';

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
          paddingTop: 8,
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
    </Tab.Navigator>
  );
};

const App: FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
          <Stack.Screen name="EmotionSelector" component={EmotionSelector} />
          <Stack.Screen name="DescribeSelector" component={DescribeSelector} />
          <Stack.Screen name="Reason" component={Reason} />
          <Stack.Screen name="ActivitySelector" component={ActivitySelector} />
          <Stack.Screen name="Final" component={Final} />
          <Stack.Screen name="Weekly Reports" component={WeeklyReport} />
          <Stack.Screen name="Summary" component={Summary} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
