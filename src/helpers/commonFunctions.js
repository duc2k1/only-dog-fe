import canvas from "canvas";
import * as tmImage from "@teachablemachine/image";

export const getModel = async () => {
  const baseUrl = "https://teachablemachine.withgoogle.com/models/wNpy2osdc/";
  const modelURL = baseUrl + "model.json";
  const metadataURL = baseUrl + "metadata.json";
  const model = await tmImage.load(modelURL, metadataURL);
  return model;
};

export const getPrediction = async (
  model,
  imageData,
  contentType,
  responseFunction
) => {
  const imageCanvas = canvas.createCanvas(64, 64);
  const canvasContext = imageCanvas.getContext("2d");

  const canvasImage = new canvas.Image();
  canvasImage.onload = async () => {
    canvasContext.drawImage(canvasImage, 0, 0, 64, 64);

    const prediction = await model.predict(imageCanvas);
    console.log(prediction);
    responseFunction(prediction);
  };

  canvasImage.onerror = (error) => {
    throw error;
  };

  canvasImage.src = `data:${contentType};base64,` + imageData;
};
