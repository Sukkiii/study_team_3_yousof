const buttons = document.querySelectorAll('button')
const valueReturn = document.querySelector('input')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    let currentValue = valueReturn.value;

    switch (button.dataset.type) {
      case "operator":
      currentValue += buttonText;
      break;
      case "ac":
        currentValue = "0";
        break;
      case "plus-minus":
        currentValue = currentValue * -1;
        break;
      case "percent":
        currentValue = `${currentValue * 0.01}%`;
        break;
      case "equals":
        console.log("equals");
        break;
      default:
        if (currentValue === "0") {
          currentValue = buttonText;
        } else currentValue += buttonText;
    }
    valueReturn.value = currentValue;
  })
})
