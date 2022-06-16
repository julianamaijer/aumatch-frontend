import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import FilterScreen from "./screens/FilterScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen"

const TabNavigator = createMaterialTopTabNavigator(
{
	Home: {
	screen: HomeScreen,
	navigationOptions: {
		tabBarLabel: "Início",
		showLabel: ({ focused }) => {
		console.log(focused);
		return focused ? true : false;
		},
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="home"
			size={tabInfo.focused ? 26 : 23}
			color={tabInfo.focused ? "#00ced1" : "black"}
		/>
		),
	},
	},
	Filter: {
	screen: FilterScreen,
	navigationOptions: {
		tabBarLabel: "Filtrar",
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="filter"
			size={tabInfo.focused ? 26 : 23}
			color={tabInfo.focused ? "#00ced1" : "black"}
		/>
		),
	},
	},
	Search: {
		screen: SearchScreen,
		navigationOptions: {
			tabBarLabel: "",
			tabBarIcon: (tabInfo) => (
			<Ionicons
				name="search"
				size={tabInfo.focused ? 26 : 23}
				color={tabInfo.focused ? "#00ced1" : "black"}
			/>
			),
		},
		},
	Chat: {
		screen: ChatScreen,
		navigationOptions: {
			tabBarLabel: "Busque o pet!",
			tabBarIcon: (tabInfo) => (
			<Ionicons
				name="chatbubble-ellipses"
				size={tabInfo.focused ? 26 : 23}
				color={tabInfo.focused ? "#00ced1" : "black"}
			/>
			),
		},
		},
	Profile: {
		screen: ProfileScreen,
		navigationOptions: {
			tabBarLabel: "Busque o pet!",
			tabBarIcon: (tabInfo) => (
			<Ionicons
				name="person-circle"
				size={tabInfo.focused ? 26 : 23}
				color={tabInfo.focused ? "#00ced1" : "black"}
			/>
			),
		},
		},
},
{
	tabBarOptions: {
	showIcon: true,

	style: {
		backgroundColor: "white",
		marginTop: 40,
		height: 70,
		shadowColor: '#000',
	},
	},
}
);

const Navigator = createAppContainer(TabNavigator);

export default function App() {
return (
	<Navigator>
	<HomeScreen />
	</Navigator>
);
}
