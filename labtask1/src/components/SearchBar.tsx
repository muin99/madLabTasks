import { StyleSheet, TextInput } from 'react-native';

type SearchBarProps = {
  query: string;
  onChangeQuery: (text: string) => void;
};

// Defined outside ArticleList so typing does not recreate the component.
export default function SearchBar({ query, onChangeQuery }: SearchBarProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search articles by title"
      accessibilityLabel="Search articles by title"
      value={query}
      onChangeText={onChangeQuery}
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
}

const styles = StyleSheet.create({
  input: { padding: 14, marginBottom: 16, borderWidth: 1, borderColor: '#999999', borderRadius: 8, backgroundColor: 'white', fontSize: 16 },
});
