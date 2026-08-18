import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WorkoutDetailsScreen({ route, navigation }) {
  const { workout } = route.params;
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleWorkoutStatus = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Hero Image Container */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: workout.image }} style={styles.heroImage} />
          <View style={styles.overlay} />
          
          {/* Custom Header Over Image */}
          <View style={styles.headerButtons}>
            <TouchableOpacity 
              style={styles.circleButton} 
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
            >
              <Ionicons name="arrow-back" size={22} color="#1F2937" />
            </TouchableOpacity>
            
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryBadgeText}>{workout.category}</Text>
            </View>
          </View>
        </View>

        {/* Content Container */}
        <View style={styles.contentCard}>
          {/* Workout Header Info */}
          <Text style={styles.title}>{workout.title}</Text>
          
          {/* Stats Bar */}
          <View style={styles.statsBar}>
            <View style={styles.statBox}>
              <Ionicons name="time-outline" size={20} color="#3B82F6" />
              <Text style={styles.statValue}>{workout.duration}</Text>
              <Text style={styles.statLabel}>Duration</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Ionicons name="flame-outline" size={20} color="#EF4444" />
              <Text style={styles.statValue}>{workout.calories}</Text>
              <Text style={styles.statLabel}>Calories</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Ionicons name="fitness-outline" size={20} color="#10B981" />
              <Text style={styles.statValue}>{workout.exercises.length}</Text>
              <Text style={styles.statLabel}>Exercises</Text>
            </View>
          </View>

          {/* Description Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.descriptionText}>{workout.description}</Text>
          </View>

          {/* Exercises Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Workout Plan</Text>
            {workout.exercises.map((exercise, index) => (
              <View key={index} style={styles.exerciseCard}>
                <View style={styles.exerciseIndexContainer}>
                  <Text style={styles.exerciseIndex}>{index + 1}</Text>
                </View>
                <View style={styles.exerciseInfo}>
                  <Text style={styles.exerciseName}>{exercise.name}</Text>
                  <Text style={styles.exerciseReps}>{exercise.reps}</Text>
                </View>
                <Ionicons name="checkmark-circle-outline" size={20} color="#D1D5DB" />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Sticky Bottom Action Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          onPress={toggleWorkoutStatus}
          style={[
            styles.actionButton,
            isCompleted ? styles.completedButton : styles.startButton
          ]}
          activeOpacity={0.8}
        >
          <Ionicons 
            name={isCompleted ? "checkmark-circle" : "play-circle"} 
            size={22} 
            color="#FFFFFF" 
            style={styles.buttonIcon} 
          />
          <Text style={styles.actionButtonText}>
            {isCompleted ? 'Completed' : 'Start Workout'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContainer: {
    paddingBottom: 100, // Make sure we have space for the sticky bottom bar
  },
  imageContainer: {
    height: 280,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.25)', // Subtle darkening to see navigation buttons clearly
  },
  headerButtons: {
    position: 'absolute',
    top: 48,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryBadge: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  categoryBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  contentCard: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -24,
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 20,
  },
  statsBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 6,
    elevation: 1,
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: 6,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
    fontWeight: '500',
  },
  statDivider: {
    width: 1,
    height: 32,
    backgroundColor: '#E5E7EB',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
  },
  exerciseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  exerciseIndexContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  exerciseIndex: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4B5563',
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
  },
  exerciseReps: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
  },
  actionButton: {
    flexDirection: 'row',
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  startButton: {
    backgroundColor: '#1F2937',
  },
  completedButton: {
    backgroundColor: '#10B981',
  },
  buttonIcon: {
    marginRight: 8,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
