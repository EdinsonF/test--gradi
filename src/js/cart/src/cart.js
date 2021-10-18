import {domElements} from '../../utils/dom-element'
import API from '../../api/api'

export class Cart {

  addEvent(){
    const btnAdd = [...document.querySelectorAll(".js-increase ")];
    const btnMenos = [...document.querySelectorAll(".js-decrease")];
    const btnClear= [...document.querySelectorAll(".js-clear")];


    btnMenos.forEach(btn => {
      btn.addEventListener('click', this.decreaseQueantity);
    });

    btnAdd.forEach(btn => {
      btn.addEventListener('click', this.increaseQuantity);
    });

    btnClear.forEach(btn => {
      btn.addEventListener('click', this.clearQuantity);
    });
  }

   decreaseQueantity = async(event)=>{

    let node = event.target.parentNode;
    let itemVariant = {
      id_variant : node.dataset.id,
      quantity   : Number(node.querySelector('div').textContent) - 1
    }
    console.log(itemVariant);
    const cart = await API.updateCart(itemVariant);
    this.updateSection();

  }

  increaseQuantity = async (event) =>{

    let node = event.target.parentNode;
    let itemVariant = {
      id_variant : node.dataset.id,
      quantity   :  1
    }
    console.log(itemVariant);

    const cart = await API.addCart(itemVariant);
    this.updateSection();
  }

  clearQuantity = async (event) =>{
    let itemVariant = {
      id_variant : Number(event.target.dataset.id),
      quantity   : 0
    }

    const cart = await API.updateCart(itemVariant);
    console.log(cart);

    this.updateSection();

  }


  async updateSection (){
          
      const html = await API.updateShopifySection('side-cart');
      domElements().$sideCartContent.innerHTML = html;
      this.addEvent();

  }


  openModal =() =>{
    domElements().$sideCartOverlay.classList.add('active');
    this.updateSection();
  }

  closeModal(){
    domElements().$sideCartOverlay.classList.remove('active');
  }
}