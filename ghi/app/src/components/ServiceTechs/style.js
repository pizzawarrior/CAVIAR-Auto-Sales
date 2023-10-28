import styled from 'styled-components';

export const ListContainer = styled.div`
    background-color: white;
    color: #140d4f;
    padding: 12px;
    border-radius: 4px;
    border: 2px solid #fc814a;

    h1 {
        margin: 8px;
    }
`;

export const TechDetails = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 8px;
    border: 3px solid #5296a5;
    margin: 1px 0;
    font-weight: 500;

    button {
        border: none;
        background-color: #fff;
        color: #fc814a;
        font-weight: bold;
        cursor: pointer;
    }
`;
