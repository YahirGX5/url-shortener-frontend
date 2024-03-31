import { LoginOrSignUp } from "../LoginOrSignUp/LoginOrSignUp.tsx";
import ChainLogo from "../../assets/chain.webp";
import "./MainHeader.css";

export function MainHeader () {
    return (
        <header className='MainHeader'>
            <section className="LogoAndTitle">
                <img alt="Logo" src={ChainLogo} className="ChainLogo"/>
                <h2 className="Title">URL SHORTENER</h2>
            </section>
            
            <section>
                <LoginOrSignUp />
            </section>
        </header>
    )
}