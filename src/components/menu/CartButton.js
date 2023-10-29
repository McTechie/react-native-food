// named imports
import { View, Text, Pressable } from 'react-native'
import { menuScreenStyles as styles } from '../../styles/menuScreen'
import { useMenuStore } from '../../stores/menuStore';
import { ShoppingCartIcon } from 'react-native-heroicons/solid'

export default function CartButton({ navigation }) {
  const cart = useMenuStore(state => state.cart);

  if (cart.length === 0) return null;

  return (
    <Pressable onPress={() => navigation.navigate('Cart')}>
      <View style={styles.cartBtn}>
        <ShoppingCartIcon color={'#444'} size={24} />
      </View>
    </Pressable>
  )
}