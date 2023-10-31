import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const email = currentUser?.email || user?.email;
            setLoading(false);
            setUser(currentUser);
            console.log('current user', currentUser);
            if(currentUser){
                axios.post('http://localhost:5000/jwt', {email},{
                    withCredentials : true
                })
                .then(res => {
                    console.log(res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logout', {email}, {
                    withCredentials : true,
                })
                .then(res => {
                    console.log(res.data);
                })
            }
        })
        return () => {
            unSubscribe();
        }
    }, [user?.email])

    const authInfo = {
        user,
        loading,
        loginUser,
        registerUser,
        logout,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;