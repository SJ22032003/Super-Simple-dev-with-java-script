import { cart, removeFromCart, saveToStorage } from "../data/cart.js";
import { products } from "../data/output.js";

saveToStorage();

// const cartValue = JSON.parse(localStorage.getItem("cartValue"));

// if (cartValue === null) {
//   document.querySelector(".checkout-out").innerHTML = "0";
// } else {
//   document.querySelector(".checkout-out").innerHTML = cartValue;
// }

let cartSummaryHTML = "";
cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    if (productId === product.id) {
      matchingProduct = product;
    }
  });

  cartSummaryHTML +=
   `<div class="left-container js-cart-item-container-${matchingProduct.id}">
   
    
       <div class="left-inner-container">
    
         <div class="delivery-date">
           Delivery date: Tuesday, July 25
         </div>

         <div class="left-right-container">

           <div class="product-image">
             <img src="${matchingProduct.images[0]}" alt="">
           </div>

           <div class="product-details">
             <h4>${matchingProduct.title}</h4>
             <p class="price">$${matchingProduct.price}</p>
             <div class="price-quantity">
               <div class="update-container">
          
          
                 Quantity:
                 <div data-product-id="${matchingProduct.id}" class="update-quantity"> 
                   ${cartItem.quantity} 
                   <span class="update-button" data-product-id="${matchingProduct.id}">Updte</span>
                 </div>
            
               <span class="quantity-delete" data-product-id="${matchingProduct.id}">Delete</span>
             </div>
           </div>
         </div>
         <div class="right-product-container">
           <div class="delivery-summary">Choose a delivery option</div>
           <div class="date-free-shiping">
             <input type="radio" class="first-input" name="delivery-option-${matchingProduct.id}">
             <div class="day-date">
               <p class="delivery-option-date">Tuesday, July 25</p>
               <p class="delivery-option-shiping">FREE Shipping</p>
             </div>
           </div>
           <div class="date-free-shiping">
             <input type="radio" class="first-input" name="delivery-option-${matchingProduct.id}">
             <div class="day-date">
               <p class="delivery-option-date">Wednesday, July 19</p>
               <p class="delivery-option-shiping">$4.99 Shipping</p>
               </div>
             </div>
    
             <div class="date-free-shiping">
               <input type="radio" class="first-input" name="delivery-option-${matchingProduct.id}">
               <div class="day-date">
                 <p class="delivery-option-date">Monday, July 17</p>
                 <p class="delivery-option-shiping">$9.99 Shipping</p>
               </div>
           </div>
           </div>
    
         </div>
  </div>`;
});

let jsCartSummary = document.querySelector(".js-cart-summary");
jsCartSummary.innerHTML = cartSummaryHTML;

document.querySelectorAll(".quantity-delete").forEach((link)=>{
  link.addEventListener('click', ()=>{

    const productId = link.dataset.productId;
    console.log(productId)
    removeFromCart(productId);
   
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    console.log(container)
   container.remove();
  
  })    
 
})

// function updateCartSummary() {
//   let productsHTM = "";
//   cart = JSON.parse(localStorage.getItem("myCart"));

//   cart.forEach((value) => {
//     productsHTM += `<div class="left-container">

//     <div class="left-inner-container">

//       <div class="delivery-date">
//         Delivery date: Tuesday, July 25
//       </div>

//       <div class="left-right-container">

//         <div class="product-image">
//           <img src="${value.product.images[0]}" alt="">
//         </div>

//         <div class="product-details">
//           <h4>${value.product.title}</h4>
//           <p class="price">$${value.product.price}</p>
//           <div class="price-quantity">
//             <div class="update-container">

//               Quantity:

//               <div data-product-id="${value.product.id}" class="update-quantity">
//                 ${value.product.quantity}
//                 <span class="update-button" data-product-id="${value.product.id}">Updte</span>
//               </div>

//               <span class="quantity-delete" data-product-id="${value.product.id}">Delete</span>
//             </div>

//           </div>
//         </div>

//         <div class="right-product-container">
//           <div class="delivery-summary">Choose a delivery option</div>

//           <div class="date-free-shiping">
//             <input type="radio" class="first-input">
//             <div class="day-date">
//               <p class="delivery-option-date">Tuesday, July 25</p>
//               <p class="delivery-option-shiping">FREE Shipping</p>
//             </div>
//           </div>

//           <div class="date-free-shiping">
//             <input type="radio" class="first-input">
//             <div class="day-date">
//               <p class="delivery-option-date">Wednesday, July 19</p>
//               <p class="delivery-option-shiping">$4.99 Shipping</p>
//             </div>
//           </div>

//           <div class="date-free-shiping">
//             <input type="radio" class="first-input">
//             <div class="day-date">
//               <p class="delivery-option-date">Monday, July 17</p>
//               <p class="delivery-option-shiping">$9.99 Shipping</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>`;

//   });
//   let jsCartSummary = document.querySelector(".js-cart-summary");
//   jsCartSummary.innerHTML = productsHTM;
// }

// updateCartSummary();

// const cartSummaryContainer = document.querySelector(".js-cart-summary");

// cartSummaryContainer.addEventListener("click", (event) => {
//   const target = event.target;

//   if (target.classList.contains("quantity-delete")) {
//     const delId = target.dataset.productId;

//     if (delId) {
//       myCart = myCart.filter((p) => p.product?.id !== parseInt(delId));
//       localStorage.setItem("myCart", JSON.stringify(myCart));
//       updateCartSummary();
//       // let cartSummary = document.querySelector('.js-cart-summary');
//       // console.log(cartSummary)
//       // let store = cartSummary;
//       // cartSummary.appendChild = store;
//       // cartSummary.render(store)
//     }
//   }
// });

// function addSaveButton(productId) {
//   const updateButton = document.querySelector(
//     `[data-product-id="${productId}"]`
//   );
//   updateButton.innerHTML = `
//     <input type="number" id="quantity-${productId}" name="quantity" min="-20" max="100">
//     <button class="save-button" id="save-button-${productId}">save</button>
//   `;
//   saveFun(productId);
// }

// function saveFun(productId) {
//   const saveButton = document.querySelector(`#save-button-${productId}`);
//   saveButton.addEventListener("click", () => getValue(productId));
//   // console.log("click 1");

//   function getValue(productId) {
//     let inputQuantity = document.querySelector(`#quantity-${productId}`)?.value;
//     updateSaveQuantity(inputQuantity)
//     // console.log(inputQuantity);
//   }
// }

// const updateQuantity = document
//   .querySelectorAll(".update-button")
//   .forEach((button) => {
//     button.addEventListener("click", () => {
//       const id1 = button.dataset.productId;
//       document.querySelectorAll(".update-quantity").forEach((updateButton) => {
//         const updateId = updateButton.dataset.productId;
//         if (parseInt(id1) === parseInt(updateId)) {
//           addSaveButton(updateId);
//         }
//       });
//     });
//   });

//   function updateSaveQuantity(get){
//     myCart.forEach((value)=>{
//       let qunatityValue = value.product.quantity;
//      qunatityValue =  qunatityValue += parseInt(get);
//      console.log(qunatityValue)
//      localStorage.setItem("myCart", JSON.stringify(myCart));
//     })
//   }
//   updateSaveQuantity();
