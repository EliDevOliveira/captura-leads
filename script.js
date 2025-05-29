const scriptURL = 'COLE_AQUI_A_URL_DO_SCRIPT_DO_GOOGLE';
    const form = document.getElementById('contact-form');
    const status = document.getElementById('status');

    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
      })
      .then(response => {
        status.innerText = "Cadastro enviado com sucesso!";
        form.reset();
      })
      .catch(error => {
        status.innerText = "Erro ao enviar. Tente novamente.";
        console.error('Erro!', error.message);
      });
    });