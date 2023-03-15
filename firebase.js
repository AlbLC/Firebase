// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    onSnapshot,
    doc,
    getDoc,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpaVxBJPkb2Hb2EpRBKQh7PAyZoNmhlUQ",
    authDomain: "fir-javascript-crud-61ac1.firebaseapp.com",
    projectId: "fir-javascript-crud-61ac1",
    storageBucket: "fir-javascript-crud-61ac1.appspot.com",
    messagingSenderId: "754559824569",
    appId: "1:754559824569:web:f86b7f1794f18267826168"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()


export const saveTask = (title, description) =>
    addDoc(collection(db, "tasks"), { title, description })


export const getTasks = () => getDocs(collection(db, "tasks"))

export const onGetTasks = (callback) => onSnapshot(collection(db, "tasks"), callback)

export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id))

export const getTask = (id) => getDoc (doc(db, "tasks", id) )



export const updateTask = (id, newFields) => 
updateDoc (doc(db,"tasks", id),newFields)