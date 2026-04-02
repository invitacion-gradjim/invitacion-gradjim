import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

async function cargarDatos() {
  const tabla = document.getElementById("tablaDatos");

  try {
    const querySnapshot = await getDocs(collection(db, "asistencias"));

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      const fila = `
        <tr>
          <td>${data.nombre}</td>
          <td>${data.invitados}</td>
        </tr>
      `;

      tabla.innerHTML += fila;
    });

  } catch (error) {
    console.error("Error al cargar datos:", error);
  }
}

cargarDatos();