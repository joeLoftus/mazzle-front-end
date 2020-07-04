import React from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import mockData from "../data/mockData";
import Colors from "../styles/colors";

import { BarChart } from "react-native-chart-kit";

const maxValues = 3;
const width = 320;
const height = 240;

const labels = mockData.slice(0, maxValues).map((entry, index) => {
  return entry.title;
});

const values = mockData.slice(0, maxValues).map((entry, index) => {
  return entry.vote_average;
});

function BarGraph() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IMDb Ratings for Historically Great Movies Currently in Theaters</Text>
      <BarChart
        data={{
          labels: labels,
          datasets: [
            {
              data: values,
            },
          ],
        }}
        width={width} // from react-native
        height={height}
        fromZero
        chartConfig={{
          backgroundGradientFrom: Colors.secondary,
          backgroundGradientTo: Colors.secondary,
          decimalPlaces: 1,
          color: () => Colors.primary,
          labelColor: () => Colors.text,
          style: {
            borderRadius: 16,
          },
          propsForBackgroundLines: {
            strokeWidth: '0'
          }
        }}
        style={{
          borderRadius: 16,
        }}
      />
    </View>
  );
}

export default BarGraph;

const styles = StyleSheet.create({
  title: {
    display: 'flex',
    justifyContent: "center",
    marginBottom: 10,
    textAlign: 'center',
  },
  container: {
    maxWidth: width
  }
});
