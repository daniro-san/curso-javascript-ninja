(function () {
  "use strict";
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  var $screen = document.querySelector('input[data-js="calc-value"]');
  var $numbersButtons = document.querySelectorAll(
    '[data-js="number"], [data-js="actions"]'
  );
  var $resultButton = document.querySelector('[data-js="result"]');
  var $clearButton = document.querySelector('[data-js="clear"]');

  $clearButton.addEventListener("click", () => changeText("0"), false);
  $numbersButtons.forEach((button) =>
    button.addEventListener(
      "click",
      () => updateCalculator(button.textContent),
      false
    )
  );
  $resultButton.addEventListener("click", calculateResult, false);

  function calculateResult() {
    if (lastValidValue($screen.value)) {
      changeText(eval($screen.value));
    } else {
      var newValue = $screen.value.split("");
      newValue.pop();
      changeText(eval(newValue.join("")));
    }
  }

  function isAction(value) {
    return ["+", "-", "/", "*"].includes(value);
  }

  function lastValidValue(text) {
    return !isAction(text[text.length - 1]);
  }

  function updateCalculator(value) {
    if (+$screen.value === 0) {
      changeText(value);

      return;
    }

    if (isAction($screen.value[$screen.value.length - 1]) && isAction(value)) {
      let size = $screen.value.length;
      let valueArray = $screen.value.split("");
      valueArray[size - 1] = value;
      let newValue = valueArray.join("");
      changeText(newValue);

      return;
    }

    changeText($screen.value.concat(value));
  }

  function changeText(text) {
    $screen.value = text;
  }
})();
