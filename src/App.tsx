import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MockData from "../data/mockData.js";
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

const renderMovies = () => {
  return MockData.map((movie: any, index: number) => {
    return (
      <Text style={{ display: 'flex', alignSelf: "stretch", flexDirection: "row", justifyContent: 'space-between'}}>
        <Text >{movie.title}</Text>
        <Text style={{ marginLeft: 10}} >
          {movie.vote_average}
        </Text>
      </Text>
    );
  });
};

export default function App() {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Right>
          <Body>
            <Title>Header</Title>
          </Body>
        </Right>
      </Header>
      <Content contentContainerStyle={styles.container}>
        <View style={styles.container}><BarChart /></View>
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
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
});
