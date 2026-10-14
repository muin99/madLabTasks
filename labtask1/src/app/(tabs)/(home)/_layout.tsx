import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'NewsReader' }} />
      <Stack.Screen name="[id]" options={{ title: 'Article' }} />
    </Stack>
  );
}
