import {getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { app } from './config'
export const login = (email,password) => {

    const auth = getAuth(app)
    signInWithEmailAndPassword(auth,email,password)
        .then((response)=>{
            console.log('Acceso correcto')
        })
        .catch((error)=>{
            console.log(error)
        })


}

export const logout = () => {
    const auth = getAuth();
    signOut(auth)
        .then(()=>{
        console.log('Sesion cerrada')
        })
        .catch((error)=>{
            console.log("error al cerrar sesion")
        })
}
export let isAuth = false

export const authChange = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
        isAuth = true
        const uid = user.uid;
        console.log('Estas autenticado')
        
    } else {
        isAuth = false
        console.log('No estas autenticado')
    }
    });
}

