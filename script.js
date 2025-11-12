document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  const text = encodeURIComponent(`Hola, soy ${name}. Mi email es ${email}. Consulta: ${msg}`);
  window.open(`https://wa.me/5493816303153?text=${text}`, '_blank');
  this.reset();
  alert('Gracias por tu consulta. Se abrirá WhatsApp para enviarla.');
});