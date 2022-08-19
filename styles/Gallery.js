import styled from "styled-components";

export const GalleryStyled = styled.div`
    width: 100%;
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); */
    grid-template-columns: repeat(auto-fit, minmax(15rem, 20rem));
    grid-gap: 2rem;

    align-content: center;
    justify-content: center;
`;
