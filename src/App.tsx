import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MockData from "./data/mockData.js";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
} from "native-base";
import BarChart from "./components/BarChart";
import Colors from "./styles/colors";

const renderMovies = () => {
  return MockData.map((movie: any, index: number) => {
    return (
      <Text
        style={{
          display: "flex",
          alignSelf: "stretch",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>{movie.title}</Text>
        <Text style={{ marginLeft: 10 }}>{movie.vote_average}</Text>
      </Text>
    );
  });
};

export default function App() {
  return (
    <Container>
      <Header  style={styles.header}>
        <Right>
        <Button transparent>
            <Icon name="settings" />
          </Button>
        </Right>
      </Header>
      <Content contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <BarChart />
        </View>
      </Content>
      <Footer style={styles.header} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: { backgroundColor: Colors.primary },
});
