import React from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import mockData from "../data/mockData";
import Colors from "../styles/colors";

import { BarChart } from "react-native-chart-kit";

const maxValues = 8;

const labels = mockData.slice(0, maxValues).map((entry, index) => {
  return entry.title;
});

const values = mockData.slice(0, maxValues).map((entry, index) => {
  return entry.vote_average;
});

function BarGraph() {
  return (
    <View>
      <Text style={styles.title}>Great Releases vs IMDb Ratings</Text>
      <BarChart
        data={{
          labels: labels,
          datasets: [
            {
              data: values,
            },
          ],
        }}
        width={Dimensions.get("window").width/2} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#000",
          backgroundGradientFrom: Colors.secondary,
          backgroundGradientTo: Colors.secondary,
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => Colors.primary,
          labelColor: (opacity = 1) => Colors.text,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "0",
            strokeWidth: "0",
            stroke: "#ffa726",
          },
          propsForBackgroundLines: {
            strokeWidth: '0'
          }
        }}
        bezier
        style={{
          marginVertical: 8,
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
    marginBottom: 10
  },
});
