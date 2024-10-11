const amount = document.getElementById("amount");

//input - capta o valor digita no input
//manipular o input para receber somente números
amount.addEventListener("input", () => {
  //verifica se o valor é padrão número
  const hasCharacterRegex = /\D+/g;

  //replace - substitui os caracteres não-numéricos por vazio
  //não permite digitar caracteres
  amount.value = amount.value.replace(hasCharacterRegex, "");
  
});
