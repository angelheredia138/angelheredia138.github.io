// Define ranges for left-to-right and right-to-left animations
const animationRanges = {
  moveLeftToRight: [-70, -34], // For blobs moving from left to right
  moveRightToLeft: [105, 135], // For blobs moving from right to left
} as const;

// Type for animation directions (keys of animationRanges)
type AnimationDirection = keyof typeof animationRanges;

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
