import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { BookmarksProvider } from '../context/BookmarksContext';

export default function RootLayout() {
  return (
    <BookmarksProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </BookmarksProvider>
  );
}
