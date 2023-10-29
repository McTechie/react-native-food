// named imports
import { useRef } from 'react';
import { View, Text, Image, FlatList, Pressable, ScrollView } from 'react-native';
import { menuScreenStyles as styles } from '../../styles/menuScreen';
import { useMenuStore } from '../../stores/menuStore';
import { MENU_ITEMS } from '../../constants/menuItems';

// default imports
import Hero from './Hero'
import Featured from './Featured'

export default function ItemListing({ navigation }) {
  const {
    activeCategories,
    searchBarText,
  } = useMenuStore(state => ({
    activeCategories: state.activeCategories,
    searchBarText: state.searchBarText,
  }));
  
  const ref = useRef(null);

  const filteredMenuItems = MENU_ITEMS.filter((item) => {
    if (activeCategories.length === 0) {
      return true;
    } else {
      return item.categories.some((category) => activeCategories.includes(category));
    }
  }).filter((item) => item.title.toLowerCase().includes(searchBarText.toLowerCase()));

  return (
    <View>
      <FlatList
        data={filteredMenuItems}
        nestedScrollEnabled={true}
        ItemSeparatorComponent={() => <View style={styles.itemListingSeparator} />}
        ListHeaderComponent={() => (
          <ScrollView ref={ref} nestedScrollEnabled={true}>
            <Hero />
            <Featured scrollViewRef={ref} />
          </ScrollView>
        )}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('ItemDescription', { item })}
            key={item.title}
            style={styles.itemListingContainer}
          >
            <View style={styles.itemListing}>
              <View style={styles.itemListingText}>
                <Text style={styles.itemListingTitle}>{item.title}</Text>
                <Text style={styles.itemListingDescription}>{item.description}</Text>
                <Text style={styles.itemListingPrice}>${item.price}</Text>
              </View>
              <Image source={item.img} style={styles.itemListingImg} />
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  )
}