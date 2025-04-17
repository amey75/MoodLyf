import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import * as Notifications from 'expo-notifications';

const backgroundImages = [
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
  'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f',
];

const moods = ['😊 Happy', '😔 Sad', '😌 Calm', '😤 Angry', '😰 Anxious'];

function TodayScreen() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedMood, setSelectedMood] = useState('');
  const [fontsLoaded] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-SemiBold': Inter_600SemiBold,
  });

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      registerForPushNotificationsAsync();
      scheduleDailyNotification();
    }
  }, []);

  async function registerForPushNotificationsAsync() {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Please enable notifications to get daily mood check-ins!');
    }
  }

  async function scheduleDailyNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "How are you feeling today?",
        body: "Take a moment to check in with your mood",
      },
      trigger: {
        hour: 9,
        minute: 0,
        repeats: true,
      },
    });
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: backgroundImages[currentImageIndex] }}
        style={StyleSheet.absoluteFillObject}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.3)']}
        style={StyleSheet.absoluteFillObject}
      />
      
      <ScrollView style={styles.content}>
        <Text style={styles.title}>How are you feeling today?</Text>
        
        <View style={styles.moodGrid}>
          {moods.map((mood) => (
            <TouchableOpacity
              key={mood}
              style={[
                styles.moodButton,
                selectedMood === mood && styles.selectedMood,
              ]}
              onPress={() => setSelectedMood(mood)}>
              <Text style={styles.moodText}>{mood}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Start Breathing Exercise</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Begin Meditation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Listen to Nature Sounds</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'Inter-SemiBold',
    marginTop: 60,
    marginBottom: 30,
  },
  moodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  moodButton: {
    width: '48%',
    padding: 15,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedMood: {
    backgroundColor: 'rgba(124,58,237,0.3)',
    borderColor: '#7c3aed',
    borderWidth: 1,
  },
  moodText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 15,
  },
  actionButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
});
export default TodayScreen;