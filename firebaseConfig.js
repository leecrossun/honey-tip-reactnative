//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyAgY4EZiNVzkr2UM6yvlOIGoN2cnKkAPmw",
    authDomain: "myhoneytip-8a7ad.firebaseapp.com",
    projectId: "myhoneytip-8a7ad",
    storageBucket: "myhoneytip-8a7ad.appspot.com",
    messagingSenderId: "930748745844",
    appId: "1:930748745844:web:d0861e18969612d2322921",
    measurementId: "G-P0Q7QCNPVX"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()