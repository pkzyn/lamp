const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

let lampIsBroken = false

function lampOn () {
  if (lampIsBroken) {
    alert ('Poxa infelizmente a lâmpada quebrou :( ... Recarregue a página pra ter uma lâmpada novinha!  ; )')
    return
  }
    lamp.style.backgroundImage='url(./img/lampada-acesa.jpg)';
}
turnOn.addEventListener ('click', lampOn);


function lampOff () {
  if (lampIsBroken) {
    return
  }
  lamp.style.backgroundImage='url(./img/lampada.jpg)';
}
turnOff.addEventListener ('click', lampOff);


function lampBroken () {
  if (lampIsBroken) {
    return
  }
  
  lamp.style.backgroundImage='url(./img/lampada-quebrada.jpg)';
  lampIsBroken = true;

}
lamp.addEventListener ('dblclick', lampBroken);


lamp.addEventListener ('mouseenter', lampOn);
lamp.addEventListener ('mouseleave', lampOff);