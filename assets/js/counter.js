//DICHIARAZIONE VARIABILI
const increaseButton = document.querySelector("#increase");
const decreaseButton = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");
const counterDisplay = document.querySelector("#counter");
const countList = document.querySelector(".counterList");
const saveButton = document.querySelector("#save");

let counter = 0; // CONTATORE DISPLAY
let i = 0; //CONTATORE MAX SALVATAGGI

// INCREMENTA DI UN NUMERO
increaseButton.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});

// DECREMENTA DI UN NUMERO
decreaseButton.addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = counter;
});

// RIPORTA A ZERO IL CONTATORE
resetButton.addEventListener("click", () => {
  counter = 0;
  counterDisplay.textContent = counter;
});

// SALVA IL CONTATORE ATTUALE CON LIMITE DI 5 SALVATAGGI CON BLOCCAGGIO DEL PULSANTE SAVE
saveBtn.addEventListener("click", () => {
  const counterValue = document.createElement("p");
  if (i < 3) {
    counterValue.textContent = "Sei arrivato a: " + counter;
    let x = countList.appendChild(counterValue);
    x.setAttribute("id", "savedValue" + i);
    x.setAttribute("class", "savedValue");
    i++;
  } else {
    countList.appendChild(counterValue).textContent =
      " Hai raggiunto il limite di salvataggi! ";
    saveBtn.setAttribute("id", "disable");
    counterValue.setAttribute("id", "disable");
  }
});

// ELIMINA I SALVATAGGI
clearBtn.addEventListener("click", () => {
  while (countList.hasChildNodes()) {
    countList.removeChild(countList.firstChild);
  }
  i = 0;
  saveButton.setAttribute("id", "save");
});
