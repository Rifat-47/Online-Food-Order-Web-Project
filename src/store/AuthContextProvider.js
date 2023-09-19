import AuthContext from "./auth-context";
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContextProvider = (props) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user); // Set the user state based on the authentication state.
        });

        return () => {
            unsubscribe(); // Unsubscribe when the component unmounts.
        };
    }, []);

    const handleRegister = (e, email, password) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .then(() => {
                // setEmail('');
                // setPassword('');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleLogin = (e, email, password) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, handleRegister, handleLogin, handleLogout }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;