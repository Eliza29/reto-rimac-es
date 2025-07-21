import { StepBar } from "../components/StepBar"
import iconArrow from '../assets/icons/icon-arrow.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from "../store/auth"

export const Step2 = () => {

    const location = useLocation();
    const plan = location.state?.planSeleccionado;

    const { user } = useAuthStore()
    const navigate = useNavigate();


    return (
        <>
            <StepBar />
            <div className="step1 container">
                <div className="step1__back">
                    <button onClick={() => navigate(-1)}>
                        <img src={iconArrow} alt="volver" />
                        <span>Volver</span>
                    </button>


                </div>
            </div>
            <div className="step2 container">
                <div className="step2__card">
                    <div className="step2__header">
                        <h2>
                            Resumen del seguro
                        </h2>
                    </div>
                    <div className="step2__body">
                        <div className="step2__box">
                            <p>Precios calculados para:</p>
                            <strong>{user.name} {user.lastName} </strong>
                        </div>
                        <hr className="step2__box" />

                        <div className="step2__box">
                            <strong>Responsable de pago</strong>
                            <p>{user.tipoDocumento}: {user.numeroDocumento}</p>
                            <p>Celular: {user.celular}</p>

                        </div>
                        <div className="step2__box">
                            <strong>Plan elegido</strong>
                            <p>{plan.name}</p>
                            <p>Costo del Plan: ${plan.price} al mes</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
