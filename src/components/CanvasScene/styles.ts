import styled from "styled-components";

export const CanvasContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  > canvas {
    height: 100%;
    width: 100%;
  }
`;
