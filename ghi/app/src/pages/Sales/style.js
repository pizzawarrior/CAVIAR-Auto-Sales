import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1440px;
    margin: auto;
    background-color: #fff;
`;

export const SalesContainer = styled.div`
 display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    grid-auto-rows: 44vh;
    padding: 11px;

    .section {
        border: 2px solid #5296A5;
        border-radius: 5px;
        background-color: #071013;
        padding: 1em;
        color: #e86252;
        overflow-y: scroll;
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
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }
    #four {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
    }
`
