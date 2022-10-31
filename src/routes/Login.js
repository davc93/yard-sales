import { Navbar } from "../components/Navbar"
import { login } from "../firebase/auth"
import { insertLogo, insertNavbar } from "../utils"

export const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault()
        const {
            email,
            password
        } = event.target
        login(email.value,password.value)
        event.target.reset()
        window.location.pathname = '/'
    }

    document.querySelector('#app').innerHTML = `
    <div class="login-page">
    <div class="login">
    <div class="form-container">
      <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo">

      <form action="/" class="form">
        <label for="email" class="label">Email address</label>
        <input type="text" id="email" placeholder="platzi@example.cm" class="input input-email">

        <label for="password" class="label">Password</label>
        <input type="password" id="password" placeholder="*********" class="input input-password">

        <input type="submit" value="Log in" class="primary-button login-button">
        <a href="/">Forgot my password</a>
      </form>

      <button class="secondary-button signup-button">Sign up</button>
    </div>
  </div>
  </div>
    `
    insertNavbar()
    insertLogo()
    document.querySelector('.form').addEventListener('submit',handleLogin)

}