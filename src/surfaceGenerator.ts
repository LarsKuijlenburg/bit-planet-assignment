import constants from "./constants";

export const getImageFromCanvas = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 3000;
  canvas.height = 3000;
  drawLoop(canvas);
  return canvas.toDataURL();
};

const drawLoop = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (ctx !== null) {
    for (let i = 0; i < canvas.width; i += 10) {
      for (let j = 0; j < canvas.height; j += 10) {
        ctx.beginPath();
        ctx.fillStyle = pickColor();
        ctx.rect(i, j, 10, 10);
        ctx.fill();
        ctx.closePath();
      }
    }
  }
};

const pickColor = () => {
  const number = getRandomNumber();
  switch (number) {
    case 0:
      return constants.colors.surfaces.water;
    case 1:
      return constants.colors.surfaces.land;
    case 2:
      return constants.colors.surfaces.mountains;
    default:
      return constants.colors.surfaces.snow;
  }
};

const getRandomNumber = () => {
  const random = Math.floor((Math.random() * 100) / 25);
  return random;
};
