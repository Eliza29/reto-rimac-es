

export const CardRadioButton = ({ id, label, icon, selected, descripcion, onChange }) => {
    return (
        <label
            htmlFor={id}
            className={`card-radio ${selected ? 'selected' : ''}`}
        >
            <input
                type="radio"
                id={id}
                name="quoteFor"
                value={id}
                checked={selected}
                onChange={onChange}
                className="card-radio__btn"
            />


            <div className="text-center">
                <img src={icon} alt="icon" />
                <h4 className="text-lg font-medium">{label}</h4>
                <p>{descripcion}</p>
            </div>
        </label>
    );
}
