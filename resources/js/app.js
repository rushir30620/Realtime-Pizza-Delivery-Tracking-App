import axios from 'axios';
import Noty from 'noty';

let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter = document.querySelector('#cartCounter')

function updateCart(pizza){
    axios.post('/update-cart', pizza).then(res => {
        cartCounter.innerText = res.data.totalQty
        new Noty({
            type: 'success',
            timeout: 1000,
            text: "Item added to cart",
            progressBar: false
          }).show();
    }).catch(err => {
        new Noty({
            type: 'error',
            timeout: 1000,
            text: "Something went wrong",
            progressBar: false
          }).show();
    })
}

addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
    })
})

// let addPizza = document.querySelector('.addPizza')
// let qty = document.querySelector('#qty')
// let subPizza = document.querySelector('.subPizza')
// let pizzaprice = document.querySelector('#pizzaprice')

// function increasePizza(addPizzaQty) {
//     axios.post('/increase-pizza', addPizzaQty).then(res => {
//         // console.log(res)
//         qty.innerText = res.data.qty
//         pizzaprice.innerText = res.data.price
//     })
// }


//     addPizza.addEventListener('click', (e) => {
//         let addPizzaQty = addPizza.dataset.addpizzaqty
//         console.log(addPizzaQty)
//         increasePizza(addPizzaQty)
//     })