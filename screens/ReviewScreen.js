import React, {Component} from 'react'
import {View,Text} from 'react-native'
import {Button} from 'react-native-elements'


class ReviewScreen extends Component{
	constructor(props){
    super(props);
     const { navigate } = this.props.navigation;
}
	
	
	render(){
		const { navigate } = this.props.navigation;
		return(
				<View>
					<Text>ReviewScreen</Text>
					<Text>ReviewScreen</Text>
					<Text>ReviewScreen</Text>
					<Text>ReviewScreen</Text>
				</View>

			)
	}
}
export default ReviewScreen;