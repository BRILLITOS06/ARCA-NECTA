document.getElementById('visit-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita recargar la página

  const datos = {
    colaborador: document.getElementById('colaborador').value,
    tienda: document.getElementById('tienda').value,
    tipo: document.getElementById('tipo').value,
    fecha: document.getElementById('fecha').value,
    comentarios: document.getElementById('comentarios').value
  };

  console.log("Formulario enviado con los datos:", datos);

  alert("Formulario enviado correctamente. ¡Gracias!");
  this.reset();
});