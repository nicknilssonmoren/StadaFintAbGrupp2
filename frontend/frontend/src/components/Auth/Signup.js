// components/Auth/Signup.js
import { useContext, useRef } from 'react';
import { Redirect, Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import { auth } from '../../utils/firebase';

export default function Signup() {
    const [isAuthenticated, setAuthentication] = useContext(AuthContext);
    const emailRef = useRef('');
    const passwordRef = useRef('');

    async function signup(event) {
        event.preventDefault();
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value;
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            setAuthentication(true);
        } catch (error) {
            passwordRef.current.value = '';
            setButtonState(false);
        }
    }

    if (isAuthenticated === null) return null;
    if (isAuthenticated === true) return <Redirect to='/dashboard' />
    return (
        <form onSubmit={signup}>
            <label htmlFor="email">Email address</label>
            <input
                type="email"
                id="email"
                name="email"
                required
                ref={emailRef}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                required
                ref={passwordRef}
            />
            <button>Create Account</button>
        </form>
    );
}