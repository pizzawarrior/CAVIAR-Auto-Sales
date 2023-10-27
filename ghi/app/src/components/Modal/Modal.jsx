// import useInput from '../../hooks/useInput';
import { ButtonStyle } from '../Button/style';
import { ModalContainer } from './style';

const Modal = ({ formTitle, inputs, handleClick }) => {
    return (
        <ModalContainer>
            <h1>{formTitle}</h1>
            {inputs.map((item, index) => (
                <div key={index}>
                    <p>{item.label}</p>
                    <input
                        placeholder={item.label}
                        type={item.type}
                        {...item.state}
                    />
                    <br />
                </div>
            ))}
            <ButtonStyle onClick={() => handleClick()}>ADD</ButtonStyle>
        </ModalContainer>
    );
};

export default Modal;
