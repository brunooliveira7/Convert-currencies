const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");
const footer = document.querySelector("main footer");

//cotação de moedas
const USD = 5.48;
const EUR = 6.01;
const GBP = 6.75;

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

  //verifica a moeda selecionada e converte
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

//function para converter a moeda
function convertCurrency(amount, prince, symbol) {
  try {
    //aplica a class que mostra o footer
    footer.classList.add("show-result")

  } catch (error) {
    //remove a class do footer - removendo da tela
    footer.classList.remove("show-result");
    console.log(error);
    alert("Não foi possível converter. Tente novamente mais tarde");
  }
}
