import {getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { app } from '../firebase.config'
export const login = (email,password) => {

    const auth = getAuth(app)
    signInWithEmailAndPassword(auth,email,password)
        .then((response)=>{
            console.log(response)
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