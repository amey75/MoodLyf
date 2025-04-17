import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function HistoryScreen() {
  const moodData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [3, 2, 4, 3, 5, 4, 4],
        color: (opacity = 1) => `rgba(124, 58, 237, ${opacity})`,
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mood History</Text>
      
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Weekly Mood Trend</Text>
        <LineChart
          data={moodData}
          width={350}
          height={200}
          chartConfig={{
            backgroundColor: '#1a1b1e',
            backgroundGradientFrom: '#1a1b1e',
            backgroundGradientTo: '#1a1b1e',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statTitle}>Mood Uplifter Score</Text>
          <Text style={styles.statValue}>78%</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statTitle}>Most Common Mood</Text>
          <Text style={styles.statValue}>😊</Text>
        </View>
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
  chartContainer: {
    backgroundColor: '#2c2d31',
    padding: 15,
    borderRadius: 16,
    marginBottom: 20,
  },
  chartTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Inter-Regular',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: '#2c2d31',
    padding: 20,
    borderRadius: 16,
    width: '48%',
    alignItems: 'center',
  },
  statTitle: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
  statValue: {
    color: '#7c3aed',
    fontSize: 24,
    fontFamily: 'Inter-SemiBold',
  },
});