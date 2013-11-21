jQuery(function ($) {
  var number = 1;
  $('#question-number').text(number);

  function showNGMessage () {
    $('#message').text('Boo, boo!!!');
  };

  function clearNGMessage () {
    $('#message').text('Push!');
  };

  function setNextNumber () {
    clearNGMessage();
    number = number + 1;
    $('#question-number').text(number);
  };

  $('#fizz').on('click', function () {
    if (number % 3 === 0 && number % 5 !== 0) {
      setNextNumber();
    }
    else {
      showNGMessage();
    }
  });
  $('#buzz').on('click', function () {
    if (number % 3 !== 0 && number % 5 === 0) {
      setNextNumber();
    }
    else {
      showNGMessage();
    }
  });
  $('#fizzbuzz').on('click', function () {
    if (number % 3 === 0 && number % 5 === 0) {
      setNextNumber();
    }
    else {
      showNGMessage();
    }
  });
  $('#other').on('click', function () {
    if (number % 3 !== 0 && number % 5 !== 0) {
      setNextNumber();
    }
    else {
      showNGMessage();
    }

  });
});
