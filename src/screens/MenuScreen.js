// named imports
import { SafeAreaView } from 'react-native-safe-area-context'
import { menuScreenStyles as styles } from '../styles/menuScreen'

// default imports
import Header from '../components/menu/Header'
import ItemListing from '../components/menu/ItemListing'
import CartButton from '../components/menu/CartButton'

export default function MenuScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.menuContainer}>
      <Header navigation={navigation} />
      <ItemListing navigation={navigation} />
      <CartButton navigation={navigation} />
    </SafeAreaView>
  )
}