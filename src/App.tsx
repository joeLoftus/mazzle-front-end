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
  Button
} from "native-base";
import BarChart from "./components/BarChart";
import Colors from "./styles/colors";
import { dataUrl, englishDataUrl } from "./data/constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [englishOnly, setEnglishOnly] = useState(false);

  useEffect(() => {
    console.log(englishOnly);
    fetch(englishOnly ? englishDataUrl :dataUrl)
      .then((res) => {
        console.log(res);
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
  }, [englishOnly]);

  return (
    <Container>
      <Header style={styles.header}>
        <Left>
          <Title style={styles.title}>Mazzle</Title>
        </Left>
        <Right>
          <Button transparent onPress={() => setEnglishOnly(!englishOnly)} >
            <FontAwesomeIcon icon={faLanguage} color={Colors.primary} />
          </Button>
        </Right>
      </Header>
      <Content contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <BarChart data={items} />
        </View>
      </Content>
      <Footer style={styles.footer} />
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
    borderBottomColor: Colors.gray,
    backgroundColor: Colors.secondary,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    color: Colors.primary
  },
  footer: {
    borderTopColor: Colors.gray,
    backgroundColor: Colors.secondary,
    borderTopWidth: 1,
    borderStyle: 'solid',
    color: Colors.primary
  },
  title: {
    color: Colors.primary
  }
});
