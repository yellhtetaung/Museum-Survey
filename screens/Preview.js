import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "@rneui/themed";
import Button from "../components/Button";

const Preview = ({ navigation, route }) => {
  const person = route.params.person;

  return (
    <View style={styles.container}>
      <Card
        containerStyle={{
          width: "35%",
          borderRadius: 20,
          elevation: 10,

          padding: 30,
        }}
      >
        <Card.FeaturedTitle style={{ color: "#000" }}>
          Person Infomation
        </Card.FeaturedTitle>

        <Card.Divider />
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Card.Image
            source={{ uri: route.params.image }}
            style={{
              width: 200,
              height: 200,
            }}
          />
        </View>
        <Card.Divider />

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>Name: </Text>
          <Text style={styles.cardText}>{person.name}</Text>
        </View>
        <Card.Divider />

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>Phone: </Text>
          <Text style={styles.cardText}>{person.phone}</Text>
        </View>
        <Card.Divider />

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>Orgnization: </Text>
          <Text style={styles.cardText}>{person.orgnization}</Text>
        </View>
        <Card.Divider />

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>NRC: </Text>
          <Text style={styles.cardText}>{person.nrc}</Text>
        </View>

        <Card.Divider />
        <View style={styles.cardBody}>
          <Text style={styles.cardText}>Address: </Text>
          <Text style={styles.cardText}>{person.address}</Text>
        </View>

        <Card.Divider />
        <View style={styles.cardBody}>
          <Text style={styles.cardText}>City: </Text>
          <Text style={styles.cardText}>{person.city}</Text>
        </View>

        <Card.Divider />
        <View style={styles.cardBody}>
          <Text style={styles.cardText}>Country: </Text>
          <Text style={styles.cardText}>{person.country}</Text>
        </View>
      </Card>

      <View
        style={{
          flex: 1,
          flexDirection: "row",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          title="Pervious"
          style={{ marginHorizontal: 40 }}
          onPress={() => navigation.goBack()}
        />
        <Button title="Submit" style={{ marginHorizontal: 40 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Preview;
