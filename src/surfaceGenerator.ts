import constants from "./constants";
import SimplexNoise from "simplex-noise";

export const getImageFromCanvas = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 1000;
  canvas.height = 1000;
  drawLoop(canvas);
  console.log(canvas.getContext("2d"));
  return canvas.toDataURL();
};

// Loop through canvas, set random surface for each 10x10 pixel block
const drawLoop = (canvas: HTMLCanvasElement) => {
  let map: number[][] = [];
  const simplex = new SimplexNoise();
  const ctx = canvas.getContext("2d");
  if (ctx !== null) {
    for (let i = 0; i < canvas.width; i++) {
      map[i] = [];
      for (let j = 0; j < canvas.height; j++) {
        const elevation =
          simplex.noise3D(i / 15, j / 15, Math.random() / 15) * 0.5 + 0.5;
        map[i][j] = elevation;
        ctx.beginPath();
        ctx.fillStyle = pickColor(elevation);
        ctx.rect(i, j, 1, 1);
        ctx.fill();
        ctx.closePath();
      }
    }
    console.log(map[0]);
  }
};

const pickColor = (randomNumber: number) => {
  const number = (randomNumber * 100) / 5;
  if (number < 6) return constants.colors.surfaces.water;
  if (number > 5 && number < 15) return constants.colors.surfaces.land;
  if (number > 14 && number < 18) return constants.colors.surfaces.mountains;
  return constants.colors.surfaces.snow;
};
