
    const buttonAuth = document.querySelector('.button-auth')
const modalAuth = document.querySelector('.modal-auth')
const buttonOut = document.querySelector('.button-out')
const userName = document.querySelector('.user-name')
const closeAuth = document.querySelector('.close-auth')
const logInForm = document.getElementById('logInForm')
const inputLogin = document.getElementById('login')
const inputPassword = document.getElementById('password')
const buttonCart = document.querySelector('.button-cart');


const login = (user) => {
        buttonAuth.style.display = 'none'
        buttonOut.style.display = 'flex'
        userName.style.display = 'flex'
        buttonCart.style.display = 'flex'
        userName.textContent = user.login
        modalAuth.style.display = 'none'
}

const loginOut = () => {
    buttonAuth.style.display = 'flex'
    buttonOut.style.display = 'none'
    userName.style.display = 'none'
    buttonCart.style.display = 'none'
    userName.textContent = ''
    localStorage.removeItem('user')
}

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex'
})
buttonOut.addEventListener('click', () => {
    loginOut()
})
closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none'
})


logInForm.addEventListener('submit', (event) => {
    event.preventDefault()// блокировка стадартного поведения
 
    const user = {
        login: inputLogin.value,
        password: inputPassword.value
    }
    if (!inputLogin.value) {
        alert('Введите логин')
    }
    else if (!inputPassword.value) {
        alert('Введите пароль')
    }else{
        localStorage.setItem('user', JSON.stringify(user))
    login(user)
    }
    modalAuth.style.display = 'none'
})

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')))
}

