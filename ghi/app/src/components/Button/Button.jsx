import React from 'react';
import { ButtonStyle } from './style';

const Button = ({ text, showModal }) => {
    return <ButtonStyle onClick={() => showModal(true)}>{text}</ButtonStyle>;
};

export default Button;
