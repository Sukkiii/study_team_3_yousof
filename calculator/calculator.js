const buttons = document.querySelectorAll('button')
const valueReturn = document.querySelector('input')

let currentValue = '0'

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    let currentValue = valueReturn.value;

    switch (button.dataset.type) {
      case 'operator':
      currentValue += buttonText;
      break;
      case 'ac':
        currentValue = '0';
        break;
      case 'plus-minus':
        currentValue = currentValue * -1;
        break;
      case 'percent':
        currentValue = `${currentValue * 0.01}%`;
        break;
      case 'equals':
        try {
          currentValue = eval(currentValue);
        } catch (error) {
          currentValue = 'error';
        }
        break;
      default:
        if (currentValue === '0' || currentValue === 'error') {
          currentValue = buttonText;
        } else currentValue += buttonText;
    }
    valueReturn.value = currentValue;
  })
})
