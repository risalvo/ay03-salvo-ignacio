const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const btnSend = document.getElementById('Boto')
const color = document.getElementById('titulo1');
const box = document.getElementById('cambiante')



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
    color.innerText = 'PERRITOS';

  
})



color.addEventListener("mouseenter", function( event ) {

  event.target.style.color = "purple";

  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

box.addEventListener("mouseenter", function( event ) {

    event.target.style.color = "green";

    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
