import React, { Component } from 'react';
import { AppRegistry, View, ScrollView } from 'react-native';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Button,
 List, ListItem, Form, Textarea } from 'native-base';
import * as firebase from 'firebase';

export default class Comments extends Component {
	constructor(props){
		super(props);
		this.state = {
			newComment: ''
		}
	}

	addComment = () =>{
	    key = this.props.messageKey;
	    // console.log('this is the key: ', key);
	    this.props.updateCommentsList(this.state.newComment, key);
	  }

	render() {
		let commentArr = this.props.comments ? Object.values(this.props.comments) : [];
		// console.log('rendering comments component', this.props);

		let commentText = <View><Text>Be the first to comment!</Text></View>
		commentText = commentArr.map((c, i) => {
			return (
				<View>
					<Text key={i}>{c}</Text>
				</View>
				);
		});
		return (
			<View>
				<Text>COMMENTS:</Text>
				{commentText}
				<View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: .5,
                  marginBottom: 15
                  }}
                 />
	            <Form>
		            <Textarea
		            style={{backgroundColor:'white'}}
		             rowSpan={4}
		             bordered
		             onChangeText={(newComment) => this.setState({ newComment: newComment })}
		             placeholder="Enter new comment here..."
		            />
		            <Button style={{alignSelf: 'center', margin:20}}
		                onPress={() => this.addComment()}
		                warning
		                rounded
		                >
		              <Text style={{fontSize:12, fontWeight:'bold'}}> Add a Comment </Text>
		            </Button>
		            <Text style={{fontSize:10, color:'red', marginTop:30}}> {this.state.newComment}</Text>
		        </Form>
			</View>
			);
	}
}

AppRegistry.registerComponent('Comments', () => Comments);