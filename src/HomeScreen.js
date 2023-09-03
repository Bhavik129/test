import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import axios from 'axios';

export default function HomeScreen({navigation}) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isPaginating, setIsPaginating] = useState(false);
  const [error, setError] = useState(null); // Error state
  const flatListRef = useRef(null);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    try {
      if (page === 1) {
        setIsRefreshing(true);
        setError(null);
      } else {
        setIsPaginating(true);
      }

      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
      );
      setPosts(prevPosts =>
        page === 1 ? response.data : [...prevPosts, ...response.data],
      );
    } catch (error) {
      setError('Failed to fetch data');
    } finally {
      if (page === 1) {
        setIsRefreshing(false);
      } else {
        setIsPaginating(false);
      }
    }
  };

  const handleRefresh = () => {
    if (!isRefreshing) {
      setPage(1);
      setPosts([]);
      fetchPosts();
    }
  };

  const handleLoadMore = () => {
    if (!isPaginating && !isLoading) {
      setPage(prevPage => prevPage + 1);
    }
  };
  return (
    <View testID="HomeScreen" style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Recent Posts</Text>
      </View>

      <TouchableOpacity onPress={handleRefresh} style={styles.refreshButton}>
        <Text style={styles.refreshText}>Refresh</Text>
      </TouchableOpacity>

      {error && (
        <View testID="errorContainer" style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      <FlatList
        testID="postList"
        data={posts}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.postContainer}
            testID={`postItem-${item.id}`}
            onPress={() => navigation.navigate('Detail', {post: item})}>
            <Text style={styles.postTitle} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.postBody} numberOfLines={1}>
              {item.body}
            </Text>
          </TouchableOpacity>
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ref={flatListRef}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={['#3498db']}
            testID="refreshControl"
          />
        }
      />

      {isPaginating && (
        <ActivityIndicator style={styles.loader} size="large" color="#3498db" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  header: {
    backgroundColor: '#3498db',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  refreshButton: {
    backgroundColor: '#3498db',
    marginBottom: 10,
    paddingVertical: 5,
    borderTopWidth: 0.5,
  },
  refreshText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    padding: 16,
    elevation: 3,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  postBody: {
    fontSize: 14,
    color: '#777',
  },
  loader: {
    marginVertical: 16,
  },
  errorContainer: {
    backgroundColor: '#e74c3c',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  errorText: {
    color: '#fff',
    fontSize: 16,
  },
});
