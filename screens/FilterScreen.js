import 'react-native-gesture-handler';
import React, {useState, useCallback} from "react";
import { Text, View, StyleSheet, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import RangeSlider from 'rn-range-slider';

import Thumb from '../Slider/Thumb';
import Rail from '../Slider/Rail';
import RailSelected from '../Slider/RailSelected';
import Notch from '../Slider/Notch';
import Label from '../Slider/Label';

import { Button } from 'react-native-paper';


const Filter = () => {
	const [dogIsEnabled, setDogIsEnabled] = useState(false);
	const toggleDogSwitch = () => setDogIsEnabled(previousState => !previousState);

	const [catIsEnabled, setCatIsEnabled] = useState(false);
	const toggleCatSwitch = () => setCatIsEnabled(previousState => !previousState);

	const [size, setSize] = useState(['Pequeno', 'Médio', 'Grande'])
  
	const [isSelected, setSelection] = useState(false);



	const [rangeDisabled, setRangeDisabled] = useState(false);
	const [low, setLow] = useState(0);
	const [high, setHigh] = useState(25);
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(100);
	const [floatingLabel, setFloatingLabel] = useState(false);

	const renderThumb = useCallback(() => <Thumb/>, []);
	const renderRail = useCallback(() => <Rail/>, []);
	const renderRailSelected = useCallback(() => <RailSelected/>, []);
	const renderLabel = useCallback(value => <Label text={value}/>, []);
	const renderNotch = useCallback(() => <Notch/>, []);
	const handleValueChange = useCallback((low, high) => {
  		setLow(low);
  		setHigh(high);
	}, []);


	const [ language, setLanguage ] = useState("");

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

		<View style={{ paddingVertical: 15 }} />

		<View>
		<RNPickerSelect
		         placeholder={{ label: "Selecione o porte do animal", value: null }}
                 onValueChange={(size) => setSize(size)}
                 items={[
                     { label: "Não há preferência", value: "" },
                     { label: "Pequeno", value: "SMALL" },
                     { label: "Médio", value: "MEDIUM" },
                     { label: "Grande", value: "LARGE" },
                 ]}
				 style={{ ...pickerSelectStyles }}
				 inputIOS={customPickerStyles.inputIOS}
             />
		</View>
		<View style={{ paddingVertical: 15 }} />

		<View>
		<RNPickerSelect
		         placeholder={{ label: "Selecione o sexo do animal", value: null }}
                 onValueChange={(size) => setSize(size)}
                 items={[
                     { label: "Não há preferência", value: "" },
                     { label: "Macho", value: "MACHO" },
                     { label: "Femea", value: "FEMEA" },
                 ]}
				 style={{ ...pickerSelectStyles }}
				 inputIOS={customPickerStyles.inputIOS}
             />
		</View>

		<View style={{ paddingVertical:71 }} />

		<View style={styles.sliderView}>
			<Text style={{flexDirection:'row', color: 'grey', fontWeight: 'bold', fontSize: 16}}>Idade</Text>
			<RangeSlider
  				style={styles.slider}
  				min={0}
  				max={25}
  				step={1}
  				floatingLabel
  				renderThumb={renderThumb}
  				renderRail={renderRail}
  				renderRailSelected={renderRailSelected}
  				renderLabel={renderLabel}
  				renderNotch={renderNotch}
  				onValueChanged={handleValueChange}
			/>
		</View>

		<View style={{ paddingVertical:15}} />

		<View style={styles.sliderView}>
			<Text style={{flexDirection:'row', color: 'grey', fontWeight: 'bold', fontSize: 16}}>Distância</Text>
			<RangeSlider
  				style={styles.sliderDistancia}
  				min={0}
  				max={25}
  				step={1}
  				floatingLabel
  				renderThumb={renderThumb}
  				renderRail={renderRail}
  				renderRailSelected={renderRailSelected}
  				renderLabel={renderLabel}
  				renderNotch={renderNotch}
  				onValueChanged={handleValueChange}
			/>
		</View>

		<View style={{ paddingVertical: 40 }} />

		<View>
			<Button
			mode="contained"
			style = {styles.button}
			onPress={() => console.log('Pressed')}>
				Pesquisar
			</Button>
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
	},
	sliderView: {
		left: 10,
		bottom: 100,
		width: 390,
		height: 50,
		paddingTop: 12,
		paddingLeft: 10,
		paddingRight: 10,
		flexDirection: 'row',
		borderWidth: 2,
		borderColor: 'grey',
	},
	slider: {
		width: 320,
		paddingLeft: 50,
		
	},
	sliderDistancia: {
		width: 290,
		paddingLeft: 22,
		
	},
	button: {
		width: 390,
		left: 10,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: '#00ced1',
	  },
	  text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	  },
  });

  const customPickerStyles = StyleSheet.create({
	inputIOS: {
	  fontSize: 30,
	  paddingVertical: 10,
	  paddingHorizontal: 12,
	  borderWidth: 1,
	  borderColor: 'green',
	  borderRadius: 8,
	  color: 'black',
	  paddingRight: 30, // to ensure the text is never behind the icon
	},
	inputAndroid: {
	  fontSize: 30,
	  paddingHorizontal: 10,
	  paddingVertical: 8,
	  borderWidth: 1,
	  borderColor: 'blue',
	  borderRadius: 8,
	  color: 'black',
	  paddingRight: 30, // to ensure the text is never behind the icon
	},
  });


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
		left: 10,
		top: 10,
		bottom: 100,
		width: 390,
        fontSize: 18,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});

  
  export default Filter;