import axios from 'axios'
import Noty from 'noty'
import {initAdmin} from './admin'

let addTocart = document.querySelectorAll('.add-to-cart')
let cartCounter = document.querySelector('#cartCounter')
//let  deleteData = document.querySelector('#deleteData')





const updateCart =(pizza)=>{

    axios.post('/update-cart', pizza).then(res=>{
        console.log(res)
     cartCounter.innerText = res.data.totalqty
      
     new Noty({
         type:'success',
         timeout:1000,
         text: ' Item added to cart ',
         progressBar: false,
       
     }).show();


    }).catch(err =>{
        new Noty({
            type:'error',
            timeout:1000,
            text: ' Something went wrong ',
            progressBar: false,
          
        }).show();
    })

}


addTocart.forEach((btn)=> {
btn.addEventListener('click', (f)=>{
    let pizza = JSON.parse(btn.dataset.pizza)
    updateCart(pizza)
    console.log(pizza)
})
})

const alertMsg = document.querySelector('#success-alert')
if(alertMsg) {
    setTimeout(() => {
        alertMsg.remove()
    }, 2000)
}

initAdmin()






