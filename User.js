import React from "react";
import { Text, View } from "react-native";
import { Card, Image } from "@rneui/themed";

export default function User(props) {
  console.log(props);

  const usuario = props.route.params.usuario;

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Card>
        <Image
          style={{ width: "100%", height: 100 }}
          resizeMode="contain"
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/5220/5220361.png",
          }}
        />
        <Text h2>{usuario.name}</Text>
        <Text h5>{usuario.username}</Text>
        <Text h5>{usuario.email}</Text>
        <Card.Divider />
        <Text h5>
          Address: {usuario.address.street} {usuario.address.suite}{" "}
          {usuario.address.city}
        </Text>
        <Text h5>ZipCode: {usuario.address.zipcode}</Text>
        <Text h5>Phone: {usuario.phone}</Text>
        <Text h5>Website: {usuario.website}</Text>
        <Card.Divider />
        <Text h4>{usuario.company.name}</Text>
        <Text h5>{usuario.company.catchPhrase}</Text>
        <Text h5>{usuario.company.bs}</Text>
      </Card>
    </View>
  );
}
