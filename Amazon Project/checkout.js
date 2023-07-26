
const myCart = JSON.parse(localStorage.getItem('myCart'))


const cartValue = JSON.parse(localStorage.getItem('cartValue'))


if(cartValue === null){
  document.querySelector('.checkout-out').innerHTML = '0';
}
else{
  document.querySelector('.checkout-out').innerHTML = cartValue;
}


let productsHTM = '';

myCart.forEach((value)=>{

 

 productsHTM += `<div class="left-container">

  <div class="left-inner-container">

    <div class="delivery-date">
      Delivery date: Tuesday, July 25
    </div>

    <div class="left-right-container">

      <div class="product-image">
        <img src="${value.product.images[0]}" alt="">
      </div>

      <div class="product-details">
        <h4>${value.product.title}</h4>
        <p class="price">$${value.product.price}</p>
        <div class="price-quantity">
          <div>Quantity:${value.product.quantity} <span class="quantity-update">Updte</span><span class="quantity-delete">Delete</span>
          </div>

        </div>
      </div>

      <div class="right-product-container">
        <div class="delivery-summary">Choose a delivery option</div>

        <div class="date-free-shiping">
          <input type="radio" class="first-input">
          <div class="day-date">
            <p class="delivery-option-date">Tuesday, July 25</p>
            <p class="delivery-option-shiping">FREE Shipping</p>
          </div>
        </div>

        <div class="date-free-shiping">
          <input type="radio" class="first-input">
          <div class="day-date">
            <p class="delivery-option-date">Wednesday, July 19</p>
            <p class="delivery-option-shiping">$4.99 Shipping</p>
          </div>
        </div>

        <div class="date-free-shiping">
          <input type="radio" class="first-input">
          <div class="day-date">
            <p class="delivery-option-date">Monday, July 17</p>
            <p class="delivery-option-shiping">$9.99 Shipping</p>
          </div>
        </div>
      </div>

    </div>
  </div>`
});

const jsCartSummary = document.querySelector('.js-cart-summary').innerHTML = productsHTM;