import constants from "./constants";

export const getImageFromCanvas = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 3000;
  canvas.height = 3000;
  drawLoop(canvas);
  return canvas.toDataURL();
};

// Loop through canvas, set random surface for each 10x10 pixel block
const drawLoop = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (ctx !== null) {
    for (let i = 0; i < canvas.width; i += 5) {
      for (let j = 0; j < canvas.height; j += 5) {
        ctx.beginPath();
        ctx.fillStyle = pickColor();
        ctx.rect(i, j, 5, 5);
        ctx.fill();
        ctx.closePath();
      }
    }
  }
};

const pickColor = () => {
  const number = getRandomNumber();
  if (number < 7) return constants.colors.surfaces.water;
  if (number > 6 && number < 16) return constants.colors.surfaces.land;
  if (number > 15 && number < 19) return constants.colors.surfaces.mountains;
  return constants.colors.surfaces.snow;
};

const getRandomNumber = () => {
  const random = Math.floor((Math.random() * 100) / 5);
  return random;
};
