// named imports
import { StyleSheet } from 'react-native';

export const cartScreenStyles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 60,
  },
  separator: {
    borderBottomColor: '#333333',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  cartItemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  cartItem: {
    flexDirection: 'row',
    padding: 10,
  },
  cartItemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 20,
  },
  cartItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemDesc: {
    fontSize: 16,
    marginVertical: 4,
    color: '#444444',
    flexWrap: 'wrap',
    flexShrink: 1,
    width: 240,
  },
  cartItemPrice: {
    marginTop: 4,
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  cartItemQuantity: {
    marginTop: 4,
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  actionsContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ctnBtn: {
    backgroundColor: '#365314',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 4,
  }
});
