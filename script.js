const amount = document.getElementById("amount"); //input
const currency = document.getElementById("currency"); //select
const form = document.querySelector("form");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

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
      convertCurrency(amount.value, USD, "US$"); //add footer
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

//function para converter a moeda com 3 parâmetros
function convertCurrency(amount, prince, symbol) {
  try {
    //muda o texto da primeira linha do footer - cotação
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(prince)}`;

    //calcula o total para exibir no resltudo
    let total = amount * prince;
    //muda o texto do resultado - total da conversão
    result.textContent = total;

    //aplica a class que mostra o footer - resultado
    footer.classList.add("show-result");
  } catch (error) {
    //se der errado - remove a class do footer - removendo da tela
    footer.classList.remove("show-result");

    console.log(error);
    alert("Não foi possível converter. Tente novamente mais tarde.");
  }
}

//formata a moeda em real
function formatCurrencyBRL(value) {
  //converte para número e formata (toLocaleString) para R$
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
