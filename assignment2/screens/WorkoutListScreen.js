import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WorkoutCard from '../components/WorkoutCard';

const CATEGORIES = ['All', 'Gym', 'Yoga', 'Cardio', 'Strength'];

const WORKOUTS = [
  {
    id: '1',
    title: 'Full Body HIIT Workout',
    duration: '25 mins',
    calories: '320 kcal',
    category: 'Cardio',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=300&auto=format&fit=crop',
    description: 'A high-intensity interval training designed to burn fat and build cardiovascular endurance rapidly. Includes jumping jacks, burpees, and high knees.',
    exercises: [
      { name: 'Jumping Jacks', reps: '3 sets of 45 sec' },
      { name: 'Burpees', reps: '3 sets of 12 reps' },
      { name: 'High Knees', reps: '3 sets of 45 sec' },
      { name: 'Mountain Climbers', reps: '3 sets of 30 sec' },
      { name: 'Plank Jacks', reps: '3 sets of 45 sec' },
    ]
  },
  {
    id: '2',
    title: 'Core Strength Builder',
    duration: '20 mins',
    calories: '180 kcal',
    category: 'Strength',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=300&auto=format&fit=crop',
    description: 'Focuses entirely on strengthening your abs, obliques, and lower back for improved stability and posture. Perfect for all fitness levels.',
    exercises: [
      { name: 'Abdominal Crunches', reps: '4 sets of 15 reps' },
      { name: 'Russian Twists', reps: '4 sets of 20 reps' },
      { name: 'Bicycle Crunches', reps: '4 sets of 20 reps' },
      { name: 'Plank Hold', reps: '4 sets of 60 sec' },
      { name: 'Leg Raises', reps: '4 sets of 12 reps' },
    ]
  },
  {
    id: '3',
    title: 'Morning Yoga Flow',
    duration: '30 mins',
    calories: '120 kcal',
    category: 'Yoga',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=300&auto=format&fit=crop',
    description: 'Start your morning with mindfulness and gentle stretching. This yoga routine boosts flexibility, joint mobility, and mental clarity.',
    exercises: [
      { name: 'Sun Salutation A', reps: '3 rounds' },
      { name: 'Warrior I & II', reps: '5 breaths per side' },
      { name: 'Downwards Dog', reps: '5 breaths' },
      { name: 'Triangle Pose', reps: '5 breaths per side' },
      { name: 'Child\'s Pose', reps: '2 mins rest' },
    ]
  },
  {
    id: '4',
    title: 'Barbell Squat Mastery',
    duration: '45 mins',
    calories: '400 kcal',
    category: 'Gym',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=300&auto=format&fit=crop',
    description: 'A heavy lifting gym session targeting your quadriceps, hamstrings, and glutes. Build muscle strength and improve athletic performance.',
    exercises: [
      { name: 'Warm-up Bodyweight Squats', reps: '2 sets of 15 reps' },
      { name: 'Barbell Back Squats', reps: '4 sets of 8 reps' },
      { name: 'Leg Press', reps: '3 sets of 10 reps' },
      { name: 'Dumbbell Walking Lunges', reps: '3 sets of 12 steps' },
      { name: 'Calf Raises', reps: '4 sets of 15 reps' },
    ]
  },
  {
    id: '5',
    title: 'Fat Blasting Cardio Session',
    duration: '35 mins',
    calories: '380 kcal',
    category: 'Cardio',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=300&auto=format&fit=crop',
    description: 'Boost your metabolism and burn calories with this bodyweight cardio challenge. High energy, fast transitions, and absolute fun.',
    exercises: [
      { name: 'Jump Squats', reps: '3 sets of 15 reps' },
      { name: 'Sprints', reps: '5 sets of 100m' },
      { name: 'Shadow Boxing', reps: '3 sets of 2 mins' },
      { name: 'Butt Kicks', reps: '3 sets of 45 sec' },
      { name: 'Cool Down Walk', reps: '5 mins' },
    ]
  },
  {
    id: '6',
    title: 'Flexibility & Deep Stretch',
    duration: '15 mins',
    calories: '80 kcal',
    category: 'Yoga',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=300&auto=format&fit=crop',
    description: 'A quick recovery routine designed to release tension from tight muscles. Perfect to perform after a heavy lift or a long workday.',
    exercises: [
      { name: 'Seated Forward Fold', reps: '1 min hold' },
      { name: 'Pigeon Pose', reps: '1 min per side' },
      { name: 'Cobra Stretch', reps: '45 sec hold' },
      { name: 'Butterfly Stretch', reps: '1 min hold' },
      { name: 'Corpse Pose (Savasana)', reps: '3 mins rest' },
    ]
  }
];

export default function WorkoutListScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWorkouts = WORKOUTS.filter(workout => {
    const matchesCategory = selectedCategory === 'All' || workout.category === selectedCategory;
    const matchesSearch = workout.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      
      {/* Header section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greetingText}>Hello, Champ 👋</Text>
          <Text style={styles.titleText}>Find Your Workout</Text>
        </View>
        <TouchableOpacity style={styles.profileButton} activeOpacity={0.7}>
          <Ionicons name="person-circle-outline" size={36} color="#1F2937" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#9CA3AF" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search workouts..."
          placeholderTextColor="#9CA3AF"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery !== '' && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={18} color="#9CA3AF" style={styles.clearIcon} />
          </TouchableOpacity>
        )}
      </View>

      {/* Categories Horizontal List */}
      <View style={styles.categoryContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.categoryList}
          renderItem={({ item }) => {
            const isActive = selectedCategory === item;
            return (
              <TouchableOpacity
                onPress={() => setSelectedCategory(item)}
                style={[styles.categoryChip, isActive && styles.activeCategoryChip]}
                activeOpacity={0.8}
              >
                <Text style={[styles.categoryText, isActive && styles.activeCategoryText]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Workout list */}
      <FlatList
        data={filteredWorkouts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.workoutList}
        renderItem={({ item }) => (
          <WorkoutCard
            image={item.image}
            title={item.title}
            duration={item.duration}
            calories={item.calories}
            onPress={() => navigation.navigate('WorkoutDetails', { workout: item })}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="alert-circle-outline" size={48} color="#9CA3AF" />
            <Text style={styles.emptyText}>No workouts found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  greetingText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  titleText: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1F2937',
    marginTop: 4,
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 14,
    paddingHorizontal: 12,
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#1F2937',
    height: '100%',
  },
  clearIcon: {
    marginLeft: 4,
  },
  categoryContainer: {
    marginBottom: 16,
  },
  categoryList: {
    paddingHorizontal: 20,
  },
  categoryChip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  activeCategoryChip: {
    backgroundColor: '#1F2937',
    borderColor: '#1F2937',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
  },
  activeCategoryText: {
    color: '#FFFFFF',
  },
  workoutList: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 8,
    fontWeight: '500',
  },
});
