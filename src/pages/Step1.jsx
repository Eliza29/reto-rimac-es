

import { useEffect } from "react"
import { Plans } from "../components/Plans"
import { SelectInsured } from "../components/SelectInsured"
import { StepBar } from "../components/StepBar"
import { useQuoteStore } from "../store/quoteStore"
import iconArrow from '../assets/icons/icon-arrow.svg'
import { useAuthStore } from "../store/auth"
import { useNavigate } from "react-router-dom"

export const Step1 = () => {

    const { plans,
        selectedOption,
        loadPlans,
        selectOption,
        getModifiedPlans } = useQuoteStore()



    useEffect(() => {
        loadPlans();
    }, [loadPlans]);


    const { user, logout } = useAuthStore()
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };


    return (
        <>
            <StepBar />
            <div className="step1 container">
                <div className="step1__back">
                    <button onClick={handleLogout} >
                        <img src={iconArrow} alt="volver" />
                        <span>Volver</span>
                    </button>

                </div>
                <div className="step1__header">
                    <h2> {user.name} ¿Para quién deseas cotizar? </h2>
                    <p>Selecciona la opción que se ajuste más a tus necesidades.</p>

                </div>

                <SelectInsured selected={selectedOption} onSelect={selectOption} />
                {selectedOption && plans.length > 0 && (
                    <Plans plans={getModifiedPlans()} />
                )}

            </div>

        </>
    )
}
