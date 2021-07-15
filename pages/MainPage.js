import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import data from '../data.json'
export default function MainPage() {
  console.disableYellowBox = true;

  let tip = data.tip;
  let todayWeather = 10 + 17;
  let todayCondition = "흐림";

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁</Text>
      <Image
        style={styles.mainImage} 
        source={{uri:'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c'}}></Image>
      <ScrollView horizontal={true} style={styles.scroll} >
        <TouchableOpacity><Text style={styles.category}>생활</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.category}>재테크</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.category}>반려견</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.category}>꿀팁</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.category}>찜</Text></TouchableOpacity>
      </ScrollView>
      <View  style={styles.descContainer}>
      {
        tip.map((content, i)=>{
          return i % 2 == 0 ? (
          <View  style={styles.cardEven}>
             <Image 
              style={styles.subImage}
              source={{uri:content.image}}></Image>
            <View style={styles.desc}>
              <Text style={styles.descTitle}>{content.title}</Text>
              <Text style={styles.descContent} numberOfLines={3}>
                {content.desc}
              </Text>
              <Text style={styles.descPub}>{content.date}</Text>
            </View>
          </View>
          ) : (
            <View  style={styles.cardOdd}>
             <Image 
              style={styles.subImage}
              source={{uri:content.image}}></Image>
            <View style={styles.desc}>
              <Text style={styles.descTitle}>{content.title}</Text>
              <Text style={styles.descContent} numberOfLines={3}>
                {content.desc}
              </Text>
              <Text style={styles.descPub}>{content.date}</Text>
            </View>
          </View>
          )
        })
      }
      </View>
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff",
  },
  title:{
    fontSize:20,
    fontWeight:"700",
    marginTop:50,
    marginLeft:20
  },
  mainImage:{
    height:300,
    width:'90%',
    margin:10,
    borderRadius:10,
    alignSelf:'center'
  },
  scroll:{
    margin:10,
  },
  category:{
    textAlign:'center',
    textAlignVertical:'center',
    height:50,
    width:100,
    backgroundColor:"#fff",
    margin:5,
    borderRadius:10,
    borderWidth:1,
    elevation:3
  },
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