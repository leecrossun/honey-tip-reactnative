import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailPage from '../pages/DetailPage';
import MainPage from '../pages/MainPage';

const Stack = createStackNavigator();

const StackNavigator = () =>{
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                    borderBottomColor: "black",
                    shadowColor: "black",
                    height:100
                },
                headerTitleAlign:'center',
                headerTintColor: "#000", // 제목
                headerBackTitleVisible: false
            }}
            
        >
            <Stack.Screen name="MainPage" component={MainPage}/>
            <Stack.Screen name="DetailPage" component={DetailPage}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;