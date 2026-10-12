let calculation = localStorage.getItem('calculation') || '';
let isResetMode = false; 

displayResult();

function updateCalculation(inputButton) {
  const isNumber = ![' + ', ' - ', ' * ', ' / '].includes(inputButton);
  
  if (isResetMode && isNumber) {
    calculation = inputButton;
  } else {
    calculation += inputButton;
  }
  
  isResetMode = false;
  localStorage.setItem('calculation', calculation);
  displayResult();
}

function displayResult() {
  const displayElement = document.querySelector('.result-display');
  
  if (calculation === '') {
    displayElement.innerHTML = '&nbsp;';
  } else {
    displayElement.innerHTML = calculation;
  }
}
