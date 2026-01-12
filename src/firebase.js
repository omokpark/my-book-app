// Firebase 설정 및 초기화
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase 설정 정보
const firebaseConfig = {
  apiKey: "AIzaSyBneoaTKHHQJsLm4rohopz3qqjW9ujrDVw",
  authDomain: "my-book-app-cf04e.firebaseapp.com",
  projectId: "my-book-app-cf04e",
  storageBucket: "my-book-app-cf04e.firebasestorage.app",
  messagingSenderId: "567338110465",
  appId: "1:567338110465:web:88e314ad8b4e0f76c4fa00"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 인스턴스
export const db = getFirestore(app);
