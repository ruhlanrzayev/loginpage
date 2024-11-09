const container = document.querySelector('.form-container');
const signupBtn = document.querySelector('.signupBtn');
const signinBtn = document.querySelector('.signinBtn');


signupBtn.addEventListener('click', () => {
    container.classList.add('active');
});

signinBtn.addEventListener('click', () => {
    container.classList.remove('active');
});