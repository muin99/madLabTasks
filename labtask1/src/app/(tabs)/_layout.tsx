import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#2457a7' }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'News',
          headerShown: false,
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 24 }}>▤</Text>,
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: 'Bookmarks',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 24 }}>★</Text>,
        }}
      />
    </Tabs>
  );
}
