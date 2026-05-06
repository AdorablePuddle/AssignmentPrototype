import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

export default function Index() {
	const [showMode, setShowMode] = useState(0); // 0 = Both, 1 = Steps, 2 = Time

	return (
		<View style = {style.mainContainer}>
			<View style = {style.buttonContainer}>
				<Button title = "Show All" onPress = {() => {setShowMode(0)}}/>
				<Button title = "Show Steps" onPress = {() => {setShowMode(1)}}/>
				<Button title = "Show Time" onPress = {() => {setShowMode(2)}}/>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	mainContainer : {
		flex: 1,
		justifyContent : "center",
		alignItems : "center",
	},
	buttonContainer : {
		flex: 1,
		flexDirection : "row",
		justifyContent : "center",
		alignItems : "center",
		gap : 10,
	}
})