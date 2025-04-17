import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function JournalScreen() {
  const [entry, setEntry] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal</Text>

      <View style={styles.promptContainer}>
        <Text style={styles.promptTitle}>Today's Prompt</Text>
        <Text style={styles.promptText}>
          What made you smile today? Write about a moment that brought joy to your day.
        </Text>
      </View>

      <View style={styles.editorContainer}>
        <TextInput
          style={styles.editor}
          multiline
          placeholder="Start writing here..."
          placeholderTextColor="#71717a"
          value={entry}
          onChangeText={setEntry}
        />
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Entry</Text>
      </TouchableOpacity>

      <ScrollView style={styles.previousEntries}>
        <Text style={styles.sectionTitle}>Previous Entries</Text>
        <TouchableOpacity style={styles.entryCard}>
          <Text style={styles.entryDate}>March 15, 2024</Text>
          <Text style={styles.entryPreview}>Today was a wonderful day...</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.entryCard}>
          <Text style={styles.entryDate}>March 14, 2024</Text>
          <Text style={styles.entryPreview}>I learned something new...</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
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
    marginBottom: 20,
  },
  promptContainer: {
    backgroundColor: '#2c2d31',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  promptTitle: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 10,
  },
  promptText: {
    color: '#a1a1aa',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    lineHeight: 24,
  },
  editorContainer: {
    backgroundColor: '#2c2d31',
    borderRadius: 12,
    marginBottom: 20,
    height: 200,
  },
  editor: {
    color: '#fff',
    padding: 15,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    textAlignVertical: 'top',
    height: '100%',
  },
  saveButton: {
    backgroundColor: '#7c3aed',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  previousEntries: {
    flex: 1,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 15,
  },
  entryCard: {
    backgroundColor: '#2c2d31',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  entryDate: {
    color: '#7c3aed',
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 5,
  },
  entryPreview: {
    color: '#a1a1aa',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
});