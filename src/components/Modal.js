export const Modal = () => {
    const modal = document.createElement('div')
    modal.id = 'modal'
    const content = document.createElement('div')
    content.innerHTML =
    `
    
    `
    const close = document.createElement('button')
    close.addEventListener('click',()=>{
        modal.remove()
    })
    return modal
}