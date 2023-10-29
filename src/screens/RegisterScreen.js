// named imports
import { useState } from 'react';
import { useUserStore } from '../stores/userStore';
import { validateEmail, validatePassword } from '../utils/validation';
import { loginScreenStyles as styles } from '../styles/registerScreen';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image,
  Text,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {
    user,
    setUser,
  } = useUserStore(state => ({
    user: state.user,
    setUser: state.setUser,
  }));

  if (user) {
    navigation.reset({ index: 1, routes: [{ name: 'Menu' }] });
  }

  const handleSubmission = () => {
    let validationSuccessful = true;

    if (!email || !name || !password || !confirmPassword) {
      validationSuccessful = false;
      return Alert.alert('Please fill in all fields');
    }

    if (!validateEmail(email)) {
      validationSuccessful = false;
      return Alert.alert('Please enter a valid email address');
    }

    if (!validatePassword(password, confirmPassword)) {
      validationSuccessful = false;
      return Alert.alert('Passwords do not match');
    }

    if (validationSuccessful) {
      const userObj = { name, email, password };

      setUser(userObj);

      Alert.alert('Success!', 'Your account has been created', [
        {
          text: 'Continue',
          onPress: () => {
            navigation.reset({ index: 1, routes: [{ name: 'Menu' }] });
          },
        },
      ]);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Image
          source={require('../../assets/little-lemon-logo-grey.png')}
          style={styles.logo}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <Text style={styles.heading}>
          Creating an account let&apos;s you enjoy a seamless experience!
        </Text>
        <TextInput
          value={name}
          onChangeText={setName}
          onSubmitEditing={handleSubmission}
          placeholder="Enter your full name"
          keyboardType="default"
          style={styles.input}
          clearButtonMode="always"
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={handleSubmission}
          placeholder="Enter your email"
          keyboardType="email-address"
          style={styles.input}
          clearButtonMode="always"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={handleSubmission}
          placeholder="Enter your password"
          keyboardType="default"
          style={styles.input}
          clearButtonMode="always"
          secureTextEntry={true}
        />
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          onSubmitEditing={handleSubmission}
          placeholder="Confirm your password"
          keyboardType="default"
          style={styles.input}
          clearButtonMode="always"
          secureTextEntry={true}
        />
        <Pressable
          onPress={handleSubmission}
          style={
            !(validateEmail(email) && validatePassword(password, confirmPassword))
            || !name
              ? styles.ctaContainerDisabled
              : styles.ctaContainer
          }
        >
          <Text style={styles.ctaText}>Login</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  )
};
