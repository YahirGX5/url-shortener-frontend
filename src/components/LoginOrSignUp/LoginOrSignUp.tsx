import { loginContext } from "../../contexts/LoginContext";
import { Link } from "wouter";
import { useContext } from "react";
import './LoginOrSignUp.css';

export function LoginOrSignUp () {
    const { login, setLogin } = useContext(loginContext);

    return (
        login ? (
            <article className="SignOutButton">
                <Link href="/urls" className='UrlsLink'>My Urls</Link>

                <button onClick={() => { setLogin(false) }}>
                    Sign out
                </button>
            </article>
        ) : (
            <article className="LoginButtons">
                <button onClick={() => { setLogin(true) }}>Login</button>
                <button onClick={() => { setLogin(true) }}>Sign Up</button>
            </article>
        )
    )
}