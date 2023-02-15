import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Button, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
//import { useNavigation } from 'react-native-navigation';


function LoginScreen({ navigation }){

const [userName, setUserName] = useState('');
const [passWord, setPassword] = useState('');


  return(
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <Text style={styles.title}>AROME</Text>
      <Text style={styles.description}>A Necklace Wearble for Food Type and Alcohol Drinking Recognition</Text>
      <StatusBar style="auto" />
      <Text style={styles.subtitle}>Login</Text>
      <Text style={styles.heading}>Username</Text>
      <TextInput
        value={userName}
        onChangeText={(username) => setUserName(username)}
        placeholder={'Enter Username'}
        style={styles.input}
      />
      <Text style={styles.heading}>Password</Text>
      <TextInput
        value={passWord}
        onChangeText={(password) => setPassword(password)}
        placeholder={'Enter Password'}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button1} 
        onPress={()=> 
          navigation.navigate("Home", {userName: userName,
          })
        }
      >
              <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={()=> navigation.navigate("Account")}>
        <Text style={styles.buttonText}>Create an Account</Text>
      </TouchableOpacity>

    </View>
    </SafeAreaView>
  );
}

function HomeScreen({ navigation, route }){
  const { userName } = route.params;

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>AROME</Text>
      <Text style={styles.description}>A Necklace Wearble for Food Type and Alcohol Drinking Recognition</Text>
      <StatusBar style="auto" />
      <Text style={styles.subtitle}>Welcome {userName}!</Text>
      <TouchableOpacity style={styles.button1} onPress={()=> navigation.navigate("Manual Entry")}>
        <Text style={styles.buttonText}>Manually Log Food</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={()=> navigation.navigate("View Logs")}>
        <Text style={styles.buttonText}>View Logs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={()=> navigation.navigate("Settings")}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function AccountScreen({ navigation }){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>AROME</Text>
        <Text style={styles.description}>A Necklace Wearble for Food Type and Alcohol Drinking Recognition</Text>
        <StatusBar style="auto" />
        <Text style={styles.subtitle}>Create an Account</Text>
        <Text style={styles.heading}>First Name</Text>
        <TextInput
          value={firstName}
          onChangeText={(firstname) => setFirstName(firstname)}
          placeholder={'Enter First Name'}
          style={styles.input}
        />
        <Text style={styles.heading}>Last Name</Text>
        <TextInput
          value={lastName}
          onChangeText={(lastname) => setLastName(lastname)}
          placeholder={'Enter Last Name'}
          style={styles.input}
        />
        <Text style={styles.heading}>Email</Text>
        <TextInput
          value={newEmail}
          onChangeText={(email) => setNewEmail(email)}
          placeholder={'Enter Email'}
          style={styles.input}
        />
        <Text style={styles.heading}>Password</Text>
        <TextInput
          value={newPassword}
          onChangeText={(password) => setNewPassword(password)}
          placeholder={'Enter Password'}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button1} onPress={()=> navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function EntryScreen({ navigation }){

  const [foodType, setFoodType] = useState('');
  const [foodQuantity, setFoodQuantity] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [calorieCount, setCalorieCount] = useState('');

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.subtitle}>Manual Entry</Text>
        <Text style={styles.heading}>Food Classification</Text>
        <TextInput
          value={foodType}
          onChangeText={(foodtype) => setFoodType(foodtype)}
          placeholder={'Enter Food'}
          style={styles.input}
        />
        <Text style={styles.heading}>Quantity</Text>
        <TextInput
          value={foodQuantity}
          onChangeText={(foodquantity) => setFoodQuantity(foodquantity)}
          placeholder={'Enter Amount of Food'}
          style={styles.input}
        />
        <Text style={styles.heading}>Date/Time</Text>
        <TextInput
          value={dateTime}
          onChangeText={(datetime) => setDateTime(datetime)}
          placeholder={'Enter Date or Time'}
          style={styles.input}
        />
        <Text style={styles.heading}>Calories (Optional)</Text>
        <TextInput
          value={calorieCount}
          onChangeText={(caloriecount) => setCalorieCount(caloriecount)}
          placeholder={'Enter Calories'}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button1} onPress={()=> navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function LogScreen({ navigation }){
  return(
    <SafeAreaView style={styles.container}>
      <Text>This is the logs page</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function SettingScreen({ navigation }){
  return(
    <SafeAreaView style={styles.container}>
      <Text>This is the settings page</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Manual Entry" component={EntryScreen} />
        <Stack.Screen name="View Logs" component={LogScreen} />
        <Stack.Screen name="Settings" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#BCD8B7',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BCD8B7',
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  description: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  button1: {
    backgroundColor: '#F1F29D',
    padding: 10,
    marginBottom: 10,
  },
  button2: {
    backgroundColor: '#9DE3F2',
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center'
  },
});
