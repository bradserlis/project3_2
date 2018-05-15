import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, ImageBackground} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2 } from 'native-base';


export default class Home extends Component{
	constructor(){
		super();
	}
	render(){
		const { navigate } = this.props.navigation;
		return(
			 <ImageBackground
		       style={{flex:1, width: window.width, 
		        height: window.height}}
		      	source={require('./img/backdrop2.jpg')}>
			<Container>
			<View style={styles.overlay}>
			<Header>
          	<Left>
            <Title style={{fontFamily:'Gill Sans', fontSize:20, color:'rgba(255,  180, 80, 1)', fontWeight:'bold'}}>Home</Title>
            </Left>
          	<Body>
          	</Body>
          	<Right />
          	</Header>
          	</View>
          	<View>
          	<Text style={styles.helpText}> Start by posting a new question </Text>
			<Button style={{margin:50, marginTop:50}}
			block
			rounded
			iconLeft
			info
			onPress={
				() => navigate('Post')
			}>
			<Text style={{color:'white', margin:5}}>Write New Post</Text>
			</Button>
			</View>
			<View>
			<Text style={styles.helpText}>Or view questions others created, and leave your feedback</Text>
			<Button style={{margin:50}}
			block
			rounded
			iconRight
			primary
			onPress={
				() => navigate('Search', {name: 'Posts Collection'})
			}>
			<Text style={{color:'white', margin:5}}>Posts Collection</Text>
			</Button>
		</View>
		</Container>
		</ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
  helpText:{
  	fontSize:25,
  	textAlign:'center',
  	fontWeight:'bold',
  	marginTop: 20,
  	fontStyle:'italic',
  },
  overlay:{
  	backgroundColor:'rgba(0,0,0,.2)',
  	height: window.height,
  	width: window.width,
  	flex:.5
  }
});


AppRegistry.registerComponent('Home', () => Home);
