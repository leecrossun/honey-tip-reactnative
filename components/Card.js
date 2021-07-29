import React from "react"
import {View,Text,Image,StyleSheet, TouchableOpacity} from "react-native";

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function Card({content, navigation}) {
    return (
    <TouchableOpacity  style={styles.cardEven} onPress={()=>{navigation.navigate('DetailPage',{idx:content.idx})}}>
        <Image 
         style={styles.subImage}
         source={{uri:content.image}} />
       <View style={styles.desc}>
         <Text style={styles.descTitle}>{content.title}</Text>
         <Text style={styles.descContent} numberOfLines={3}>
           {content.desc}
         </Text>
         <Text style={styles.descPub}>{content.date}</Text>
       </View>
     </TouchableOpacity>)
}

const styles = StyleSheet.create({
    descContainer:{
        margin:10,
      },
      cardEven:{
        flexDirection:'row',
        flex:1,
        margin:5,
        borderBottomWidth:0.5,
        borderBottomColor:"#eee",
        padding:5,
        borderRadius:10,
      },
      cardOdd:{
        flexDirection:'row',
        flex:1,
        margin:5,
        borderBottomWidth:0.5,
        borderBottomColor:"#eee",
        padding:5,
        backgroundColor:'#dddddd',
        borderRadius:10,
      },
      subImage:{
        flex:1,
        marginRight:10,
        borderRadius:10,
        resizeMode:'cover'
      },
      desc:{
        flex:2
      },
      descTitle:{
        fontSize:20,
        fontWeight:'700'
      },
      descContent:{
        fontSize:15
      },
      descPub:{
        fontSize:10
      }
})