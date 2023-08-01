import { cart, addToCart} from '../data/cart.js';
import { products } from "../data/output.js";
// localStorage.clear();
// let myCart = localStorage.getItem("myCart") || [];
// const myCart = JSON.parse(localStorage.getItem('myCart')) || [];
// console.log(myCart)
let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
  <div class="div-1" id="grid-container">
      <div class="box-item1" id="box-item">
        <div class="shocks-div">
          <img class="shocks-image" src="${product.images[0]}" alt="shocks image">
        </div>
      </div>
      <div class="box-item2" id="box-item">
    ${product.title}
      </div>
      <div class="box-item3" id="box-item">
        <img class="product-start-rating" src="images/rating-${Math.floor(product.rating) * 10}.png" alt="">
        <div class="star-rating">${product.stock}</div>
      </div>
      <div class="box-item4" id="box-item">
       $${(product.price / 100).toFixed(2)}
      </div>
      <div class="box-item5" id="box-item">
        <select class="product-select-${product.id}">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div class="box-item6" id="box-item"></div>
      <div class="box-item7" id="box-item">
        <button class="product-add-to-cart js-add-to-cart-button" data-product-id="${product.id}">Add to Cart</button>
      </div>
    </div>

  `;
 
});

document.querySelector(".js-product-cantainer").innerHTML = productsHTML;







// JSON.parse(localStorage.getItem('myCart')) || [];
 function updateCartQunatity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const cartValueElement = document.querySelector(".js-cart-value").innerHTML = cartQuantity;
}

const addToCartButton = document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
  button.addEventListener('click', () => {
    // myCart = localStorage.getItem("myCart");
    // const myCart = JSON.parse(localStorage.getItem('myCart'))
    // console.log(myCart, "second")
    const productId = button.dataset.productId;
   
     addToCart(productId);
     updateCartQunatity();
    // const product = products.find((p) =>  p?.id === parseInt(productId));

  // const product =   products.find((p)=>{
   
  //       return p?.id === parseInt(productId)
  //   })

    
    // const index = myCart?.findIndex((p)=>p?.product?.id === parseInt(productId));
  //  console.log(index)
    // console.log(product)
    // console.log(myCart)
   
    // let matchingItem;
    // myCart?.forEach((item) => {
     
    //   if (parseInt(productId) === item?.product?.id) {
    //     matchingItem = item;
        
    //   }
    // });


    // const quantitySelector = document.querySelector(`.product-select-${productId}`);
    // const quantity = Number(quantitySelector.value);
   

    // if (matchingItem) {
      
    //   matchingItem.product.quantity = matchingItem.product.quantity + quantity;
     
    //   cart[index] = matchingItem;
    
     
    // } else {
      
    //   cart.push({
    //     product: {
    //       ...product,
    //       quantity: quantity,
    //     }
    //   });
    // }
   
    // let cartQuantity = 0; 
    // cart.forEach((item) => {
    //   cartQuantity += item.product.quantity;
    // });
    
    // const cartValueElement = document.querySelector('.js-cart-value');
    // cartValueElement.innerHTML = cartQuantity;
    // localStorage.setItem('cartValue', cartQuantity);
    // localStorage.setItem('myCart', JSON.stringify(cart));
  });
});





