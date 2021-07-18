import React from "react"
import {View,Text,Image,StyleSheet} from "react-native";

export default function Card({content, navigation}) {
    return (
    <View  style={styles.cardEven}>
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
     </View>)
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