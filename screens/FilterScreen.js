import React, {useState} from "react";
import { Text, View, StyleSheet, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";


const Filter = () => {
	const [dogIsEnabled, setDogIsEnabled] = useState(false);
	const toggleDogSwitch = () => setDogIsEnabled(previousState => !previousState);

	const [catIsEnabled, setCatIsEnabled] = useState(false);
	const toggleCatSwitch = () => setCatIsEnabled(previousState => !previousState);

	const [size, setSize] = useState(['Pequeno', 'Médio', 'Grande'])
  
	const [isSelected, setSelection] = useState(false);

	return (
		
	  <View style={styles.container}>
		<Text style={{ color: "#00ced1", fontSize: 30, borderTopWidth: 20, borderLeftWidth: 10 }}>
			Pesquisar Pet
		<Ionicons name="paw"
			size={18} color="#00ced1" />
		</Text>
		<View style={styles.switchButtons}>
			<Text style={{ color: "grey", fontSize: 20, borderTopWidth: 20 }}>
				Cães
			</Text>
			<View style={{paddingLeft:30}}></View>
			<Text style={{ color: "grey", fontSize: 20, borderTopWidth: 20 }}>
				Gatos
			</Text>
		</View>
		<View style={styles.switchButtons}>
			<Switch
		  	trackColor={{ false: "#767577", true: "#00ced1" }}
		  	thumbColor={dogIsEnabled ? "#f4f3f4" : "#f4f3f4"}
		  	ios_backgroundColor="#3e3e3e"
		  	onValueChange={toggleDogSwitch}
		  	value={dogIsEnabled}
			/>
			<View style={{paddingLeft:30}}></View>
			<Switch
		  	trackColor={{ false: "#767577", true: "#00ced1" }}
		  	thumbColor={catIsEnabled ? "#f4f3f4" : "#f4f3f4"}
		  	ios_backgroundColor="#3e3e3e"
		  	onValueChange={toggleCatSwitch}
		  	value={catIsEnabled}
			/>
		</View>
		<View>
		<RNPickerSelect
                 onValueChange={(size) => setSize(size)}
                 items={[
                     { label: "Não há preferência", value: "" },
                     { label: "Pequeno", value: "SMALL" },
                     { label: "Médio", value: "MEDIUM" },
                     { label: "Grande", value: "LARGE" },
                 ]}
				 style={styles.inputIOS}
				 inputIOS={styles.inputIOS}
             />
		</View>
	  </View>
	);
  }
  
  const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	switchButtons: {
		paddingTop: 5,
		paddingLeft: 10,
		flexDirection: 'row',
	},
	inputIOS: {
		textAlign: 'center',
        fontSize: 40,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
		useNativeAndroidPickerStyle:'false',		
	}
  });
  
  export default Filter;