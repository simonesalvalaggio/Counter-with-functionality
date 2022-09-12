const decreaseBtn = document.createElement("span");
const display = document.createElement("div");
const increaseBtn = document.createElement("span");
const resetBtn = document.createElement("span");
const saveBtn = document.createElement("span");
const clearBtn = document.createElement("span");

// CREA IL PULSANTE -
decreaseBtn.textContent = "-";
container.appendChild(decreaseBtn).setAttribute("id", "decrease");

// CREA IL DISPLAY PER IL CONTATORE NUMERICO
display.textContent = "0";
container.appendChild(display).setAttribute("id", "counter");

// CREA IL PULSANTE +
increaseBtn.textContent = "+";
container.appendChild(increaseBtn).setAttribute("id", "increase");

// CREA IL PULSANTE RESET
resetBtn.textContent = "RESET";
container.appendChild(resetBtn).setAttribute("id", "reset");

// CREA IL PULSANTE SALVA
saveBtn.textContent = "SAVE";
container.appendChild(saveBtn).setAttribute("id", "save");

// CREA IL PULSANTE CLEAR
clearBtn.textContent = "CLEAR";
container.appendChild(clearBtn).setAttribute("id", "clear");
