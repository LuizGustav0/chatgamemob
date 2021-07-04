import * as React from 'react';
import Apps from './src/componets/home';
import Chat from './src/componets/chat';
import Shop from './src/componets/shop';
import Discnumber from './src/componets/discnumber';
import Code from './src/componets/code';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
import { StyleSheet, Text, SafeAreaView, StatusBar , View, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const sampleTabNavigation = createBottomTabNavigator();
const sizeIcon = 18;

const styles = StyleSheet.create({   
    containerIcons: {  
      flexDirection: "row"  
    },  
    text: {
      fontSize: 14,
      padding: 2,
      paddingHorizontal: 10,
      fontWeight: "bold"  
    },
    icons: {
        paddingHorizontal: 10
    }
  });



export default class App extends React.Component {
    componentDidMount() {
        console.log("TESTE");
    }



    render() {
        console.disableYellowBox = true;
        return (   
   <>
            
             <StatusBar hidden={true} />
             <View style={{flexDirection: 'row', backgroundColor:'#c9c9c9'}}>
                 <View style={{flex: 1}}>
                    <Text style={styles.text}>05:36</Text> 
                 </View>
             <View style={styles.containerIcons}>
                <Text style={{textAlign: 'right'}}><Icon name='network-wifi' type='material' size={sizeIcon} style={styles.icons} onPress={() => console.log('hello')} /></Text>
                <Text style={{textAlign: 'right'}}><Icon name='network-cell' type='material' size={sizeIcon} style={styles.icons} onPress={() => console.log('hello')} /></Text>
                <Text style={{textAlign: 'right'}}><Icon name='battery-full' type='material' size={sizeIcon} style={styles.icons} onPress={() => console.log('hello')} /></Text>     
             </View>
            </View>         
                <NavigationContainer>
                    <sampleTabNavigation.Navigator 
                        style={styles.tabnavigation} 
                        initialRouteName="Apps"
                        screenOptions = {({route}) => ({ tabBarIcon: ({ focused, color,  size,  }) => {
                        let iconName;
                        let iconColor;
                        if (route.name === 'Apps') {
                            iconName = "apps";
                            iconColor = "red";
                        } else if (route.name === 'Chat') {
                            iconName = 'message';
                            iconColor = "blue";
                        }else if (route.name === 'Ligar') {
                            iconName = 'phone';
                            iconColor = "black";
                        }   
                        else if (route.name === 'Code') {
                            iconName = 'code';
                            iconColor = "green";
                        }                      
                        else if (route.name === 'Shop') {
                            iconName = 'store';
                            iconColor = "pink";
                        }

                        return  <Icon name={iconName} type='material' color={'#5a5a5a'}/>
                        },
                     })
                    }
                     tabBarOptions = {{
                     activeTintColor: '#5a5a5a',
                     inactiveTintColor: '#5a5a5a',
                    }}>
                
                <sampleTabNavigation.Screen name="Code" component={Code}/>
                <sampleTabNavigation.Screen name="Chat"  component={Chat} options={{ tabBarBadge: 1 }}/>
                <sampleTabNavigation.Screen name="Apps" component={Apps} />
                <sampleTabNavigation.Screen name="Ligar" component={Discnumber}/>
                <sampleTabNavigation.Screen name="Shop" component={Shop} /> 
            </sampleTabNavigation.Navigator> 
        </NavigationContainer>       
        </>   

        
        );
        
    }
    
}