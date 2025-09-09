let calculation = localStorage.getItem('calculation') || '';

calculatorScreen();

function updateCalculator(value){
  calculation += value;

calculatorScreen();

localStorage.setItem('calculation', calculation);
}

function calculatorScreen(){
  document.querySelector('.js-screen').innerHTML = calculation;
}