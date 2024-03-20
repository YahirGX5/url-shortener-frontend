import { LoginOrSignUp } from "../LoginOrSignUp/LoginOrSignUp.tsx";
import ChainLogo from "../../assets/chain.webp";
import "./MainHeader.css";

export function MainHeader () {
    return (
        <header className='MainHeader'>
            <img alt="Logo" src={ChainLogo} className="ChainLogo"/>

            <h2 className="Title">URL SHORTENER</h2>

            <LoginOrSignUp />
        </header>
    )
}