import constants from "./constants";
import SimplexNoise from "simplex-noise";

export const getImageFromCanvas = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 1500;
  canvas.height = 1500;
  drawLoop(canvas);
  console.log(canvas.getContext("2d"));
  return canvas.toDataURL();
};

// Loop through canvas, set random surface for each 10x10 pixel block
const drawLoop = (canvas: HTMLCanvasElement) => {
  const simplex = new SimplexNoise();
  const ctx = canvas.getContext("2d");
  if (ctx !== null) {
    for (let i = 0; i < canvas.width; i++) {
      for (let j = 0; j < canvas.height; j++) {
        const elevation =
          simplex.noise3D(i / 20, j / 20, Math.random() / 20) * 0.5 + 0.5;

        // Draw to canvas
        ctx.beginPath();
        ctx.fillStyle = pickColor(elevation * 100);
        ctx.rect(i, j, 1, 1);
        ctx.fill();
        ctx.closePath();
      }
    }
  }
};

const pickColor = (elevation: number) => {
  if (elevation < constants.maxElevations.water)
    return constants.colors.surfaces.water;
  if (elevation < constants.maxElevations.sand)
    return constants.colors.surfaces.sand;
  if (elevation < constants.maxElevations.land)
    return constants.colors.surfaces.land;
  if (elevation < constants.maxElevations.mountains)
    return constants.colors.surfaces.mountains;
  return constants.colors.surfaces.snow;
};
