import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const hardcodedUsername = 'username';
    const hardcodedPassword = 'password';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      Alert.alert('Login successful', 'Welcome!', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'),
        },
      ]);
    } else {
      Alert.alert('Login failed', 'Please add valid login credentials');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View testID="Login" style={styles.container}>
      <Text style={styles.title}>User Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          testID="userName"
          onChangeText={setUsername}
          placeholder="Username"
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View>
          <TextInput
            testID="password"
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={!showPassword}
            style={styles.input}
          />
          <TouchableOpacity
            testID="toggle-password-visibility"
            onPress={togglePasswordVisibility}
            style={styles.passwordToggle}>
            <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        testID="loginButton"
        onPress={handleLogin}
        style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  passwordToggle: {
    position: 'absolute',
    top: 12,
    right: 10,
  },
  loginButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#007BFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
