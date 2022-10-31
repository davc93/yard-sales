export const cart = {
    items:[

    ],
    user:'Diego'
}
export function Cart() {
    
    
    const addToCart = (product) => {
        
        cart.items.push(product)
        showNumberItems()
    }
    const renderCart = () => {
        console.log(cart);
        const myOrderContent = document.createElement('div')
        myOrderContent.classList.add('my-order-content')
        cart.items.forEach((product)=>{
            const shoppingCart = document.createElement('div')
            shoppingCart.classList.add('shopping-cart')
            const figure = document.createElement('figure')
            const img = document.createElement('img')
            img.src = product.images[0]
            img.alt = product.title
            const title = document.createElement('p')
            title.textContent = product.title
            const price = document.createElement('p')
            price.textContent = product.price
            const close = document.createElement('img')
            close.src = '/icons/icon_close.png'
            close.alt = 'close'
            close.addEventListener('click',()=>{
                removeItem(product)
            })

            figure.append(img)
            shoppingCart.append(figure,title,price,close)
            console.log(shoppingCart);
            myOrderContent.append(shoppingCart)

        })
        if(document.querySelector('.my-order-content')){
            clearCartElement()
        }
        
        document.querySelector('.title-container').insertAdjacentElement('afterend',myOrderContent)


    }
    const showNumberItems = () => {

        document.querySelector('.navbar-shopping-cart > div').innerHTML = cart.items.length
    }

    const clearCartElement = () => {
        document.querySelector('.my-order-content').remove()
    }
    const removeItem = (productSearched) =>{
        const index = cart.items.findIndex((product)=> productSearched.id == product.id)
        cart.items.pop(index)
        renderCart()
        showNumberItems()
        


    }
    return {
        cart,
        addToCart,
        renderCart,
        removeItem

    }
}