const card = document.querySelector('.card');
const addCardModal = document.querySelector('#cardModal');
const addCardModalContainer = document.querySelector('#addCardModalContainer');
const addCardForm = document.querySelector('#addCardForm');
const closeModal = document.querySelectorAll('.close');
const addNewCardBtn = document.querySelector('#addNewCardBtn');
const submitBtn = document.querySelector('#submitBtn');
const questionId = document.querySelector('#questionId');
const answerId = document.querySelector('#answerId');

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
    debugger
    data.preventDefault();
    if (questionId.value && answerId.value) {
        let cardArray = localStorage.getItem('cards') || [];
        cardArray.push({ question: questionId.value, answer: answerId.value });
        localStorage.setItem('cards', cardArray);

        //close modal
        addCardModal.classList.remove('open');
        addCardModalContainer.classList.remove('open');
        alert('Saved');
    }
})

setTimeout(() => {
    card.classList.add('slide-left');

}, 2000);
