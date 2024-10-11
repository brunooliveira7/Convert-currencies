const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");

//input - capta o valor digitado no input
//manipular o input para receber somente números
amount.addEventListener("input", () => {
  //verifica se o valor é padrão número
  const hasCharacterRegex = /\D+/g;

  //replace - substitui os caracteres não-numéricos por vazio
  //não permite digitar caracteres
  amount.value = amount.value.replace(hasCharacterRegex, "");
});

//Capta o evento de submit (enviar) do form
form.onsubmit = (event) => {
  event.preventDefault();
  console.log(currency.value);
};
