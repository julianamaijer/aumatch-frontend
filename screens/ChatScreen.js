import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Chat = () => {
return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
	<Text style={{ color: "#00ced1", fontSize: 40 }}>Home Screen!</Text>
	<Ionicons name="ios-person-circle-outline" size={80} color="#00ced1" />
	</View>
);
};

export default Chat;
