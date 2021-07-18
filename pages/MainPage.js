import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import data from '../data.json'
import Card from '../components/Card';
import Loading from '../components/Loading';
import { StatusBar } from 'expo-status-bar';
export default function MainPage({navigation, route}) {
  console.disableYellowBox = true;

  const [state, setState] = useState([]) // state 초기값
  const [cateState, setCateState] = useState([])
  const [ready, setReady] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      navigation.setOptions({
        title:'나만의 꿀팁'
      })
      let tip = data.tip
      setState(tip)
      setCateState(tip)
      setReady(false)
    }, 1000)
  },[])

  const category = (cate) => {
    if(cate == "전체보기"){
        setCateState(state)
    }else{
        setCateState(state.filter((d)=>{
            return d.category == cate
        }))
    }
}
  let todayWeather = 10 + 17;
  let todayCondition = "흐림";

  return ready ? <Loading/> : ( // 로딩 or 화면
    <ScrollView style={styles.container}>
      <StatusBar style='black'/>
      <Image
        style={styles.mainImage} 
        source={{uri:'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c'}}></Image>
      <ScrollView horizontal={true} style={styles.scroll} >
      <TouchableOpacity onPress={()=>{category('전체보기')}}><Text style={styles.category}>전체보기</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{category('생활')}}><Text style={styles.category}>생활</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{category('재테크')}}><Text style={styles.category}>재테크</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{category('반려견')}}><Text style={styles.category}>반려견</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{category('꿀팁 찜')}}><Text style={styles.category}>꿀팁 찜</Text></TouchableOpacity>
      </ScrollView>
      <View  style={styles.descContainer}>
      {
        cateState.map((content, i)=>{
          return (<Card content={content} key={i} navigation={navigation} />)
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
})