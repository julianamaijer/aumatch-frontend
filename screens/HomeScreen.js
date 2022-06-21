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
	<Text style ={{fontSize: 20, borderLeftWidth: 10, borderTopWidth: 10, borderRightWidth: 10, textAlign: 'justify'}}>O AuMatch é um aplicativo criado com o objetivo de auxiliar os futuros adotantes a darem o match perfeito com seu futuro animalzinho de estimação!</Text>
	</View>
);
};

export default Home;
