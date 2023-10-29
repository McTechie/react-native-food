// named imports
import { View, Text, Image } from 'react-native'
import { menuScreenStyles as styles } from '../../styles/menuScreen'

export default function Hero() {
  return (
    <View style={styles.heroContainer}>
      <Text style={styles.heroHeading}>
        Little Lemon
      </Text>
      <Text style={styles.heroSubheading}>
        Chicago
      </Text>
      
      <View style={styles.descriptionContainer}>
        <Text style={styles.heroDescription}>
          We are a family owned Mediterranean Bistro located in the heart of Chicago.
          {'\n'}
          {'\n'}
          We offer a variety of dishes and are open for breakfast, lunch, and dinner!
        </Text>

        <Image
          source={require('../../../assets/hero.avif')}
          style={styles.heroImg}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
      </View>
    </View>
  )
}