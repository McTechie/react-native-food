// named imports
import { useState } from 'react';
import { useUserStore } from '../stores/userStore';
import { Alert, View, Text, Image, TextInput, Pressable } from 'react-native';
import { validateEmail } from '../utils/validation';
import { profileScreenStyles as styles } from '../styles/profileScreen';

export default function ProfileScreen({ navigation }) {
  const {
    user,
    setUser,
  } = useUserStore((state) => ({
    user: state.user,
    setUser: state.setUser,
  }))

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)

  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Confirm',
          style: 'default',
          onPress: () => {
            setUser(null);
            navigation.reset({ index: 0, routes: [{ name: 'Onboarding' }] });
          }
        },
      ],
      { cancelable: true }
    );
  }

  const handleSubmission = () => {
    let validationSuccessful = true;

    if (!email || !name) {
      validationSuccessful = false;
      return Alert.alert('Please fill in all fields');
    }

    if (!validateEmail(email)) {
      validationSuccessful = false;
      return Alert.alert('Please enter a valid email address');
    }

    if (validationSuccessful) {
      setUser({ ...user, name, email });
      Alert.alert('Success!', 'Your profile has been updated', [
        {
          text: 'Continue',
          onPress: () => navigation.goBack(),
        },
      ]);
    }
  }
  
  return (
    <View style={styles.profileContainer}>
      <Image
        style={styles.avatar}
        source={{
          uri: 'https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png',
        }}
      />

      <View style={styles.formContainer}>
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

        <Pressable
          onPress={handleSubmission}
          style={
            !(validateEmail(email) && name)
              ? styles.ctaContainerDisabled
              : styles.ctaContainer
          }
        >
          <Text style={styles.ctaText}>
            Update Profile
          </Text>
        </Pressable>

        <Pressable
          onPress={handleLogout}
          style={styles.logoutBtn}
        >
          <Text style={styles.ctaText}>
            Logout
          </Text>
        </Pressable>
      </View>
    </View>
  )
}