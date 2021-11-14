import React, {Component} from 'react';
import {Text, View, Image,Button, TextInput, StyleSheet} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
    input: '',
    cons: 0,
    vowel: 0,
    charc: 0,
    }
  }
analyzeWord = () => {
   let input = this.state.input;
   let cons = 0;
   let vowel=0;
   let charc=0;
   let inp= '';
charc = input.length;
inp = input.split('');
for (let i=0; i <charc ;i++ ) {
  if((inp[i].match(/[aeiouAEIOU]/)))
  {
    vowel++;
  }
  else if ((inp[i].match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)))
  {
    cons++;
  }
  this.setState({charc:charc, vowel:vowel,cons:cons})
}
    
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        


       <Text style={Styles.Header}> Word Analyzer</Text>
       <TextInput style={Styles.input} onChangeText={(input) => this.setState({input})}  placeholder="Type your word here" />
      <Button  onPress={this.analyzeWord}  title="Analyze"  color="#00A36C" />
      <Text></Text>
      <Text style={Styles.Text} >Words                               :  {this.state.input}</Text>
       <Text style={Styles.Text} >No. of Consonants         :  {this.state.cons}</Text>
       <Text style={Styles.Text} >No. of Vowels                 :  {this.state.vowel}</Text>
       <Text style={Styles.Text} >No. of Characters           :  {this.state.charc}</Text>
       </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
  Header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },
  Text: {
    textAlign: 'center',
    marginBottom: 5,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
});