document.getElementById('loja').addEventListener('change', function () {
  document.getElementById('outra-loja').style.display = this.value === 'Outra' ? 'block' : 'none';
});

document.getElementById('form-agendamento').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    vendedor: form.vendedor.value,
    loja: form.loja.value === 'Outra' ? form.outra_loja.value : form.loja.value,
    placa: form.placa.value,
    data: form.data.value,
    horario: form.horario.value,
    timestamp: new Date().toISOString()
  };

  const refPath = `agendamentos/${data.data}/${data.horario.replace(':', '-')}`;
  firebase.database().ref(refPath).set(data).then(() => {
    document.getElementById('mensagem-confirmacao').style.display = 'block';
    form.reset();
    document.getElementById('outra-loja').style.display = 'none';
  }).catch((err) => {
    alert('Erro ao agendar: ' + err.message);
  });
});
