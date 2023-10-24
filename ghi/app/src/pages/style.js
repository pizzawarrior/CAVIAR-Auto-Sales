import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1440px;
    margin: auto;
    background-color: #fff;
`;

export const InventoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    /* grid-auto-rows: minmax(40vh, auto); */
    grid-auto-rows: 40vh;
    padding: 40px 32px;

    div {
        border: 3px solid #ff6666;
        border-radius: 5px;
        background-color: #071013;
        padding: 1em;
        color: #e86252;
    }

    #one {
        grid-column: 1 / 2;
        grid-row: 1;
    }
    #two {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }
    #three {
        grid-column: 1/3;
        grid-row: 2 / 3;
    }
`;
