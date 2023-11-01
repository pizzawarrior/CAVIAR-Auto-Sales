import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        background-color: #5694f0;
        border: 1px solid #140d4f;
        margin: 0 6px;
        padding: 6px;
        color: #fff;
        border-radius: 15px;
        cursor: pointer;
    }
`;

export const AppointmentContainer = styled.div`
    padding: 4px 24px;
    border: 1px solid #dddfdf;
    border-radius: 4px;
    margin: 1px 0;
    font-weight: 500;
`;

export const Span = styled.span`
    color: #140d4f;
    font-weight: bold;
`;
