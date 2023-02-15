import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen'
import { createNativeStackNavigator, NavigationRouteContext, StackActions } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark"/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.SCreen name="MealsCategories" component={CategoriesScreen}/>
          <CategoriesScreen/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
