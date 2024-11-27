document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("image");
  const imageSelector = document.getElementById("imageSelector");
  const widthInput = document.getElementById("width");
  const heightInput = document.getElementById("height");
  const borderWidthInput = document.getElementById("borderWidth");
  const altTextInput = document.getElementById("altText");
  const applyChangesButton = document.getElementById("applyChanges");

  imageSelector.addEventListener("change", () => {
    image.src = imageSelector.value;
  });

  applyChangesButton.addEventListener("click", () => {
    const width = widthInput.value || 300;
    const height = heightInput.value || 300;
    const borderWidth = borderWidthInput.value || 2;
    const altText = altTextInput.value || "main image";

    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
    image.style.borderWidth = `${borderWidth}px`;
    image.style.borderStyle = "solid";
    image.alt = altText;
  });
});
