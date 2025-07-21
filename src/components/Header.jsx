import logoRed from '../assets/logo-red.svg'; 
import iconPhone from '../assets/icons/icon-phone.svg'


export const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="header__logo">
                <img src={logoRed} alt="Logo Rimac" />
            </div>
            <div className='header__call'>
                <span className="header__text header__text--left">¡Compra por este medio!</span>
                <img src={iconPhone} alt="icon phone" />
                <a href="tel:+014116001" className="header__text header__text--right">
                    (01) 411 6001
                </a>
            </div>
        </div>
    </header>
  )
}
