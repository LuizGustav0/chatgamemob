import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';
class DiscNumber extends React.Component {
  constructor() {
    super();
    this.state = {sampleText: '',
    data: [
      { id: "1", name: "1" },
      { id: "2", name: "2" },
      { id: "3", name: "3" },
      { id: "4", name: "4" },
      { id: "5", name: "5" },
      { id: "6", name: "6" },
      { id: "7", name: "7" },
      { id: "8", name: "8" },
      { id: "9", name: "9" },
      { id: "10", name: "*" },
      { id: "0", name: "0" },
      { id: "11", name: "#" },
    ]
  };
   
  }

  

  changeTextValue = (value) => {
    var number = this.state.sampleText
    console.log(this.state.sampleText);
    console.log(value)
    if(number.length <= 6){
      this.setState(
        {sampleText: number + value}
      );
    }
  }


  render() {
    return (
      <SafeAreaView style={styles.Page }>
        <View style={styles.SafeAreaView} >
          <View style={styles.numDiscView}>
          <Text style={styles.numDisc} onPress={this.changeTextValue}>
            {this.state.sampleText}
          </Text>
          </View>
          <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>                
                <TouchableOpacity
                   onPress={() => this.changeTextValue(item.id)}
                   style={styles.roundButton1}>
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
            <View style={styles.item}>   
                 <TouchableOpacity style={styles.roundButton2}>                 
                 <Icon raised name="phone" type='material' color={'#00A300'}/>
                </TouchableOpacity>                
             </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  Page: {
    backgroundColor: "#fff"
  },
  SafeAreaView:{
    margin: '13%',      
  },
  numDiscView:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%'
  },
  numDisc:{
    padding: 20,
    fontSize: 28,
  },
  item: {
    alignItems: "center",
    flexGrow: 1,
    margin: 4,
    padding: 5,
    flexBasis: 0,
  },
  text: {
    color: "#333333",
    fontSize:16
  },
  roundButton1: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#E8E8E8',
  },
  roundButton2: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    paddingBottom: 25
  },
});
export default DiscNumber;