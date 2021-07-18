import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert, Share} from 'react-native';
export default function DetailPage({navigation,route}) {
  console.disableYellowBox = true;
  const [tip, setTip] = useState({
    "idx":9,
    "category":"재테크",
    "title":"렌탈 서비스 금액 비교해보기",
    "image": "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Frental.png?alt=media&token=97a55844-f077-4aeb-8402-e0a27221570b",
    "desc":"요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
    "date":"2020.09.09"
})

useEffect(()=>{

  console.log(route)

  navigation.setOptions({

      title:route.params.title,

      headerStyle: {
          backgroundColor: '#000',
          shadowColor: "#000",
      },
      headerTintColor: "#fff",
  })
  setTip(route.params)
},[])

const popup = ()=>{
  Alert.alert("popoup!")
}

const share = ()=>{
  Share.share({
      message:`${tip.title} \n\n ${tip.desc} \n\n ${tip.image}`,
  });
}
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri:tip.image}}/>
      <View style={styles.content}>
      <Text style={styles.title}>{tip.title}</Text>
      <Text style={styles.desc}>{tip.desc}</Text>
      </View>
      <TouchableOpacity onPress={()=>popup()}>
      <Text style={styles.btn} >팁 찜하기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>share()}>
      <Text style={styles.btn} >팁 공유하기</Text>
      </TouchableOpacity>
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000'
  },
  image:{
    height:500,
    marginLeft:10,
    marginRight:10,
    marginBottom:20,
    marginTop:10,
    borderRadius:20
  },
  content:{
    flex:4,
    marginLeft:20,
    marginRight:20
  },
  title:{
    color:'#fff',
    fontSize:25,
    fontWeight:'700',
    marginTop:10,
    textAlign:'center'

  },
  desc:{
    color:'#fff',
    fontSize:15,
    textAlign:'justify'

  },
  btn:{
    alignSelf:'center',
    fontSize:15,
    textAlign:'center',
    textAlignVertical:'center',
    color:'#BFBFBF',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#BFBFBF',
    width:100,
    height:50
  }
})