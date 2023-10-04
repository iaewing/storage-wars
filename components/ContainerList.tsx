import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Container from './Container';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'Container 1' },
          { key: 'Container 2' },
          { key: 'Container 3' },
          { key: 'Container 4' },
        ]}
        renderItem={({ item }) => (<Container {item.key} />)}
      />
    </View>


  );
};

export default FlatListBasics;
