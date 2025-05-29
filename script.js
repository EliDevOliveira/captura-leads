const scriptURL = 'https://script.google.com/macros/s/AKfycbyOk4_7rI4jqeen1jvyJ2ncVAgnNJAs79BbHRdks6_6X0JW_wqzjidTgZhi1kSCPuxR/exec';
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
