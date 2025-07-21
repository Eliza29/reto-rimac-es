import foto from '../assets/img/foto.png';
import fotoMobile from '../assets/img/foto-mobile.png';
import { LoginForm } from '../components/LoginForm';
import { TitleLogin } from '../components/TitleLogin';

export const Login = () => {
    return (
        <div className="login-box container">
            <section className="login-box__image">
                <TitleLogin className="title--mobile-only" />
                <picture>
                    <source srcSet={foto} media="(min-width: 768px)" />
                    <img src={fotoMobile} alt="foto" />
                </picture>
            </section>
            <section className="login-box__form">
                <div className='line'></div>
                <TitleLogin className="title--desktop-only" />
                <p className='login-box__text'>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
                <LoginForm />
            </section>
        </div>
    )
}
