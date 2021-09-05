import styled from "styled-components";

export const Background = styled.div`
   width: 100%;
   height: auto;
   background: #f8f8f8;
   margin-bottom: 32px;
`;

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   @media screen and (max-width: 700px) {
      flex-direction: column;
   } ;
`;

export const Logo = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   @media screen and (max-width: 768px) {
      display: flex;
      alignitems: items-end;
   }
`;

export const Title = styled.p`
   font-size: 2.5rem;
   font-family: Arial;
   color: ${({ color }) => color};
   font-weight: bold;
   margin: 20px 0 0 0;
`;

export const Subtitle = styled.p`
   font-family: Arial;
   font-size: 12px;
   color: #e09b1b;
   margin: 5px;
`;

export const Divider = styled.hr`
   border-top: 4px solid;
   border-color: ${({ color }) => color};
`;

export const Row = styled.div`
   display: flex;
`;
