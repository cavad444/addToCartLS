import database from "./database.js";
const pizzas = document.querySelector('.pizzas-section');
const cart = document.querySelector('.cart');
const plusIcon = document.querySelector('.plus-icon');

cart.style.display = 'none';

plusIcon.addEventListener('click', () => {
    if(cart.style.display === "none"){
        if(cart.innerHTML.length === 0){

        }{
            cart.style.display = "block";
        }       
    }else{
        cart.style.display = "none"
    }
})

function showPizzas(database, pizzas){
    database.forEach(pizza => {
    pizzas.appendChild(createPizza(pizza));
});
}

function createPizza(pizza){
    const pizzaDiv = document.createElement("div");
    pizzaDiv.classList.add("pizza");
    pizzaDiv.innerHTML =  `
        
    
    <span class="box-label name">${pizza.name} </span>
    <span class="box-label position">${pizza.price}$</span>
    <span class="box-label salary">Salary: ${pizza.size}cm</span>
    <button type="submit" class="btn btn-primary add-button">Add</button>
`;
 return pizzaDiv;
}

function showCartItems(){
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    cart.innerHTML = '';
    cartItems.forEach((item) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
          <span class="item-span item-name">${item.name}</span>
          <span class="item-span item-price">${item.price}$</span>
          <span class="item-span remove-item"><i class="fa-solid fa-xmark"></i></span>
        `;
        cart.appendChild(itemDiv);
      });
}



showPizzas(database, pizzas);

localStorage.setItem('cartItems', JSON.stringify([]));


const addButtons = document.querySelectorAll('.add-button');

addButtons.forEach(addButton => {
    addButton.addEventListener('click', (e) => {
        const pizzaName = e.target.parentElement.querySelector('.name').textContent;
        const pizzaPrice = e.target.parentElement.querySelector('.position').textContent;
        const pizzaSize = e.target.parentElement.querySelector('.salary').textContent;
      
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        cartItems.push({ name: pizzaName, price: pizzaPrice, size: pizzaSize });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        showCartItems();
    });
    
})