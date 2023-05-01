import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyD1tZyxnPezjFKgui6IkPBiYNb9tXjSYfA",
	authDomain: "netflix-aec20.firebaseapp.com",
	projectId: "netflix-aec20",
	storageBucket: "netflix-aec20.appspot.com",
	messagingSenderId: "575698925060",
	appId: "1:575698925060:web:e4b699397bfddcf9f86751",
	measurementId: "G-KZLSKRVX6Y",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
