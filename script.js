document.getElementById('loja').addEventListener('change', function() {
  const outraLojaDiv = document.getElementById('outra-loja');
  if (this.value === 'Outra') {
    outraLojaDiv.style.display = 'block';
  } else {
    outraLojaDiv.style.display = 'none';
  }
});