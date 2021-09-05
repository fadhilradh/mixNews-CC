import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 20px 0 20px;
  align-items: center;
  gap: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media screen and (max-width: 950px) {
    gap: 8px;
    margin-bottom: 6px;
  }
  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const Link = styled.a`
  font-family: Arial, sans-serif;
  letter-spacing: 2px;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 1rem;
  color: #494d58;
  &:hover {
    cursor: pointer;
    color: ${({ color }) => color};
  }
`;
