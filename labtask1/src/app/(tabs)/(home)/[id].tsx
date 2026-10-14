import { router, Stack, useLocalSearchParams } from 'expo-router';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useBookmarks } from '../../../context/BookmarksContext';
import { ARTICLES } from '../../../data/articles';

export default function ArticleDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const article = ARTICLES.find((item) => item.id === id);
  const { bookmarkIds, toggleBookmark } = useBookmarks();

  if (!article) {
    return <Text style={styles.message}>Article not found</Text>;
  }

  const isBookmarked = bookmarkIds.includes(article.id);
  const index = ARTICLES.findIndex((item) => item.id === id);
  const nextArticle = ARTICLES[index + 1];

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: 'Article Detail' }} />
      <Text style={styles.category}>{article.category}</Text>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.body}>{article.body}</Text>
      <View style={styles.button}>
        <Button
          title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
          onPress={() => toggleBookmark(article.id)}
        />
      </View>
      <View style={styles.button}>
        {nextArticle ? (
          <Button
            title="Next article"
            onPress={() => router.replace({
              pathname: '/(tabs)/(home)/[id]',
              params: { id: nextArticle.id },
            })}
          />
        ) : (
          <Text style={styles.message}>You have reached the last article</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20 },
  category: { color: '#2457a7', marginBottom: 10 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  body: { fontSize: 18, lineHeight: 29 },
  button: { marginTop: 24 },
  message: { textAlign: 'center', padding: 24, fontSize: 16 },
});
