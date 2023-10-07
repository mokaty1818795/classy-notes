import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsapr2v1Bz_BKTx2sVlvTDtPwhr-iV8yI",
  authDomain: "healthips-79afa.firebaseapp.com",
  projectId: "healthips-79afa",
  storageBucket: "healthips-79afa.appspot.com",
  messagingSenderId: "306618034087",
  appId: "1:306618034087:web:18636c25190931f576b882",
  measurementId: "G-ZVD8NWHVXD",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore };
