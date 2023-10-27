import styled from "styled-components";

export const ModalContainer = styled.div`
    padding: 32px 48px;
    position: absolute;
    background-color: #DDDFDF;
    width: 15vw;
    top: 30vh;
    left: 40vw;
    display: flex;
    flex-direction: column;
    border: 3px solid #5296A5;
    border-radius: 4px;

    div {
        padding-left: 10px;
    }
    button {
        margin-top: 20px;
    }
    #buttons {
        display: flex;
        padding: 5px;
    }
`;
