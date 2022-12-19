import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicio from './src/Article';
import Feed from './src/Feed';
import Si from './src/Si';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icons  from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator ();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name="inicio" component={Inicio}
          options={{
            tabBarLabel: 'inicio',
            tabBarIcon: ({ color, size }) => (
              <Icons  name="home" color={color} size={size}/>
              ),
            }}
          />

          <Tab.Screen name="confi"  component={Feed}
          options={{
            tabBarLabel: 'confi',
            tabBarIcon: ({ color, size }) => (
              <Icons  name="setting" color={color} size={size}/>
              ),
            }}
          />

           <Tab.Screen name="tercer"  component={Si}
           options={{
            tabBarLabel: 'tercer',
            tabBarIcon: ({ color, size }) => (
              <Icons  name="flag" color={color} size={size}/>
              ),
            }}
          />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
