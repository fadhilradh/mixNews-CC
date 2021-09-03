import styled from "styled-components"

export const Background = styled.div`
    width: 100%;
    height: auto;
    background: #F8F8F8;
    margin-bottom: 32px;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    };
`