import styled from "styled-components";

export const ServiceContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    /* grid-auto-rows: minmax(40vh, auto); */
    grid-auto-rows: 40vh;
    padding: 40px 32px;

    .section {
        border: 3px solid #5296A5;
        border-radius: 5px;
        background-color: #140D4F;
        padding: 1em;
        color: #DDDFDF;
        overflow-y: scroll;
    }

    #one {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
    }
    #two {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }
    #three {
        grid-column: 2 / 3;
        grid-row: 2;
    }
`;
