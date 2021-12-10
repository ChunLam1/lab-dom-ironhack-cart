// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span');
  let articleSum = price.textContent * quantity.value;
  subTotal.textContent = articleSum;
  return articleSum;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  // const secondProduct = document.querySelector('.product2');
  // updateSubtotal(secondProduct);
  const allProduct = document.querySelectorAll('.product');
  // for (let i=0; i <allProduct.length;i++){
  //   updateSubtotal(allProduct[i]);
  allProduct.forEach((product) => updateSubtotal(product));
  // ITERATION 3
  //... your code goes here
  const cartTotal = document.querySelector('#total-value span');
  let Totalprice = 0;
  for (let i = 0; i < allProduct.length; i++) {
    Totalprice += updateSubtotal(allProduct[i]);

    cartTotal.innerHTML = Totalprice;
  }
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productChild = document.querySelectorAll('.product td');
  const child = productChild.children;
  console.log('The target in remove is:', target);
  let oldChild = productChild.removeChild(child);

  //... your code goes here
  window.addEventListener('load', () => {
    const removBtn = document.querySelectorAll('.btn-remove');
    for (let i = 0; i < removBtn.length; i++) {
      removBtn.addEventListener('click', removeProduct);
    }
  });
}
// ITERATION4 !!!Ne fonctionne pas !!!

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
