// named imports
import { Pressable, View, Text, Alert } from 'react-native'
import { cartScreenStyles as styles } from '../styles/cartScreen';
import { useMenuStore } from '../stores/menuStore';

// default imports
import ItemsListing from '../components/cart/ItemsListing'

export default function CartScreen({ navigation }) {
  const {
    cart,
    clearCart,
  } = useMenuStore(state => ({
    cart: state.cart,
    clearCart: state.clearCart,
  }));

  const handleProcessCheckout = () => {
    Alert.alert(
      'Confirm Order',
      'Are you sure you want to place this order?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Confirm',
          style: 'default',
          onPress: () => {
            Alert.alert('Success!', 'Your order has been placed', [
              {
                text: 'Continue',
                onPress: () => {
                  navigation.reset({ index: 1, routes: [{ name: 'Menu' }] });
                  clearCart();
                },
              },
            ]);
          }
        },
      ],
      { cancelable: true }
    );
  }

  return (
    <View style={styles.container}>
      <ItemsListing />

      <View style={{ marginTop: 40, marginBottom: 20 }}>
        <Text style={{ fontSize: 16, color: '#333333', textAlign: 'center' }}>
          From our kitchen to your table,
        </Text>
        <Text style={{ marginTop: 8, fontSize: 16, color: '#333333', textAlign: 'center' }}>
          we hope you enjoy your meal!
        </Text>
      </View>
      
      <View style={styles.separator} />

      <View style={styles.actionsContainer}>
        <Pressable
          onPress={() => handleProcessCheckout()}
          style={styles.ctnBtn}
        >
          <Text style={{ color: '#fff', fontSize: 18 }}>Checkout</Text>
        </Pressable>

        <Text style={{ fontSize: 20, color: '#333333', fontWeight: '500' }}>
          Total: ${cart.reduce((total, item) => total + (item.price * item.quantity), 0)}
        </Text>
      </View>
    </View>
  )
}