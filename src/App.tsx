import React from "react";
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

export default function App() {
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
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: Colors.primary,
    color: Colors.secondary,
  },
});
