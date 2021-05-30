import React from "react";
import constants from "../../constants";
import {
  ColorIndicator,
  Description,
  LegendContainer,
  LegendItem,
} from "./styles";

const Legend: React.FC = () => {
  const {
    colors: { surfaces },
  } = constants;
  return (
    <LegendContainer>
      <LegendItem>
        <ColorIndicator color={surfaces.water} />
        <Description>Water</Description>
      </LegendItem>
      <LegendItem>
        <ColorIndicator color={surfaces.sand} />
        <Description>Sand</Description>
      </LegendItem>
      <LegendItem>
        <ColorIndicator color={surfaces.land} />
        <Description>Land</Description>
      </LegendItem>
      <LegendItem>
        <ColorIndicator color={surfaces.mountains} />
        <Description>Mountains</Description>
      </LegendItem>
      <LegendItem>
        <ColorIndicator color={surfaces.snow} />
        <Description>Snow (mountain top)</Description>
      </LegendItem>
      <LegendItem>
        <ColorIndicator color={surfaces.city} />
        <Description>City</Description>
      </LegendItem>
      <LegendItem>
        <ColorIndicator color={surfaces.skiResort} />
        <Description>Ski Resort</Description>
      </LegendItem>
    </LegendContainer>
  );
};

export default Legend;
