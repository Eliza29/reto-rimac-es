import logo from '../assets/logo.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__logo">
                    <img src={logo} alt="Logo Rimac" />
                </div>
                <div className='line'></div>
                <div className='footer__text'>
                    © 2023 RIMAC Seguros y Reaseguros.
                </div>
            </div>
        </footer>
    )
}
