function pixelateImage(image, pixelSize = 8) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = image.width;
    canvas.height = image.height;

    // Temporary low-resolution canvas
    const smallCanvas = document.createElement("canvas");
    const smallCtx = smallCanvas.getContext("2d");

    const smallWidth = Math.max(1, Math.floor(image.width / pixelSize));
    const smallHeight = Math.max(1, Math.floor(image.height / pixelSize));

    smallCanvas.width = smallWidth;
    smallCanvas.height = smallHeight;

    // Shrink image
    smallCtx.drawImage(
        image,
        0,
        0,
        smallWidth,
        smallHeight
    );

    // Disable smoothing so pixels stay sharp
    ctx.imageSmoothingEnabled = false;

    // Scale back up
    ctx.drawImage(
        smallCanvas,
        0,
        0,
        smallWidth,
        smallHeight,
        0,
        0,
        image.width,
        image.height
    );

    return canvas;
}