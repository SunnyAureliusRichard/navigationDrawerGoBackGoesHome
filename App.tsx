import 'react-native-gesture-handler';
import { DrawerScreenProps, createDrawerNavigator } from '@react-navigation/drawer';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

type Routes = {
  Screen1: undefined
  Screen2: undefined
  Screen3: undefined
};

function Screen1({ navigation }: DrawerScreenProps<Routes, 'Screen1'>) {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Screen 1</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

function Screen2({ navigation }: DrawerScreenProps<Routes, 'Screen2'>) {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Screen 2</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

function Screen3({ navigation }: DrawerScreenProps<Routes, 'Screen3'>) {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Screen 3</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Screen1" component={Screen1} />
        <Drawer.Screen name="Screen2" component={Screen2} />
        <Drawer.Screen name="Screen3" component={Screen3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}