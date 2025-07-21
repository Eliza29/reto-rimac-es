import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useAuthStore } from '../store/auth';
import { useNavigate } from 'react-router-dom';
import { getData } from '../services/api';


export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const user = useAuthStore((state) => state.user);
    const login = useAuthStore((state) => state.login);
    const setName = useAuthStore((state) => state.setName);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.name && user.lastName && user.birthDay) {
            // console.log(user, 'user')
            navigate('/paso1');
        }
    }, [user.name, user.lastName, user.birthDay, navigate]);

    const onSubmit = async (data) => {
        login({
            celular: data.celular,
            numeroDocumento: data.numeroDocumento,
            tipoDocumento: data.tipoDocumento,
            comunicaciones: data.comunicaciones,
            terminos: data.terminos,
        });

        try {
            const { name, lastName, birthDay } = await getData('https://rimac-front-end-challenge.netlify.app/api/user.json');
            setName(name, lastName, birthDay);

        } catch (error) {
            console.error('Error al obtener nombre:', error);
        }

    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {/* Documento */}
            <div className="form__row">
                <div className="form__group">

                    <div className="form__wrapper">
                        <select
                            className="form__type"
                            {...register("tipoDocumento", { required: true })}
                        >
                            <option value="DNI">DNI</option>
                            <option value="CE">CE</option>
                        </select>

                        <div className="form__floating-input">
                            <input
                                type="text"
                                className="form__input"
                                placeholder=" "
                                id="numeroDocumento"

                                {...register("numeroDocumento", {
                                    required: {
                                        value: true,
                                        message: "El documento es obligatorio",
                                    },

                                    minLength: {
                                        value: 8,
                                        message: "Debe tener al menos 8 dígitos",
                                    },
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Solo se permiten números",
                                    },
                                })}
                            />
                            <label htmlFor="numeroDocumento">Nro. de Documento</label>
                        </div>
                    </div>
                    {errors.numeroDocumento && (
                        <span className="form__error">{errors.numeroDocumento.message}</span>
                    )}
                </div>
            </div>

            {/* Teléfono */}
            <div className="form__group">
                <div className="form__wrapper">
                    <div className="form__floating-input">
                        <input
                            type="tel"
                            className="form__input"
                            placeholder=" "
                            id="celular"
                            {...register("celular", { required: "El teléfono es obligatorio" })}
                        />
                        <label htmlFor="celular">Celular</label>
                    </div>
                </div>
                {errors.celular && <span className="form__error">{errors.celular.message}</span>}
            </div>

            {/* Términos */}
            <div className="form__group form__checkbox">
                <label className="custom-checkbox ">
                    <input type="checkbox" {...register("terminos", { required: "Debes aceptar los términos" })} />
                    <span className="checkmark"></span>
                    Acepto lo Política de Privacidad
                </label>
                {errors.terminos && <span className="form__error">{errors.terminos.message}</span>}
            </div>

            {/* Comunicaciones */}
            <div className="form__group form__checkbox">
                <label className="custom-checkbox ">
                    <input type="checkbox" {...register("comunicaciones", { required: "Debes aceptar la política" })} />
                    <span className="checkmark"></span>
                    Acepto la Política Comunicaciones Comerciales
                </label>
                {errors.comunicaciones && <span className="form__error">{errors.comunicaciones.message}</span>}
            </div>

            <div className="form__group">
                <span className="form__text">
                    Aplican Términos y Condiciones.
                </span>
            </div>

            {/* Botón */}
            <button type="submit" className="form__submit">
                Cotiza aquí
            </button>
        </form>
    );
};
