
import React, { useState } from 'react';
import { StyleSheet, Text,TextInput, View,TouchableOpacity, Button, ScrollView, FlatList,TouchableWithoutFeedback, Keyboard,Alert} from 'react-native';
import Header from './components/header';
import CheckBox from '@react-native-community/checkbox';
// import Sandbox from './components/sandbox';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Icon } from 'react-native-elements'
import TodoItem from './components/todoItem';



export default function App() {
  const [text, setText] = useState('');
  var i = 0;
  const [itmesList, setitemsList]= useState([]);

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const [itmesListss, setitemsLissst] = useState([]);
  
  
  const getEditTextData = () =>{
        var newArray =[...itmesList,
          {
           id: Math.random(),
           text: text,
           completed: false,
          },
         ];
        setitemsList(newArray);
  }

  const pressHandler =(item) =>{
    const filteredData = itmesList.filter(itemss => itemss.id !== item.id);
    setitemsList(filteredData)
  }

  const pressHandlers =(item) =>{
    itmesList.forEach(element => {
      if(element.id == item.id && item.completed == true){
        const filteredData = itmesList.filter(itemss => itemss.id !== item.id);
        setitemsList(filteredData)
      }
    });
   
  }

  // const checkHandlers = (item) =>{
  //   itmesList.forEach(element => {
  //     if(element.id == item.id && item.completed == true){
  //      var newArray =[...itmesListss,
  //         {
  //          id:element.id,
  //          text: element.text,
  //          completed: true,
  //         },
  //        ];
  //        setitemsLissst(newArray)
  //     }else{
  //      var  newArray =[...itmesListss,
  //         {
  //          id:element.id,
  //          text: element.text,
  //          completed: false,
  //         },
  //        ];
  //        setitemsLissst(newArray)
  //     }

  //   });
    
  //   setitemsList(itmesListss);

  // }

 
  return (
    <TouchableWithoutFeedback onPress ={
      Keyboard.dismiss
    }>
    <View style={styles.container}>
      <Header/>
        <View style = {styles.textViewStyle}>
            <TextInput style ={styles.tIStyle}
              
              // style={{height: 40}}      
              placeholder="Enter Text!"
              onChangeText={text => setText(text)}
              defaultValue={text}
            />
            </View>
           <View>
                <Button title = "Submit" onPress ={getEditTextData}/>

            </View>
        
     
     
                  <View style ={styles.flatlistContainer}>
                    {/* <MaterialIcons name = 'delete'/> */}
                   
                    
                    <FlatList
                          
                       keyExtractor={(item) => item.id}
                         data = {itmesList}
                         renderItem={({ item }) => ( 
                          <TodoItem item={item} pressHandlers={pressHandlers} />
                        //    <View style = {styles.itemL}>
                        //      {/* <Icon name ="delete"/> */}
                        //      <View style ={styles.itemL}>
                        //      <Icon name="rocket" size={30} color="#900" 
                        //     //  onPress={
                        //     //   Alert.alert('Alert','Clicked',[
                        //     //     {text :'Ok',onPress :() => console.log('alert closed')}
                        //     //   ])
                        //     //  } 
                        //      />
                        //      </View>
                        //      <View style ={styles.viewCheckbox}>
                        //          <CheckBox
                        //             //  disabled={false}
                        //              value={item.completed}
                        //              onValueChange={(newValue) => {
                        //                setToggleCheckBox(newValue)
                                      
                        //                item.completed = newValue
                        //                itmesList.forEach(element => {
                        //                 console.log('TagCheck',element.id)
                        //                 console.log('TagCheck',element.completed)
                        //                });
                                     
                                       
                                     
                        //               //  console.log('TagMcI', item.id)
                        //               //  const filteredData = itmesList.map(itemss => {
                        //               //   if(itemss.id == item.id){
                        //               //     item.completed = newValue
                        //               //   } 
                        //               //   });
                        //               //   setitemsList(filteredData)
                        //              }
                        //              }
                        //              // onValueChange={()=> checkHandlers(item)}
                        //            />
                        //           </View>
                        //       <TouchableOpacity onPress={() => pressHandlers(item)}>
                        //       <Text style={styles.item}>{item.text}</Text>
                        //       </TouchableOpacity>
                        //  </View>
                        )}
                    />
                  </View>
    </View>
    </TouchableWithoutFeedback>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    paddingBottom:10
  },
  textViewStyle:{
    // backgroundColor: 'pink',
    // flex :1,
    alignContent:'flex-start',
    justifyContent : 'flex-end'
  },
  tIStyle:{
    height:45,
    width:150,
    margin:25,
    borderWidth : 1,
    borderColor:'#777',
    padding:5,
   
  },
  buttonStyle:{
    backgroundColor : "yellow",
    alignContent :'center'
  },
  item: {
    // flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 10,
    borderWidth : 1,
    borderRadius : 5,
    // backgroundColor: '#ADD8E6',
    fontSize: 24,
    width:300,
  },
  flatlistContainer:{
    flex: 5,
  },
  itemL:{
    flex:1,
    flexDirection : 'row'
    
  },
  viewCheckbox:{
padding :10
  },
  viewIcon:{
    padding :10
  }
});


