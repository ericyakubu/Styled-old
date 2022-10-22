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
    flex-wrap: wrap;
    gap: 0.75rem;
    width: 100%;

    #priceSelectors {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 30%;
        gap: 0.2rem;

        @media (max-width: 425px) {
            width: 45%;
            gap: 0.5rem;
        }
    }
`;
