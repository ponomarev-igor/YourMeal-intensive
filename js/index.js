const catalogList = document.querySelector('.catalog__list');
const modalProduct = document.querySelector('.modal_product');
const product = {
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

const modalProductTitle = document.querySelector('.modal-product__title');
const modalProductImage = document.querySelector('.modal-product__image');
const modalProductDescription = document.querySelector('.modal-product__description');
const modalProductPriceCount = document.querySelector('.modal-product__price-count');
const ingredientsList = document.querySelector('.ingredients__list');
const ingredientsCalories = document.querySelector('.ingredients__calories');


modalProductTitle.textContent = product.title;
modalProductImage.src = product.image;
ingredientsList.textContent = ''

const ingredientsListItems = product.ingredients.map((item) => {
  const li = document.createElement('li');
  li.classList.add('ingredients__item');
  li.textContent = item;
  return li
});

ingredientsList.append(...ingredientsListItems)

modalProductDescription.textContent = product.description;
ingredientsCalories.textContent = `${product.weight}г, ккал ${product.calories}`;
modalProductPriceCount.textContent = product.price;





catalogList.addEventListener('click', (e) => {
  const target = e.target;
  if (target.closest('.product__detail') || target.closest('.product__image')) {
    modalProduct.classList.add('modal_open');
  }

});

modalProduct.addEventListener('click', (event) => {
  const target = event.target;

  if (target.closest('.modal__close') || target === modalProduct) {
    modalProduct.classList.remove('modal_open')
  }

})

