const display = document.querySelector('.js-display');
display.innerHTML = 'Turned off'

function on() {
  display.innerHTML = 'Turned on'
  let calculation = '';
  document.querySelectorAll('.js-button').forEach((button) => {
    button.addEventListener('click', () => {
      calculation += button.innerHTML;
      display.innerHTML = calculation;
    });
  });

  document.querySelector('.js-eval').addEventListener('click', () => {
    calculation = eval(calculation);
    display.innerHTML = calculation;
  });

  document.querySelector('.js-clear').addEventListener('click', () => {
    calculation = '';
    display.innerHTML = 'Cleared'
    setTimeout(() => {
      display.innerHTML = '';
    }, 700);
  });

  document.querySelector('.js-root').addEventListener('click', () => {
    calculation = Math.sqrt(parseFloat(calculation));
    display.innerHTML = calculation;
  });
}

function off() {
  display.innerHTML = 'Turned off'
  document.querySelector('.js-eval').addEventListener('click', () => {
    calculation = '';
    display.innerHTML = 'Turned off';
  });

  document.querySelectorAll('.js-button').forEach((button) => {
    button.addEventListener('click', () => {
      calculation = '';
      display.innerHTML = 'Turned off';
    });
  });

  document.querySelector('.js-clear').addEventListener('click', () => {
    calculation = '';
    display.innerHTML = 'Turned off';
  });
}

const onButton = document.querySelector('.js-on');
const offButton = document.querySelector('.js-off');

onButton.addEventListener('click', () => {
  on();
});

offButton.addEventListener('click', () => {
  off();
});