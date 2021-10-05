const tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
  const alvoEvento = event.target;
  const paiDoAlvo = alvoEvento.parentNode;

  paiDoAlvo.classList.add("fadeOut");

  setTimeout(function () {
    paiDoAlvo.remove();
  }, 500);
});

//pacientes.forEach(function (paciente) {
//  paciente.addEventListener("dblclick", function () {
//    this.remove();
//  });
//});
