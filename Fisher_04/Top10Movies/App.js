import React from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MovieItem from './components/MovieItem'; 

const data = [
  { id: '1', title: 'Tekken Bloodline', poster: require('./assets/images/movie1.png'), rating: '10/10' },
  { id: '2', title: 'Tekken The Motion Picture', poster: require('./assets/images/movie2.png'), rating: '10/10' },
  { id: '3', title: 'Titanic', poster: require('./assets/images/movie3.jpg'), rating: '4.2/10' },
  { id: '4', title: 'Grown Ups 2', poster: require('./assets/images/movie4.jpg'), rating: '8.2/10' },
  { id: '5', title: 'Night Swim', poster: require('./assets/images/movie5.jpg'), rating: '0.01/10' },
  { id: '6', title: 'Spider Man (2002)', poster: require('./assets/images/movie6.jpg'), rating: '10/10' },
  { id: '7', title: 'Mortal Kombat (2021)', poster: require('./assets/images/movie7.jpg'), rating: '7.3/10' },
  { id: '8', title: 'Scary Movie', poster: require('./assets/images/movie8.jpg'), rating: '9/10' },
  { id: '9', title: 'Scream', poster: require('./assets/images/movie9.jpg'), rating: '8.8/10' },
  { id: '10', title: 'Shrek 2', poster: require('./assets/images/movie10.jpg'), rating: '8.5/10' },
];

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Top Ten Movies</Text>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.movieItemContainer}>
              <Image source={item.poster} style={styles.movieImage} />
              <View style={styles.movieDetails}>
                <Text style={styles.movieTitle}>{item.title}</Text>
                <Text style={styles.movieRating}>Rating: {item.rating}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    marginTop: 10,
  },
  movieItemContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  movieImage: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
    marginRight: 10,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  movieRating: {
    fontSize: 16,
  },
});

export default App;