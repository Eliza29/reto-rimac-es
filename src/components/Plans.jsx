import iconHome from '../assets/icons/icon-home.svg'
import iconHospital from '../assets/icons/icon-hospital.svg'
import { useNavigate } from 'react-router-dom';

export const Plans = ({ plans }) => {

    const navigate = useNavigate();

    const handleSelect = (plan) => {
        navigate('/paso2', { state: { planSeleccionado: plan } });
    };
    return (
        <div className="plans">
            {
                plans.map((plan, index) => {
                    return (
                        <div key={index}
                            className="plans__card"
                        >
                            <div className='plans__header'>
                                {
                                    plan.name === "Plan en Casa y Clínica" && (
                                        <div><span className='plans__hightlight'>Plan recomendado</span> </div>
                                    )
                                }
                                <div className='plans__title'>
                                    <h3> {plan.name}</h3>
                                    {
                                        (plan.name === "Plan en Casa y Clínica") ? (
                                            <img src={iconHospital} alt="icon" />
                                        ) : (<img src={iconHome} alt="icon" />)
                                    }

                                </div>
                                <p className='plans__text'>COSTO DEL PLAN</p>
                                <p>
                                    <b>${plan.price} al mes</b>
                                </p>
                            </div>

                            <ul className='plans__list'>
                                {
                                    plan.description.map((item, i) => {
                                        return <li key={i}>{item}</li>
                                    })
                                }
                            </ul>
                            <button className='plans__button'
                                onClick={() => handleSelect(plan)}
                            >
                                Seleccionar Plan
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}
