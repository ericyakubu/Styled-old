import styled from "styled-components";

export const Selectors = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 1rem 0;
`;

export const SelectorsInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;

    #priceSelectors {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 30%;
    }
`;
