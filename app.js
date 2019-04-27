(() => {
  'use strict';

  var operators = [{
      sign: "+",
      method: function (a, b) {
        return a + b;
      }
    },
    {
      sign: "-",
      method: function (a, b) {
        return a - b;
      }
    },
    {
      sign: "&times;",
      method: function (a, b) {
        return a * b;
      }
    },
    {
      sign: "&divide;",
      method: function (a, b) {
        return a - b;
      }
    }
  ];

  var numberOne = {
    element: $('.number-one'),
    valueRandom: null
  }
  var numberTwo = {
    element: $('.number-two'),
    valueRandom: null
  }
  var symbol = {
    element: $('.symbol'),
    valueRandom: null
  }
  var bar = {
    element: $('.bar'),
    valueRandom: null
  }
  var result = {
    element: $('.result'),
    valueRandom: null,
    answer: null
  }

  let init = () => {
    numberOne.valueRandom = getRandomInt(0, 10);
    numberTwo.valueRandom = getRandomInt(0, 10);

    numberOne.element.text(numberOne.valueRandom);
    numberTwo.element.text(numberTwo.valueRandom);

    let key = Math.floor(Math.random() * operators.length);

    symbol.element.html(operators[key].sign)
    result.answer = operators[key].method(numberOne.valueRandom, numberTwo.valueRandom);
    result.element.find('input').val(result.answer)
  }

  let getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  $(document).ready(() => {
    init();
  })

})();