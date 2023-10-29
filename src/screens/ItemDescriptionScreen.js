// named imports
import { View, Text, Image, Pressable } from 'react-native'
import { itemDescScreenStyles as styles } from '../styles/itemDescScreen'
import { useMenuStore } from '../stores/menuStore'

export default function ItemDescriptionScreen({ route: { params: { item } } }) {
  const {
    addToCart,
  } = useMenuStore(state => ({
    addToCart: state.addToCart,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {item.title}:  ${item.price}
      </Text>

      <Image
        style={styles.image}
        source={item.img}
      />

      <Text style={styles.desc}>
        {item.description}
      </Text>

      <Text style={styles.sectionText}>
        Relish this delicacy as one of our:
      </Text>

      <View style={styles.sectionContainer}>
        {item.categories.map((category) => (
          <Text key={category} style={styles.sectionBadge}>
            {category}
          </Text>
        ))}
      </View>

      <Text style={styles.sectionText}>
        Ingredients you&apos;ll love:
      </Text>

      <View style={styles.sectionContainer}>  
        {item.ingredients.slice(0, 5).map((ingredient) => (
          <Text key={ingredient} style={styles.sectionBadgeAlt}>
            {ingredient}
          </Text>
        ))}

        {item.ingredients.length > 5 && (
          <Text style={styles.sectionBadgeAlt}>
            + {item.ingredients.length - 5} more
          </Text>
        )}
      </View>

      <View style={styles.actionContainer}>
        <Pressable
          onPress={() => addToCart(item)}
          style={styles.ctaContainerAlt}
        >
          <Text style={styles.ctaText}>
            Remove &#40;1&#41;
          </Text>
        </Pressable>

        <Pressable
          onPress={() => addToCart(item)}
          style={styles.ctaContainer}
        >
          <Text style={styles.ctaText}>
            Add to Cart &#40;1&#41;
          </Text>
        </Pressable>
      </View>
    </View>
  )
}