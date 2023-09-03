import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailScreen = ({route, navigation}) => {
  const {post} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          testID="backButton"
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Post Details</Text>
      </View>
      <View style={{padding: 16}}>
        <Text style={styles.title}>Title:</Text>
        <Text style={styles.titleText}>{post.title}</Text>

        <Text style={styles.body}>Body:</Text>
        <Text style={styles.bodyText}>{post.body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498db',
    paddingVertical: 8,
  },
  backButton: {
    padding: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 8,
  },
  titleText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 16,
  },
  body: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498db',
    marginTop: 16,
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 16,
    color: '#555',
  },
});

export default DetailScreen;
