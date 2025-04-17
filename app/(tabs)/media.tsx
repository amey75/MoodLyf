import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';

const natureSounds = [
  { id: 1, title: 'Ocean Waves', icon: '🌊' },
  { id: 2, title: 'Forest Birds', icon: '🦜' },
  { id: 3, title: 'Rain', icon: '🌧' },
  { id: 4, title: 'Creek', icon: '💧' },
];

const recommendedSongs = [
  { id: 1, title: 'Peaceful Piano', artist: 'Relaxing Music', cover: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0' },
  { id: 2, title: 'Meditation Flow', artist: 'Mindfulness', cover: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17' },
];

export default function MediaScreen() {
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function playSound() {
    if (sound) {
      await sound.unloadAsync();
    }
    
    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: 'https://example.com/nature-sounds/ocean.mp3' },
      { shouldPlay: true }
    );
    
    setSound(newSound);
    setPlaying(true);
  }

  async function stopSound() {
    if (sound) {
      await sound.stopAsync();
      setPlaying(false);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Media</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nature Sounds</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {natureSounds.map((sound) => (
            <TouchableOpacity
              key={sound.id}
              style={styles.soundCard}
              onPress={playing ? stopSound : playSound}>
              <Text style={styles.soundIcon}>{sound.icon}</Text>
              <Text style={styles.soundTitle}>{sound.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommended Songs</Text>
        {recommendedSongs.map((song) => (
          <TouchableOpacity key={song.id} style={styles.songCard}>
            <Image source={{ uri: song.cover }} style={styles.songCover} />
            <View style={styles.songInfo}>
              <Text style={styles.songTitle}>{song.title}</Text>
              <Text style={styles.songArtist}>{song.artist}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sports Highlights</Text>
        <TouchableOpacity style={styles.highlightCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2' }}
            style={styles.highlightImage}
          />
          <Text style={styles.highlightTitle}>Best Moments 2024</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b1e',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'Inter-SemiBold',
    marginTop: 40,
    marginBottom: 30,
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
  soundCard: {
    backgroundColor: '#2c2d31',
    padding: 20,
    borderRadius: 16,
    marginRight: 15,
    alignItems: 'center',
    width: 120,
  },
  soundIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  soundTitle: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
  songCard: {
    flexDirection: 'row',
    backgroundColor: '#2c2d31',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 10,
  },
  songCover: {
    width: 60,
    height: 60,
  },
  songInfo: {
    padding: 10,
    flex: 1,
  },
  songTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  songArtist: {
    color: '#71717a',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  highlightCard: {
    backgroundColor: '#2c2d31',
    borderRadius: 16,
    overflow: 'hidden',
  },
  highlightImage: {
    width: '100%',
    height: 200,
  },
  highlightTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    padding: 15,
  },
});