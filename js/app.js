const card = document.querySelector('.card');
const addCardModal = document.querySelector('#cardModal');
const addCardModalContainer = document.querySelector('#addCardModalContainer');
const addCardForm = document.querySelector('#addCardForm');
const closeModal = document.querySelectorAll('.close');
const addNewCardBtn = document.querySelector('#addNewCardBtn');
const submitBtn = document.querySelector('#submitBtn');
const questionId = document.querySelector('#questionId');
const answerId = document.querySelector('#answerId');
const cardContainer = document.querySelector('#cardContainer');

addNewCardBtn.addEventListener('click', function () {

    addCardModal.classList.add('open');
    addCardModalContainer.classList.add('open');
})

closeModal.forEach(btn => {
    btn.addEventListener('click', () => {
        addCardModal.classList.remove('open');
        addCardModalContainer.classList.remove('open');
    })
})

addCardForm.addEventListener('submit', data => {
    
    data.preventDefault();
    if (questionId.value && answerId.value) {
        let cardArray = JSON.parse(localStorage.getItem('cards')) || [];
        cardArray.push({ question: questionId.value, answer: answerId.value });
        localStorage.setItem('cards', JSON.stringify(cardArray));

        //close modal
        addCardModal.classList.remove('open');
        addCardModalContainer.classList.remove('open');
        alert('Saved');
        loadCards();
    }
})

function loadCards() {
    
    let cardArray = JSON.parse(localStorage.getItem('cards')) || [];
    let cardString = document.createElement("div");
    
    
    if (cardArray.length) {
        cardArray.forEach((cardData, index) => {
            
        cardString.innerHTML += `<div class="card">
            <h4 class="flipCard"><i class="fas fa-redo-alt"></i> Flip</h4>
            <div class="card-content" id=card"${index}">
                ${cardData.question}
            </div>
        </div>`
        })
        
    }
    else{
        cardString.innerHTML = `<div class="card">
        <h4 class="flipCard"><i class="fas fa-redo-alt"></i> Flip</h4>
        <div class="card-content">
            Add a card
        </div>
    </div>`
    }
    cardContainer.appendChild(cardString);
    const cardEls = cardContainer.querySelectorAll('.card');
    cardEls.forEach(card => {
        card.addEventListener('click', e => {
            card.classList.toggle('show-answer');
            setTimeout(() => {
                card.classList.toggle('show-answer');
            }, 1000);
        })
    })
}

loadCards();


