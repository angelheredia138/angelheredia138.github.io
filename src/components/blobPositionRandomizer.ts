// Define ranges for left-to-right and right-to-left animations
type AnimationDirection = "moveLeftToRight" | "moveRightToLeft";

// Function to calculate animation ranges dynamically
function getAnimationRanges(blobSize: number): {
  [key in AnimationDirection]: [number, number];
} {
  const offset = blobSize; // Offset equal to the blob size in percentage

  return {
    moveLeftToRight: [-offset, -blobSize / 2], // Just outside the left edge
    moveRightToLeft: [100, 100 + blobSize / 2], // Just outside the right edge
  };
}

// Function to generate a random number within a given range
function getRandomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// Function to randomly select an animation direction
function getRandomAnimation(): AnimationDirection {
  return Math.random() > 0.5 ? "moveLeftToRight" : "moveRightToLeft";
}

// Update the CSS variables dynamically
export function updateBlobPositions(): void {
  const blobSize = 95; // Assume the blob size is 10% of the viewport (adjust as needed)
  const animationRanges = getAnimationRanges(blobSize); // Dynamically calculate ranges

  document.querySelectorAll(".gooey").forEach((blobElement) => {
    const animationDirection: AnimationDirection = getRandomAnimation();
    const [min, max] = animationRanges[animationDirection];
    const randomLeft = getRandomInRange(min, max);

    if (blobElement instanceof HTMLElement) {
      blobElement.style.setProperty("--start-left", `${randomLeft}%`);
      blobElement.style.setProperty(
        "--animation-direction",
        animationDirection
      );
    }
  });
}
