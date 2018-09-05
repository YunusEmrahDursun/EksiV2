import React, { Component } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import {	
    Text,
	Image,
	TextInput,
	StyleSheet,
	View,
	TouchableOpacity,
} from 'react-native';
import IconF from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';


export default class MainMenu extends Component {
    constructor(props) {
        super(props); 

    }
menuButtons(a,b){
	this.props.parent.setState({change:a});
	}
 
  	
	

    render() {


        return (
		
  

		<Grid style={ [css.theme2]}>
		
	
		<Row size={25} style={ [css.theme1,css.centerChildrens ]}>
		
		<Image
		  style={{alignSelf: 'center',width: 250, height: 100}}
          source={require('./imgs/offline.png')}
		  resizeMode="contain" />
		 </Row >
		 
		<Row  style={{height:30, justifyContent: 'center',   alignItems: 'center'}} >
		   <Image
		  style={{width: 50, height: 30}}
          source={require('./imgs/i.png')}/>
		 </Row >
		 
	 <Row size={40} style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      } }>
		

	<Text style={{ fontFamily: "MarkPro-Bold", fontSize: 30,color:"#FFFFFF",marginTop:10}}>LİNK</Text>
	<View style={[css.theme1,css.centerChildrens,css.inputStyle]}>
	<Text style={{fontFamily: "MarkPro-Bold",fontSize: 16,color:'#FFFFFF',paddingRight:5,paddingLeft:5}}>Url</Text>
	<TextInput  value={this.props.parent.state.link} editable={this.props.parent.state.hide} onChangeText={(a) => this.props.parent.setState({link:a})} style={{	  width:200,color:"#FFFFFF"}} />
	</View>
	
	<Button	borderRadius={8} onPress={this.props.parent.downloadPage.bind(this,this.props.parent)}	fontFamily="MarkPro-Bold"	fontSize={26}  title='KAYDET'   buttonStyle={{	marginTop:20,    backgroundColor: "#393938",    width: 200,    height: 70,  }}/> 
	
	
	</Row >
	<Row size={20}>
	<Col size={30} style={{backgroundColor:"#393938",borderTopWidth: 5,borderTopColor:"#f2af54"}}>
	 <TouchableOpacity
        style={[css.centerChildrens,{flex:1}]}
         onPress={this.menuButtons.bind(this,1)}
       >
	   <View  style={css.centerChildrens}>
		<IconF name="save" size={40} color="#FFFFFF" />
	       <Text style={css.inputStyle2}>KAYDEDİLENLER</Text>
	   
	   </View>
     
       </TouchableOpacity>
	</Col>
	<Col size={1} style={{backgroundColor:"#5d9133"}}>
	</Col>
	<Col size={30} style={{backgroundColor:"#393938",borderTopWidth: 5,borderTopColor:"#009b9c"}}>
		 <TouchableOpacity
        style={[css.centerChildrens,{flex:1}]}
         onPress={this.menuButtons.bind(this,2)}
       >
	   <View  style={css.centerChildrens}>
		<IconI name="ios-book" size={40} color="#FFFFFF" />
	       <Text style={css.inputStyle2}>DEVAM EDİLECEKLER</Text>
	   
	   </View>
     
       </TouchableOpacity>
	</Col>
	<Col size={1} style={{backgroundColor:"#5d9133"}}>
	</Col>
	<Col size={30} style={{backgroundColor:"#393938",borderTopWidth: 5,borderTopColor:"#e04660"}}>
		 <TouchableOpacity
        style={[css.centerChildrens,{flex:1}]}
         onPress={this.menuButtons.bind(this,3)}
       >
	   <View  style={css.centerChildrens}>
		<IconF name="book" size={40} color="#FFFFFF" />
	       <Text style={css.inputStyle2}>BAŞLANMAMIŞ OLANLAR</Text>
	   
	   </View>
     
       </TouchableOpacity>
	</Col>
	</Row>
		</Grid>
		
        );
    }
}

const css = StyleSheet.create({
  theme1: {
   backgroundColor:'#393938'
  },
  theme2: {
    backgroundColor:'#5d9133' //green
  },
  centerChildrens:{
	  justifyContent: 'center', 
	  alignItems: 'center'
  },
  inputStyle:{
	  flexDirection: 'row',
	  marginRight:25,
	  marginLeft:25,
	paddingRight:5,
	paddingLeft:5
  },
  inputStyle2:{
	  textAlign: 'center',
	  fontFamily: "MarkPro-Bold", 
	  fontSize: 8,
	  color:"#FFFFFF",
	  paddingLeft:2,
	  paddingRight:2
	  
  },
 
  
});


