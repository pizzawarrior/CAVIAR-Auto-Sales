// import useInput from '../../hooks/useInput';
import { ModalContainer } from './style';

const Modal = ({ formTitle, inputs }) => {


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
        </ModalContainer>
    );
};

export default Modal;
