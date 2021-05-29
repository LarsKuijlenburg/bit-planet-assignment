import styled from "styled-components";

export const LegendContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: white;
  z-index: 3;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ColorIndicator = styled.div<{ color: string }>`
  height: 30px;
  width: 30px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: 1px solid black;
  margin: 0 20px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: black;
  font-family: "Roboto", sans-serif;
  padding-right: 10px;
`;
