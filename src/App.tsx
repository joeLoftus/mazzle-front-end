import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  Left,
  Right,
} from "native-base";
import BarChart from "./components/BarChart";
import Colors from "./styles/colors";
import { dataUrl, englishDataUrl } from "./data/constants";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(dataUrl)
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          console.log(error);
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <Container>
      <Header style={styles.header}>
        <Left>
          <Title style={styles.header}>Mazzle</Title>
        </Left>
        <Right>
          {/* <Button transparent>
            <Icon name="settings" />
          </Button> */}
        </Right>
      </Header>
      <Content contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <BarChart data={items} />
        </View>
      </Content>
      <Footer style={styles.header} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: Colors.primary,
  },
});
