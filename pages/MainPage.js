import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import data from '../data.json'
import Card from '../components/Card';
import Loading from '../components/Loading';
import { StatusBar } from 'expo-status-bar';
import * as Location from "expo-location";
import axios from "axios"

export default function MainPage({navigation, route}) {
  console.disableYellowBox = true;

  const [state, setState] = useState([]) // state 초기값
  const [cateState, setCateState] = useState([])
  const [ready, setReady] = useState(true)
  const [weather, setWeather] = useState({
    temp : 0,
    condition : ''
  })

  useEffect(()=>{
    setTimeout(()=>{
      navigation.setOptions({
        title:'나만의 꿀팁'
      })
      let tip = data.tip
      setState(tip)
      setCateState(tip)
      getLocation()
      setReady(false)
    }, 1000)
  },[])

  const getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const locationData = await Location.getCurrentPositionAsync();
      const latitude = locationData['coords']['latitude']
      const longitude = locationData['coords']['longitude']
      const API_KEY = "cfc258c75e1da2149c33daffd07a911d";
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );

      const temp = result.data.main.temp;
      const condition = result.data.weather[0].main
      console.log(temp)
      console.log(condition)

      setWeather({
        temp, condition
      })

    }catch(error) {
      Alert.alert("위치를 찾을 수가 없습니다.", "앱을 재실행해주세요.")
    }
  }

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
      <Text style={styles.weather}>오늘의 날씨: {weather.temp + '°C   ' + weather.condition} </Text>
      <TouchableOpacity style={styles.about} onPress={()=>{navigation.navigate('AboutPage')}}>
        <Text style={styles.category}>소개 페이지</Text>
      </TouchableOpacity>
      <Image
        style={styles.mainImage} 
        source={{uri:'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c'}}></Image>
      <ScrollView horizontal={true} style={styles.scroll} >
      <TouchableOpacity onPress={()=>{category('전체보기')}}><Text style={styles.category}>전체보기</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{category('생활')}}><Text style={styles.category}>생활</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{category('재테크')}}><Text style={styles.category}>재테크</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{category('반려견')}}><Text style={styles.category}>반려견</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('LikePage')}}><Text style={styles.category}>꿀팁 찜</Text></TouchableOpacity>
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
  weather:{
    alignSelf:"flex-end",
    paddingRight:20
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
  about:{
    marginTop:10,
    marginRight:15,
    alignItems:'flex-end',
  },
  scroll:{
    margin:10,
    alignSelf:'auto'
  },
  category:{
    textAlign:'center',
    padding:15,
    height:50,
    width:100,
    backgroundColor:"#fff",
    margin:5,
    borderRadius:10,
    borderWidth:1,
    elevation:3
  },
})