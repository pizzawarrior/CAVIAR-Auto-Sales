import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    color: #140D4F;
    padding: 12px 24px;
    border-radius: 4px;
    border: 2px solid #FC814A;

    h1 {
        margin: 8px;
    }

    #buttonBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const ManufacturerGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto-fill, auto);
    grid-row-gap: 0.5em;
    grid-column-gap: 1em;

    p {
        font-weight: bold;
    }
`;
