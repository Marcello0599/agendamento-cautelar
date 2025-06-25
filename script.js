document.getElementById('loja').addEventListener('change', function () {
  const outraLojaDiv = document.getElementById('outra-loja');
  if (this.value === 'Outra') {
    outraLojaDiv.style.display = 'block';
  } else {
    outraLojaDiv.style.display = 'none';
  }
});

document.getElementById('form-agendamento').addEventListener('submit', function (e) {
  e.preventDefault();
  // Simula envio com Firebase no futuro
  document.getElementById('mensagem-confirmacao').style.display = 'block';
  this.reset();
  document.getElementById('outra-loja').style.display = 'none';
});