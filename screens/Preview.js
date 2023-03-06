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
        <Card.FeaturedTitle
          style={{
            textAlign: "center",
          }}
        >
          <Text
            style={{
              color: "#000",
              fontFamily: "black",
            }}
          >
            Personal Information
          </Text>
        </Card.FeaturedTitle>

        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 1,
            borderTopWidth: 1,
            paddingVertical: 15,
          }}
        >
          <Card.Image
            source={{ uri: route.params.image }}
            style={{
              width: 200,
              height: 200,
              borderRadius: 20,
            }}
          />
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>Name: </Text>
          <Text style={styles.cardText2}>{person.name}</Text>
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>Phone: </Text>
          <Text style={styles.cardText2}>{person.phone}</Text>
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>Orgnization: </Text>
          <Text style={styles.cardText2}>{person.orgnization}</Text>
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>NRC: </Text>
          <Text style={styles.cardText2}>{person.nrc}</Text>
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>Address: </Text>
          <Text style={styles.cardText2}>{person.address}</Text>
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>City: </Text>
          <Text style={styles.cardText2}>{person.city}</Text>
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.cardText}>Country: </Text>
          <Text style={styles.cardText2}>{person.country}</Text>
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
          title="back"
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
    borderBottomWidth: 1,
    paddingVertical: 8,
  },

  cardText: {
    width: "40%",
    fontSize: 20,
    fontFamily: "bold",
  },

  cardText2: {
    width: "60%",
    fontSize: 18,
  },
});

export default Preview;
