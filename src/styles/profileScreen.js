// named imports
import { StyleSheet } from 'react-native';

export const profileScreenStyles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    marginBottom: 80,
    position: 'relative',
    paddingVertical: 40,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  formContainer: {
    marginTop: 32,
  },
  input: {
    height: 50,
    width: 300,
    margin: 12,
    padding: 12,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#333333',
  },
  ctaContainer: {
    backgroundColor: '#365314',
    alignItems: 'center',
    marginTop: 32,
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  ctaContainerDisabled: {
    backgroundColor: '#365314',
    alignItems: 'center',
    marginTop: 32,
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    opacity: 0.5,
  },
  logoutBtn: {
    backgroundColor: '#333333',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  ctaText: {
    color: '#fff',
    fontSize: 18,
  },
});
