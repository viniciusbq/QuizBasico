var fperg1 = document.getElementsByName('perg1');
var fperg2 = document.getElementsByName('perg2');
var fperg3 = document.getElementsByName('perg3');
var fperg4 = document.getElementsByName('perg4');
var fperg5 = document.getElementsByName('perg5');
var fperg6 = document.getElementsByName('perg6');
var fperg7 = document.getElementsByName('perg7');
var fperg8 = document.getElementsByName('perg8');
var fperg9 = document.getElementsByName('perg9');
var fperg10 = document.getElementsByName('perg10');
var res = document.querySelector('.res');
var help = document.querySelector('#logo');

function conferir() {
  var acertos = 0;
  if (fperg1[0].checked) {
    respo = 'Errada!';
  } else if (fperg1[1].checked) {
    respo = 'Errada!';
  } else if (fperg1[2].checked) {
    respo = 'Correto!';
    acertos++;
  } else if (fperg1[3].checked) {
    respo = 'Errada!';
  }

  if (fperg2[0].checked) {
    respo = 'Correto!';
    acertos++;
  } else if (fperg2[1].checked) {
    respo = 'Errada!';
  } else if (fperg2[2].checked) {
    respo = 'Errada!';
  } else if (fperg2[3].checked) {
    respo = 'Errada!';
  }

  if (fperg3[0].checked) {
    respo = 'Errada!';
  } else if (fperg3[1].checked) {
    respo = 'Correto!';
    acertos++;
  } else if (fperg3[2].checked) {
    respo = 'Errada!';
  } else if (fperg3[3].checked) {
    respo = 'Errada!';
  }

  if (fperg4[0].checked) {
    respo = 'Errada!';
  } else if (fperg4[1].checked) {
    respo = 'Correto!';
    acertos++;
  } else if (fperg4[2].checked) {
    respo = 'Errada!';
  } else if (fperg4[3].checked) {
    respo = 'Errada!';
  }

  if (fperg5[0].checked) {
    respo = 'Errada!';
  } else if (fperg5[1].checked) {
    respo = 'Errada!';
  } else if (fperg5[2].checked) {
    respo = 'Errada!';
  } else if (fperg5[3].checked) {
    respo = 'Correto!';
    acertos++;
  }
  if (fperg6[0].checked) {
    respo = 'Errada!';
  } else if (fperg6[1].checked) {
    respo = 'Errada!';
  } else if (fperg6[2].checked) {
    respo = 'Correto!';
    acertos++;
  } else if (fperg6[3].checked) {
    respo = 'Errada!';
  }

  if (fperg7[0].checked) {
    respo = 'Correto!';
    acertos++;
  } else if (fperg7[1].checked) {
    respo = 'Errada!';
  } else if (fperg7[2].checked) {
    respo = 'Errada!';
  } else if (fperg7[3].checked) {
    respo = 'Errada!';
  }

  if (fperg8[0].checked) {
    respo = 'Errada!';
  } else if (fperg8[1].checked) {
    respo = 'Errada!';
  } else if (fperg8[2].checked) {
    respo = 'Errada!';
  } else if (fperg8[3].checked) {
    respo = 'Correto!';
    acertos++;
  }

  if (fperg9[0].checked) {
    respo = 'Correto!';
    acertos++;
  } else if (fperg9[1].checked) {
    respo = 'Errada!';
  } else if (fperg9[2].checked) {
    respo = 'Errada!';
  } else if (fperg9[3].checked) {
    respo = 'Errada!';
  }

  if (fperg10[0].checked) {
    respo = 'Errada!';
  } else if (fperg10[1].checked) {
    respo = 'Errada!';
  } else if (fperg10[2].checked) {
    respo = 'Correto!';
    acertos++;
  } else if (fperg10[3].checked) {
    respo = 'Errada!';
  }
  if (acertos >= 6) {
    res.innerHTML = `Parabéns \u{1F929} Você acertou ${acertos} questões!`;
  } else if (acertos >= 1 && acertos < 6) {
    res.innerHTML = `\u{1F61F} Infelizmente você acertou apenas ${acertos} questões!`;
  } else {
    res.innerHTML = `\u{1F61E} Infelizmente você não acertou nenhuma questão!`;
  }
}
function ajuda() {
  alert('Ajuda em que cara?');
}
