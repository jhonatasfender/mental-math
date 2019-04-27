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
        return a / b;
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

  let initCalc = () => {
    numberOne.valueRandom = getRandomInt(0, 10);
    numberTwo.valueRandom = getRandomInt(0, 10);

    numberOne.element.text(numberOne.valueRandom);
    numberTwo.element.text(numberTwo.valueRandom);

    let key = Math.floor(Math.random() * operators.length);

    symbol.element.html(operators[key].sign)
    result.answer = operators[key].method(numberOne.valueRandom, numberTwo.valueRandom);
  }

  let createElementIfRightOrIncorrect = (rightOrIncorrect, element, parent) => {
    element.hide();
    let div = $('<div/>').addClass('correcting-saying-correct')
    let span = $('<span/>')
      .addClass(rightOrIncorrect ? 'result-typed-right' : 'result-typed')
      .text(element.val())
    div.append(span)

    span = $('<span/>')
      .addClass('result-right')
      .html(' &#8594; ' + result.answer)
    div.append(span)
    parent.append(div)

    setTimeout(() => {
      initCalc();
      parent.find('div').remove()
      element.show()
        .val('')
        .focus();
    }, 3000);
  }

  let init = () => {
    initCalc();

    let input = result.element.find('input');
    input.focus()
      .keyup((e) => {
        let element = $(e.target);
        let parent = element.parent();
        parent.find('div').remove()
        element.show();

        createElementIfRightOrIncorrect(
          result.answer.toString().length <= element.val().length &&
          element.val() == result.answer,
          element, parent
        )
      })
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