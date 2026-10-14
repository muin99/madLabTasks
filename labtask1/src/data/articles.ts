export type Article = {
  id: string;
  title: string;
  category: string;
  body: string;
};

// Sample articles for the lab. No internet connection is needed to read them.
export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Students Learn React Native',
    category: 'Technology',
    body: 'Students are learning to build mobile apps with React Native. They can use components such as Text, View, and Button to create a screen.\n\nExpo makes it easier to run the app on a phone. With practice, students can build their own small projects.',
  },
  {
    id: '2',
    title: 'University Opens a Reading Club',
    category: 'Education',
    body: 'A university reading club is welcoming new members. Students can meet each week to discuss their favourite books.\n\nThe club helps students share ideas and develop a regular reading habit.',
  },
  {
    id: '3',
    title: 'Local Team Wins Football Match',
    category: 'Sports',
    body: 'A local football team won a friendly match after weeks of practice. Both teams played well and showed good teamwork.\n\nThe players thanked their coach and supporters after the match.',
  },
  {
    id: '4',
    title: 'Volunteers Plant Trees in Dhaka',
    category: 'Environment',
    body: 'A group of volunteers planted trees in their neighbourhood in Dhaka. They also cleaned the area and watered the new plants.\n\nThe volunteers plan to return each week to look after the trees.',
  },
  {
    id: '5',
    title: 'Simple Ways to Stay Healthy',
    category: 'Health',
    body: 'A balanced daily routine includes enough sleep, regular movement, and time for meals. Small habits can be easier to maintain than sudden changes.\n\nStudents can begin by taking short walks and making time to rest between study sessions.',
  },
];
