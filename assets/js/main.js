function copySnippet(btn) {
    const code = btn.closest('.proyecto-code').querySelector('code').innerText;
    navigator.clipboard.writeText(code).then(() => {
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Copiado';
      setTimeout(() => btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copiar', 2000);
    });
  }

  function toggleMenu() {
    const links = document.querySelector('.nav-links');
    if (links.style.display === 'flex') {
      links.style.display = 'none';
    } else {
      links.style.cssText = 'display:flex; flex-direction:column; position:fixed; top:60px; left:0; right:0; background:rgba(15,17,23,0.97); padding:1.5rem 2rem; gap:1rem; border-bottom:1px solid #2a3347;';
    }
  }

  function handleSubmit(e) {
  e.preventDefault();
  
  const btn = e.target.querySelector('button[type="submit"]');
  const statusMessage = document.getElementById('form-status');
  
  // Cambiar estado del botón
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  // Capturar todos los datos del formulario automáticamente
  const formData = new FormData(e.target);

  // Enviar los datos a la API
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      // Éxito
      statusMessage.style.display = 'block';
      statusMessage.style.color = 'var(--green)';
      statusMessage.textContent = '✓ Mensaje enviado correctamente';
      btn.textContent = 'Enviado ✓';
      e.target.reset(); // Limpia los campos del formulario
    } else {
      // Error de la API
      throw new Error('Error en el servidor');
    }
  })
  .catch(error => {
    // Error de red o cualquier otro problema
    statusMessage.style.display = 'block';
    statusMessage.style.color = 'red';
    statusMessage.textContent = '✕ Hubo un error, inténtalo de nuevo.';
    btn.textContent = 'Enviar mensaje →';
    btn.disabled = false;
  });
}

  // Highlight active nav link on scroll
  const sections = document.querySelectorAll('section[id], div[id="contacto"]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--text)' : '';
    });
  });
