// named imports
import { View, Text, Image, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { onBoardingScreenStyles as styles } from '../styles/onBoardingScreen';
import { ChevronRightIcon } from 'react-native-heroicons/solid'

export default function OnboardingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/little-lemon-logo.png')}
          style={styles.logo}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <Text style={styles.heading}>Little Lemon, your local</Text>
        <Text style={styles.heading}>Mediterranean Bistro</Text>
      </View>

      <View>
        <Pressable
          onPress={() => navigation.navigate('Register')}
          style={styles.ctaContainer}
        >
          <Text style={styles.ctaText}>
            Get started
          </Text>
          <ChevronRightIcon color={'#fff'} size={20} />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}