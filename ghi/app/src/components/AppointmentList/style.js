import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        background-color: #FC814A;
        border: 1px solid #5296a5;
        margin: 0 1px;
        padding: 8px;
        color: #fff;
        font-weight: bold;
    }
`;

export const AppointmentContainer = styled.div`
    padding: 12px 24px;
    border: 3px solid #5296a5;
    margin: 1px 0;
    font-weight: 500;
`;

export const Span = styled.span`
    color: #5296A5;
    font-weight: bold;
`;
