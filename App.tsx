import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MockData from "./data/mockData.js";

const renderMovies = () => {
  return MockData.map((movie: any, index: number) => {
    return <Text key={index}>{movie.title}</Text>;
  });
};

export default function App() {
  return (
    <View style={styles.container}>
      {renderMovies()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
