import React, { useState } from "react";
import CanvasScene from "../CanvasScene";
import Legend from "../Legend";
import LoadingAnimation from "../LoadingAnimation";
import { Container } from "./styles";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  const onFinishLoading = () => {
    setLoading(false);
  };
  return (
    <Container>
      <CanvasScene onFinishLoading={onFinishLoading} />
      {loading && <LoadingAnimation />}
      <Legend />
    </Container>
  );
}

export default App;
