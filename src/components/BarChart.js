import React from "react";
import { Text, View, Dimensions } from "react-native";
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
      <Text>Bar Chart</Text>
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
          backgroundGradientFrom: Colors.primary,
          backgroundGradientTo: Colors.primary,
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
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
