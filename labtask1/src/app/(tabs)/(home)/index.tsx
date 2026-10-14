import { useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import ArticleItem from '../../../components/ArticleItem';
import SearchBar from '../../../components/SearchBar';
import { ARTICLES } from '../../../data/articles';

export default function ArticleList() {
  const [query, setQuery] = useState('');
  const filtered = ARTICLES.filter((article) =>
    article.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={filtered}
      keyboardShouldPersistTaps="handled"
      ListHeaderComponent={<SearchBar query={query} onChangeQuery={setQuery} />}
      ListEmptyComponent={<Text style={styles.empty}>No articles match your search</Text>}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ArticleItem article={item} />}
    />
  );
}

const styles = StyleSheet.create({
  list: { backgroundColor: '#f4f5f7' },
  content: { padding: 16, flexGrow: 1 },
  empty: { textAlign: 'center', marginTop: 40, fontSize: 16 },
});
