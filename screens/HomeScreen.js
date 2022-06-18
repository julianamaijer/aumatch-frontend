import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const Home = () => {
return (
	<View style={{ flex: 1}}>
	<Text style={{ color: "#00ced1", fontSize: 30, borderTopWidth: 20, borderLeftWidth: 10 }}>
		AuMatch
		<Ionicons name="paw"
				size={18} color="#00ced1" />
	</Text>
	</View>
);
};

export default Home;
