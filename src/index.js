import {Cart} from "./js/cart/index.js"
import {domElements} from './js/utils/dom-element.js'

document.addEventListener('DOMContentLoaded', () => {
  
  const cart = new Cart();
  
  domElements().$cartIconBubble.addEventListener('click', cart.openModal);
  domElements().$sideCartCloseButtom.addEventListener('click', cart.closeModal);


})