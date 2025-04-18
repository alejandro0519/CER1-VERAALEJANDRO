function cambiarModo() {
    const body = document.body;
    body.classList.toggle('noche'); // Cambia la clase entre 'noche' y el estado inicial
  }

  // Función para cambiar entre modo día y noche
function toggleModo() {
    const body = document.body;
    const modoActual = body.classList.contains('noche') ? 'noche' : 'dia';
    const nuevoModo = modoActual === 'noche' ? 'dia' : 'noche';
  
    // Cambiar la clase del body
    body.classList.remove(modoActual);
    body.classList.add(nuevoModo);
  
    // Guardar la preferencia en localStorage
    localStorage.setItem('modo', nuevoModo);
  }
  
  // Al cargar la página, verificar el estado del modo y aplicarlo
  document.addEventListener('DOMContentLoaded', () => {
    const modoGuardado = localStorage.getItem('modo');
    
    if (modoGuardado) {
      document.body.classList.add(modoGuardado);
    } else {
      // Si no hay preferencia guardada, predeterminado al modo día
      document.body.classList.add('dia');
    }
  });
  