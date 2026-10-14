import { FlatList, StyleSheet, Text } from 'react-native';
import ArticleItem from '../../components/ArticleItem';
import { useBookmarks } from '../../context/BookmarksContext';
import { ARTICLES } from '../../data/articles';

export default function Bookmarks() {
  const { bookmarkIds } = useBookmarks();
  const savedArticles = ARTICLES.filter((article) => bookmarkIds.includes(article.id));

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={savedArticles}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ArticleItem article={item} />}
      ListEmptyComponent={<Text style={styles.empty}>No bookmarks yet. Open an article to save it.</Text>}
    />
  );
}

const styles = StyleSheet.create({
  list: { backgroundColor: '#f4f5f7' },
  content: { padding: 16, flexGrow: 1 },
  empty: { textAlign: 'center', marginTop: 40, fontSize: 16 },
});
