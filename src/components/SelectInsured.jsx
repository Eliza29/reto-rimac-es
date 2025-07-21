
import { CardRadioButton } from './CardRadioButton';
import iconForMe from '../assets/icons/icon-protection.svg'
import iconForOthers from '../assets/icons/icon-add-user.svg'

export const SelectInsured = ({ selected, onSelect }) => {

    return (
        <div className="card__container">
            <CardRadioButton
                id="me"
                label="Para mi"
                icon={iconForMe}
                descripcion="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
                selected={selected === 'me'}
                onChange={() => onSelect('me')}
            />
            <CardRadioButton
                id="family"
                label="Para alguien más"
                icon={iconForOthers}
                descripcion="Realiza una cotización para uno de tus familiares o cualquier persona."
                selected={selected === 'family'}
                onChange={() => onSelect('family')}
            />

        </div>
    );
};


