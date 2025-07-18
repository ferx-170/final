  function enviarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validación de campos vacíos
    if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Validación de email con expresión regular básica
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
      alert('Por favor, ingrese un correo válido.');
      return;
    }

    // Si pasa la validación
    alert('¡Formulario enviado con éxito! Pronto nos pondremos en contacto.');
    
    // Puedes limpiar el formulario si deseas:
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';
  }
