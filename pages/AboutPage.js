import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
export default function AboutPage({navigation, route}) {
  console.disableYellowBox = true;
  useEffect(()=>{
    navigation.setOptions({
      title:'소개 페이지'
    })
  },[])
  return (
      <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Hi! 스파르타코딩 앱개발반에 오신것을 환영합니다</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Image
            style={styles.image}
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4'}}/>
            <Text style={styles.subTitle}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
            <Text style={styles.content}>꼭 완주하셔서 꼭 여러분것으로 만들어가시길 바랍니다</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>여러분의인스타계정</Text>
            </TouchableOpacity>
          </View>
      </View>
  )

}

const styles = StyleSheet.create({
    title:{
        fontSize:30,
        marginTop:60,
        textAlign:'center',
        color:'#fff',
        fontWeight:'700'
    },
    container:{
        flex:1,
        backgroundColor:'#4774d9'
    },
    topContainer:{
        flex:2,
        backgroundColor: 'rgba(0,0,0,0.0)',
    },
    bottomContainer:{
        flex:8,
        backgroundColor:'#fff',
        width:'80%',
        alignSelf:'center',
        borderRadius:30,
        marginTop:60,
        marginBottom:60,
        padding:30
    },
    image:{
        flex:1,
        width:150,
        height:150,
        margin:30,
        marginTop:50,
        alignSelf:'center'
    },
    subTitle:{
        flex:0.5,
        fontSize:25,
        alignSelf:'center',
        textAlign:'center',
        fontWeight:'700'
    },
    content:{
        flex:0.4,
        fontSize:17,
        alignSelf:'center',
        textAlign:'center'
    },
    btn:{
        backgroundColor:'#ffcd3d',
        flex:0.3,
        width:'70%',
        padding:10,
        textAlign:'center',
        borderRadius:20,
        alignSelf:'center',
        marginBottom:50
    },
    btnText:{
        flex:1,
        textAlignVertical:'center',
        fontSize:20,
        color:'#4774d9',
        fontWeight:'700',
        alignSelf:'center'
    }

})