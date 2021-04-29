const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const btnSend = document.getElementById('Boto')


openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget)
        openPopup(popup)
    })
})

overlay.addEventListener('click', () => {
    const popups = document.querySelectorAll('.popup.active')
    popups.forEach(popup => {
        closePopup(popup)
    })

})
closePopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.modal')
        closePopup(popup)
    })
})

function openPopup(popup){
    if(popup == null) return
    popup.classList.add('active')
    overlay.classList.add('active')
}

function openPopup(popup){
    if(popup == null) return
    popup.classList.add('active')
    overlay.classList.add('active')
}



btnSend.addEventListener('click', () =>{
    btnSend.innerText = 'PERRITOS';

  
})




