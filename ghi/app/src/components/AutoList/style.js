import styled from "styled-components";

export const ListContainer = styled.div`
    background-color: white;
    color: #140D4F;
    padding: 12px;
    border-radius: 4px;
    border: 2px solid #dddfdf;

    h1 {
        margin: 8px;
    }
`;

export const TechDetails = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 8px;
    border: 1px solid #dddfdf;
    border-radius: 4px;
    margin: 10px 0;
    font-weight: 500;

    button {
        border: none;
        background-color: #fff;
        color: #dddfdf;
        font-weight: bold;
        cursor: pointer;
    }

    td, th {
        padding-right: 5rem;

    }
`;
