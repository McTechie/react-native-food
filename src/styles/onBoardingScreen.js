// named imports
import { StyleSheet } from 'react-native';

export const onBoardingScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6ef',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 32,
  },
  heading: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ctaContainer: {
    width: '100%',
    backgroundColor: '#365314',
    alignItems: 'center',
    marginVertical: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
  },
  ctaText: {
    color: '#fff',
    fontSize: 20,
    marginRight: 2,
  },
});
