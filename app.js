// Modal 

let modal  = document.getElementById('major-modal');
let majorModalLink = document.getElementById('major-circle');
let modalClose = document.getElementById('close-modal');

majorModalLink.addEventListener('click', openModal);

modalClose.addEventListener('click', closeModal);

window.addEventListener('click', closeModalOutside);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function closeModalOutside(e) {
    if(e.target === modal) {
    modal.style.display = 'none';
    }
}

