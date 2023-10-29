// named imports
import { View, Text, Pressable, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useMenuStore } from '../../stores/menuStore';
import { menuScreenStyles as styles } from '../../styles/menuScreen';
import { CATEGORIES } from '../../constants/categories';

// default imports
import debounce from 'lodash.debounce';

export default function Featured({ scrollViewRef }) {
  const { 
    searchBarText,
    setSearchBarText,
    activeCategories,
    addCategory,
    removeCategory,
  } = useMenuStore(state => ({
    searchBarText: state.searchBarText,
    setSearchBarText: state.setSearchBarText,
    activeCategories: state.activeCategories,
    addCategory: state.addCategory,
    removeCategory: state.removeCategory,
  }));

  const handleSearchChange = debounce((text) => {
    setSearchBarText(text);
  }, 500);

  const handleCategoryPress = (category) => {
    if (activeCategories.includes(category)) {
      removeCategory(category);
    } else {
      addCategory(category);
    }
  };

  return (
    <View style={styles.featuredContainer}>
      <Searchbar
        placeholder="Search"
        placeholderTextColor="white"
        onChangeText={handleSearchChange}
        onFocus={() => scrollViewRef.current.scrollTo({ y: 0, animated: true })}
        value={searchBarText}
        style={styles.searchBar}
        iconColor="white"
        inputStyle={styles.searchBarInput}
        elevation={1}
      />

      {/* Featured Categories */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        bouncesZoom={false}
        scrollEventThrottle={16}
      >
        <View style={styles.featuredCategories}>
          {CATEGORIES.map((category, index) => (
            <Pressable
              key={index}
              style={activeCategories.includes(category) ? styles.featuredCategorySelected : styles.featuredCategory}
              onPress={() => handleCategoryPress(category)}
            >
              <Text style={styles.featuredCategoryText}>{category}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}