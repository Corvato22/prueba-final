import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth"
import { google } from "../firebase/firebase"
import { types } from "../types/types"

export const login = (id, displayName) => {
    return {
        type: types.login,
        payload: {
            id, displayName
        }
    }
}

export const loginGoogle = () => {

    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
                localStorage.setItem('userData', JSON.stringify({ email: user.email, name: user.displayName, }))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
                localStorage.setItem('userData', JSON.stringify({ email: user.email, name: user.displayName, }))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const logout = () => ({
    type: types.logout
})

export const userLogout = () => {
    return async (dispatch) => {
        const auth = getAuth();
        await signOut(auth)
        dispatch(logout())
        localStorage.setItem('userData', '')
    }
}