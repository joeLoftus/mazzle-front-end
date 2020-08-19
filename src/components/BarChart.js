import React, { useEffect, useState } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import Colors from "../styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { StackedBarChart } from "react-native-chart-kit";

const maxValues = 3;
const titleLength = 18;
const width = 320;
const height = 240;

function BarGraph({ data }) {
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      setLabels(
        data.slice(0, maxValues).map((entry) => {
          if (entry.title.length > titleLength) {
            return entry.title.substring(0, titleLength - 3) + "...";
          }
          return entry.title;
        })
      );

      setValues(
        data.slice(0, maxValues).map((entry) => {
          return [parseFloat(entry.vote_average)];
        })
      );
    } else {
      setLabels([]);
      setValues([]);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        IMDb Ratings for Historically Great Movies Currently in Theaters
      </Text>
      {data.length > 0 ? (
        <StackedBarChart
          data={{
            labels: labels,
            data: values,
            barColors: [Colors.tertiary],
          }}
          width={width * 1.5}
          height={height}
          fromZero
          chartConfig={{
            backgroundGradientFrom: Colors.secondary,
            backgroundGradientTo: Colors.secondary,
            decimalPlaces: 1,
            color: () => Colors.primary,
            labelColor: () => "#000",
            style: {
              marginVertical: 8,
              borderRadius: 16,
            },
            propsForBackgroundLines: {
              strokeWidth: "0",
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      ) : (
        <Text style={styles.emptyChartText}>
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            style={styles.emptyIcon}
            color={Colors.error}
          />
          We're sorry. We are unable to load data for this chart.
        </Text>
      )}
    </View>
  );
}

export default BarGraph;

const styles = StyleSheet.create({
  title: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
    textAlign: "center",
  },
  container: {
    maxWidth: width,
  },
  emptyChartText: {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    textAlign: "center",
    fontSize: 12,
    color: Colors.error,
  },
  emptyIcon: {
    marginRight: 4,
  },
});
