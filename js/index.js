import {
  catalogList,
  modalProduct,
} from './elements.js'
import { openModal } from './openModal.js';
import { createCardProduct } from './createCardProduct.js';
import { renderListProduct } from './renderListProduct.js'
import { navigationListController } from './navigationListController.js';

const burgerMax = {
  title: 'Бургер Макс',
  price: 10000,
  weight: 5000,
  calories: 15000,
  description: 'Это сочная котлета из мраморной говядины, это свежеиспеченная булочка, это свежие фермерские овощи, таящий сыр и фирменный соус.',
  image: 'img/megaburger.jpg',
  ingredients: [
    'Пшеничная булочка',
    'Котлета из говядины',
    'Много сыра',
    'Листья салата',
    'Чипотл',
  ]
};




catalogList.addEventListener('click', (e) => {
  const target = e.target;
  if (target.closest('.product__detail') || target.closest('.product__image')) {
    openModal(burgerMax)
      ;
  }

});

modalProduct.addEventListener('click', (event) => {
  const target = event.target;

  if (target.closest('.modal__close') || target === modalProduct) {
    modalProduct.classList.remove('modal_open')
  }

})

const init = () => {
  renderListProduct();
  navigationListController();
};

init()