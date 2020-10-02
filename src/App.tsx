import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  Left,
  Right,
  Button,
} from "native-base";
import BarChart from "./components/BarChart";
import Colors from "./styles/colors";
import {
  dataUrl,
  englishDataUrl,
  contactEmail,
  graphTitle,
  graphTitleEnglishOnly,
} from "./data/constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLanguage, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [englishOnly, setEnglishOnly] = useState(true);
  const [showSupport, setShowSupport] = useState(false);
  const [bargraphTitle, setBargraphTitle] = useState(graphTitleEnglishOnly);

  useEffect(() => {
    englishOnly
      ? setBargraphTitle(graphTitleEnglishOnly)
      : setBargraphTitle(graphTitle);
    fetch(englishOnly ? englishDataUrl : dataUrl)
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
  }, [englishOnly]);

  return (
    <Container>
      <Header style={styles.header}>
        <Left>
          <Title style={styles.title} onPress={() => setShowSupport(false)}>
            Mazzle
          </Title>
        </Left>
        <Right>
          <Button transparent onPress={() => setEnglishOnly(!englishOnly)}>
            <FontAwesomeIcon
              icon={faLanguage}
              size={20}
              color={englishOnly ? Colors.error : Colors.primary}
            />
          </Button>
        </Right>
      </Header>
      <Content contentContainerStyle={styles.container}>
        <View style={styles.container}>
          {!showSupport && <BarChart data={items} title={bargraphTitle} />}
          {showSupport && (
            <Text style={styles.supportText}>
              Contact support at: {contactEmail}
            </Text>
          )}
        </View>
      </Content>
      <Footer style={styles.footer}>
        <Left></Left>
        <Right>
          <Button
            style={styles.footerRightButton}
            transparent
            onPress={() => setShowSupport(!showSupport)}
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              size={20}
              color={Colors.primary}
            />
          </Button>
        </Right>
      </Footer>
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
    borderStyle: "solid",
    color: Colors.primary,
  },
  footer: {
    borderTopColor: Colors.gray,
    backgroundColor: Colors.secondary,
    borderTopWidth: 1,
    borderStyle: "solid",
    color: Colors.primary,
  },
  footerRightButton: {
    paddingRight: 15,
  },
  title: {
    color: Colors.primary,
  },
  supportText: {
    fontWeight: "bold",
  },
});
