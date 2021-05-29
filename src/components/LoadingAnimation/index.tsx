import React from "react";
import { Spinner, LoadingText, LoaderContainer } from "./styles";

const LoadingAnimation: React.FC = () => {
  return (
    <LoaderContainer>
      <Spinner />
      <LoadingText>Generating a fancy planet for you</LoadingText>
    </LoaderContainer>
  );
};

export default LoadingAnimation;
