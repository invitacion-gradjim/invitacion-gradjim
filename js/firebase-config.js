// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "invitation-dpp.firebaseapp.com",
  projectId: "invitation-dpp",
  storageBucket: "invitation-dpp.firebasestorage.app",
  messagingSenderId: "984549001849",
  appId: "1:984549001849:web:cf6655c8e12a5f11ade2a8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
