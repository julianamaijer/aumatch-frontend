import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import FilterScreen from "./FilterScreen";
import ChatScreen from "./ChatScreen";

const TabNavigator = createMaterialTopTabNavigator(
{
	HomeScreen: {
	screen: HomeScreen,
	navigationOptions: {
		tabBarLabel: "",
		showLabel: ({ focused }) => {
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
		tabBarLabel: "",
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="filter"
			size={tabInfo.focused ? 26 : 23}
			color={tabInfo.focused ? "#00ced1" : "black"}
		/>
		),
	},
	},
	SearchScreen: {
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
	ChatScreen: {
		screen: ChatScreen,
		navigationOptions: {
			tabBarLabel: "",
			tabBarIcon: (tabInfo) => (
			<Ionicons
				name="chatbubble-ellipses"
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
		marginTop: 0,
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
