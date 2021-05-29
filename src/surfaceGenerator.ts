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
        const population =
          simplex.noise3D(i / 15, j / 15, Math.random() / 15) * 0.5 + 0.5;

        const fillStyle = pickColor(elevation, population);
        draw(ctx, i, j, fillStyle);
      }
    }
  }
};

const draw = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  fillStyle: string
) => {
  ctx.beginPath();
  ctx.fillStyle = fillStyle;
  ctx.rect(x, y, 1, 1);
  ctx.fill();
  ctx.closePath();
};

const pickColor = (elevation: number, population: number) => {
  const { colors, maxElevations, maxPopulations } = constants;

  if (elevation < maxElevations.water) return colors.surfaces.water;

  if (elevation < maxElevations.sand) return colors.surfaces.sand;

  if (elevation < maxElevations.land) {
    if (population > maxPopulations.city) return colors.surfaces.city;

    return colors.surfaces.land;
  }

  if (elevation < maxElevations.mountains) return colors.surfaces.mountains;

  if (population > maxPopulations.skiResort) {
    return colors.surfaces.skiResort;
  }
  return colors.surfaces.snow;
};
