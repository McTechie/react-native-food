// named imports
import { View, Text, Image, Pressable } from 'react-native'
import { menuScreenStyles as styles } from '../../styles/menuScreen'

export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../../assets/little-lemon-logo.png')}
        style={{
          width: 40,
          height: 40,
          position: 'absolute',
          left: 20,
        }}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />

      <Text style={styles.headerText}>
        Little Lemon
      </Text>
      
      <Pressable
        onPress={() => navigation.navigate('Profile')}
        style={styles.avatarContainer}
      >
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png',
          }}
        />
      </Pressable>
    </View>
  )
}