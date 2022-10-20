import { login } from "../auth"

export const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault()
        const {
            email,
            password
        } = event.target
        login(email.value,password.value)
        event.target.reset()
    }

    document.querySelector('#app').innerHTML = `
        <section class="login-form">
            <h1>Login Page</h1>
            <form id="login-form">
                <div>
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email">
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password">
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    `
    document.querySelector('#login-form').addEventListener('submit',handleLogin)

}