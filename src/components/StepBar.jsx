import iconArrow from '../assets/icons/icon-arrow.svg'

export const StepBar = () => {
    return (
        <div className="step-header">
            {/* Desktop */}
            <nav className="step-header__desktop">
                <ul className="steps">
                    <li className="step step--active" aria-current="step">
                        <span className="step__circle">1</span>
                        <span className="step__label">Planes y coberturas</span>
                    </li>
                    <li className="step step__separator">
                        <div className="step__line"></div>
                        <div className="step__line"></div>
                        <div className="step__line"></div>
                        <div className="step__line"></div>
                    </li>
                    <li className="step">
                        <span className="step__circle">2</span>
                        <span className="step__label">Resumen</span>
                    </li>
                </ul>
            </nav>

            {/* Mobile */}
            <div className="step-header__mobile" role="progressbar"
                aria-valuenow={1} aria-valuemin={1} aria-valuemax={2}>
                <button className="step-progress__back">
                    <img src={iconArrow} alt="volver" />
                </button>
                <span className="step-progress__text">
                    PASO 1 DE 2
                </span>
                <div className="step-progress__bar-container">
                    <div className="step-progress__bar" style={{ width: '50%' }}></div>
                </div>
            </div>
        </div>
    )
}
