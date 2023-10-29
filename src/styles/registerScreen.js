// named imports
import { StyleSheet } from 'react-native';

export const loginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    paddingTop: 48,
    backgroundColor: '#f5f5dc',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 32,
  },
  heading: {
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  ctaContainer: {
    backgroundColor: '#365314',
    alignItems: 'center',
    marginVertical: 32,
    paddingVertical: 12,
    marginHorizontal: 12,
    borderRadius: 6,
  },
  ctaContainerDisabled: {
    backgroundColor: '#365314',
    alignItems: 'center',
    marginVertical: 32,
    paddingVertical: 12,
    marginHorizontal: 12,
    borderRadius: 6,
    opacity: 0.5,
  },
  ctaText: {
    color: '#fff',
    fontSize: 18,
  },
});
