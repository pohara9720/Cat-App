import React from 'react';
import { 
StyleSheet,
Text,
View,
Button,
Image,
TextInput,
TouchableOpacity
 } from 'react-native';


export class customBtn extends React.Component {
  render() {
  	let buttonPress = function(){
  		alert("Working");
  	}
    return (
     <TouchableOpacity style={styles.} onPress={buttonPress}>
     <Text>Submit</Text>
     </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
	button:{
    	justifyContent: 'center',
		width:60,
		height:20,
		backgroundColor:'red'

	}
});