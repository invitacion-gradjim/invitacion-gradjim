// 🔥 IMPORTS SIEMPRE ARRIBA
import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

console.log("JS CARGADO 🔥");

window.addEventListener("load", () => {

  /****************************
  CONTADOR
  *****************************/
  const eventDate = new Date("June 13, 2026 17:30:00").getTime();
  const timer = document.getElementById("timer");

  setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    if (timer) {
      timer.innerHTML = `
        <div class="tiempo"><span>${days}</span><small>DÍAS</small></div>
        <div class="tiempo"><span>${hours}</span><small>HORAS</small></div>
        <div class="tiempo"><span>${minutes}</span><small>MINUTOS</small></div>
        <div class="tiempo"><span>${seconds}</span><small>SEGUNDOS</small></div>
      `;
    }
  }, 1000);


  /****************************
  ANIMACIONES SCROLL
  *****************************/
  const elementos = document.querySelectorAll('.animar');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          'animate__animated',
          entry.target.dataset.anim
        );
        entry.target.style.opacity = 1;
      }
    });
  }, { threshold: 0.2 });

  elementos.forEach(el => observer.observe(el));


  /****************************
  MODAL
  *****************************/
  window.abrirModal = function () {
    document.getElementById("modal").style.display = "flex";
  }

  window.cerrarModal = function () {
    document.getElementById("modal").style.display = "none";
  }


  /****************************
  BOTÓN CONFIRMAR
  *****************************/
  const btn = document.getElementById("confirmarBtn");

  if (btn) {
    const MAX_INVITADOS = document.body.dataset.max;

    btn.addEventListener("click", async () => {
      const nombre = document.getElementById("nombre").value;
      const invitados = parseInt(document.getElementById("invitados").value);

      if (!nombre || !invitados) {
        alert("Por favor llena todos los campos ♥");
        return;
      }

      if (invitados > MAX_INVITADOS) {
        alert(`Solo puedes confirmar hasta ${MAX_INVITADOS} invitados ♥`);
        return;
      }

      try {
        await addDoc(collection(db, "asistencias"), {
          nombre,
          invitados,
        });

        alert("Confirmación guardada ♥");
        cerrarModal();

      } catch (error) {
        console.error("ERROR REAL:", error);
        alert(error.message);
      }
    });
  }

});
