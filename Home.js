import React, { Component } from 'react';
import { AppRegistry, Text, View} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';


export default class Home extends Component{
	constructor(){
		super();
		this.state = {
			name:'brad'
		}
	}
	render(){
		const { navigate } = this.props.navigation;
		return(
		<View>
			<Text style={{fontSize:20, margin:20}}> This is the Home Page </Text>
			<Button
			warning
			onPress={
				() => navigate('Post', {name: 'Testing123'})
			}>
			<Text style={{color:'white', margin:5}}>To New Posts</Text>
			</Button>
		</View>
		)
	}
}

AppRegistry.registerComponent('Home', () => Home);
