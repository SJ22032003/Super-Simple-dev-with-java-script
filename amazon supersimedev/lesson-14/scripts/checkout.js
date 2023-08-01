import {
  cart,
  removeFromCart,
  calculateCartQuantity,
  updateQuantity,
  reviewQuantity
} from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';
let cartSummaryHTML = '';
cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  let matchingProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  cartSummaryHTML += `
      <div class="cart-item-container
        js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: Tuesday, June 21
        </div>
        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">
          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">
              $${formatCurrency(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity">
              <span>
              
                Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary js-update-link"
                data-product-id="${matchingProduct.id}">
                Update
              </span>

              <input type="number" class="quantity-input js-quantity-input-${matchingProduct.id}">

              <span class="save-quantity-link link-primary js-save-link"
                data-product-id="${matchingProduct.id}">
                Save
              </span>

              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                Delete
              </span>

            </div>
          </div>
          <div class="delivery-options" id="summary-option">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
          <form id="option-value">

            <div class="delivery-option">
            <label>
              <input type="radio" checked
              value= 0
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}" />
                </label>
              <div>
                  <div class="delivery-option-date">
                    Tuesday, June 21
                  </div>
                <div class="delivery-option-price">
                  FREE Shipping
                </div>
               </div>
               </div>
               <div class="delivery-option">
               <label>
                <input type="radio"
                value=4.99
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}" />
                </label>
               <div>

                <div class="delivery-option-date">
                  Wednesday, June 15
                </div>

                <div class="delivery-option-price">
                  $4.99 - Shipping
                </div>

              </div>
            </div>
            <div class="delivery-option">
            <label>
              <input type="radio"
                value=9.99
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}" />
                </label>
              <div>
                <div class="delivery-option-date">
                  Monday, June 13
                </div>
                <div class="delivery-option-price">
                  $9.99 - Shipping
                </div>

              </div>

            </div>
          </form>
          </div>
        </div>
      </div>
    `;
});

document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;

document.querySelectorAll(".js-delete-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    container.remove();
    updateCartQuantity();
    reviewQuantity();
    orderSummaryItem();

  });
});



function updateCartQuantity() {
  const cartQuantity = calculateCartQuantity();
  document.querySelector('.js-return-to-home-link')
    .innerHTML = `${cartQuantity} items`;
  reviewQuantity();
  calculateTotalPrice();
}

updateCartQuantity();


document.querySelectorAll('.js-update-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    console.log(container.classList)
    container.classList.add('is-editing-quantity');



    const quantityInput = document.querySelector(`.js-quantity-input-${productId}`);
    const quantityLabel = document.querySelector(`.js-quantity-label-${productId}`);
    quantityInput.value = quantityLabel.textContent;
    quantityInput.style.display = 'inline-block';


    quantityLabel.style.display = 'none';


    link.style.display = 'none';
    const saveLink = document.querySelector(`.js-save-link[data-product-id="${productId}"]`);
    saveLink.style.display = 'inline';
    calculateTotalPrice();
  });
});

document.querySelectorAll('.js-save-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    const quantityInput = document.querySelector(`.js-quantity-input-${productId}`);
    const newQuantity = Number(quantityInput.value);


    if (newQuantity < 0 || newQuantity >= 1000) {
      alert('Quantity must be at least 0 and less than 1000');
      return;
    }


    updateQuantity(productId, newQuantity);


    const quantityLabel = document.querySelector(`.js-quantity-label-${productId}`);
    quantityLabel.textContent = newQuantity;
    quantityLabel.style.display = 'inline';


    quantityInput.style.display = 'none';
    const updateLink = document.querySelector(`.js-update-link[data-product-id="${productId}"]`);
    console.log(updateLink)
    updateLink.style.display = 'inline';


    link.style.display = 'none';


    updateCartQuantity();
    orderSummaryItem();
    calculateTotalPrice();
  });
});


// Order Summary

function orderSummaryItem() {
  const orderSummaryItem = document.querySelector(".order-summary-item-quantity");
  let summaryItem = calculateCartQuantity();
  orderSummaryItem.innerHTML = `Item (${summaryItem}):`;


}
orderSummaryItem();
calculateTotalPrice();
// ... Existing code ...

// Calculate total price and insert into priceContainer
function calculateTotalPrice() {
  let totalPrice = 0;

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = products.find((product) => product.id === productId);

    if (matchingProduct) {
      const itemPrice = matchingProduct.priceCents;
      const quantity = cartItem.quantity;
      totalPrice += itemPrice * quantity;
    }
  });

  return totalPrice;
}

const totalPrice = calculateTotalPrice();

const priceContainer = document.querySelector(".payment-summary-money");
priceContainer.innerHTML = `$${formatCurrency(totalPrice)}`;

const summaryMoney = document.querySelector(".payment-before-tax");
summaryMoney.innerHTML = `$${formatCurrency(totalPrice)}`;
console.log(summaryMoney)

document.querySelector(".estimated-tax").innerHTML = `$${formatCurrency(totalPrice / 100 * 10)}`

document.querySelector(".summary-order-total").innerHTML = `$${formatCurrency(totalPrice + (totalPrice / 100 * 10))}`



document.querySelectorAll("#summary-option").forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    console.log(productId)
    const deliveryPrice = document.querySelectorAll("#summary-option");
    console.log(deliveryPrice.value)
  })
})
let totalDeliveryCharges = 0;
const deliveryInputCharges = document.querySelectorAll(".delivery-option-input");
const deliveryFormId = document.querySelectorAll("#option-value")
deliveryFormId.addEventListener('click', ()=>{
  deliveryInputCharges.forEach((item)=>{
    item.addEventListener('click', ()=>{
     if(item.checked){
       totalDeliveryCharges += Number(item.value)
     }
    })
   })
})


// console.log(document.querySelectorAll("#option-value"))
console.log(totalDeliveryCharges)