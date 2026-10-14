import { router } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Article } from '../data/articles';

export default function ArticleItem({ article }: { article: Article }) {
  return (
    <Pressable
      style={styles.card}
      accessibilityRole="button"
      onPress={() => router.push({ pathname: '/(tabs)/(home)/[id]', params: { id: article.id } })}
    >
      <Text style={styles.category}>{article.category}</Text>
      <Text style={styles.title}>{article.title}</Text>
      <Text>Read article</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { padding: 18, marginBottom: 12, backgroundColor: 'white', borderRadius: 8, borderWidth: 1, borderColor: '#dddddd' },
  category: { color: '#2457a7', marginBottom: 6 },
  title: { fontSize: 19, fontWeight: 'bold', marginBottom: 8 },
});
