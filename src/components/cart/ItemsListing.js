// named imports
import { View, Text, Image, ScrollView } from 'react-native'
import { useMenuStore } from '../../stores/menuStore';
import { cartScreenStyles as styles } from '../../styles/cartScreen';

function CartItem({ item, quantity }) {
  return (
    <View style={styles.cartItem}>
      <Image source={item.img} style={styles.cartItemImage} />
      
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.cartItemTitle}>
            {item.title}
          </Text>

          <Text style={styles.cartItemQuantity}>
            x {item.quantity}
          </Text>
        </View>
        
        <Text style={styles.cartItemDesc}>
          {item.description.length > 50 ? item.description.slice(0, 50) + '...' : item.description}
        </Text>

        <Text style={styles.cartItemPrice}>
          ${item.price}
        </Text>
      </View>
    </View>
  )
}

export default function ItemsListing() {
  const cart = useMenuStore(state => state.cart);

  return (
    <ScrollView style={{ height: 400 }}>
      <View style={styles.cartItemsContainer}>
        {cart.map((item) => <CartItem key={item.title} item={item} />)}
      </View>
    </ScrollView>
  )
}
