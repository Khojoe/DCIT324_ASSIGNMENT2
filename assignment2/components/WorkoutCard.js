import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WorkoutCard({ image, title, duration, calories, onPress }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Image source={{ uri: image }} style={styles.image} />
      
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Ionicons name="time-outline" size={14} color="#6B7280" />
            <Text style={styles.statText}>{duration}</Text>
          </View>
          
          <View style={styles.statDivider} />
          
          <View style={styles.statItem}>
            <Ionicons name="flame-outline" size={14} color="#EF4444" />
            <Text style={styles.statText}>{calories}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.favoriteButton} 
        onPress={toggleFavorite}
        activeOpacity={0.7}
      >
        <Ionicons 
          name={isFavorite ? "heart" : "heart-outline"} 
          size={20} 
          color={isFavorite ? "#EF4444" : "#9CA3AF"} 
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 16,
    paddingRight: 32, // Prevent overlap with favorite button
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
    lineHeight: 22,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 13,
    color: '#6B7280',
    marginLeft: 4,
    fontWeight: '500',
  },
  statDivider: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 8,
  },
  favoriteButton: {
    position: 'absolute',
    right: 12,
    top: 12,
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
});
