import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1440px;
    margin: auto;
    background-color: #fff;
`;

export const SalesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    grid-auto-rows: 40vh;
    padding: 40px 32px;

    .section {
        border: 3px solid #5296A5;
        border-radius: 5px;
        background-color: #140D4F;
        padding: 1em;
        color: #DDDFDF;
    }

    #one {
        grid-column: 1 / 2;
        grid-row: 1;
    }
    #two {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }
    /* Automobile Inventory LIST */
    #three {
        grid-column: 1/3;
        grid-row: 2 / 3;
    }
`;
