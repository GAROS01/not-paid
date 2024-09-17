// Configuración
const dueDate = new Date("2024-09-30"); // Actualiza esta fecha según tus necesidades
const daysDeadline = 60; // Actualiza este número según tus necesidades

// Función principal
const fadeOutPage = () => {
  const currentDate = new Date();
  const daysPassed = Math.floor(
    (currentDate - dueDate) / (1000 * 60 * 60 * 24)
  );

  if (daysPassed > 0) {
    const daysLate = daysDeadline - daysPassed;
    let opacity = daysLate / daysDeadline;
    opacity = Math.max(0, Math.min(1, opacity));

    if (opacity >= 0 && opacity <= 1) {
      document.body.style.opacity = opacity;
    }
  }
};

// Ejecutar la función cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", fadeOutPage);
