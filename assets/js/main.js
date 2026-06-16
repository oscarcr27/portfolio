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
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    setTimeout(() => {
      document.getElementById('form-status').style.display = 'block';
      btn.textContent = 'Enviado ✓';
    }, 800);
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
