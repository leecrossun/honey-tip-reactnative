import React from "react"
import {View,Text,Image,StyleSheet,TouchableOpacity} from "react-native";
import {firebase_db} from "../firebaseConfig";
import Constants from "expo-constants";

export default function LikeCard({content, navigation, reload}) {

const detail = () => {
    navigation.navigate('DetailPage',{idx:content.idx})
}

const remove = () => {
    const user_id = Constants.installationId;
    firebase_db.ref('/like/'+user_id+'/'+content.idx).remove().then(function(){
        Alert.alert("삭제 완료");
        reload()
    })
}

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
         <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button} onPress={()=>detail()}><Text style={styles.buttonText}>자세히보기</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>remove()}><Text style={styles.buttonText}>찜 해제</Text></TouchableOpacity>    
          </View>
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
      },
       buttonGroup: {
      flexDirection:"row",
      },
      button:{
          width:90,
          marginTop:20,
          marginRight:10,
          marginLeft:10,
          padding:10,
          borderWidth:1,
          borderColor:'deeppink',
          borderRadius:7
      },
      buttonText:{
          color:'deeppink',
          textAlign:'center'
      }
})