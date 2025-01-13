// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function calculateResponsiveCount(
  baseCount: number,
  width: number,
  height: number
) {
  const screenArea = width * height;
  const baseArea = 1920 * 1080;
  const scaleFactor = Math.sqrt(screenArea / baseArea);
  return Math.floor(baseCount * scaleFactor);
}

export function generateStars(
  baseCount: number,
  isForeground: boolean,
  width: number,
  height: number
) {
  const count = calculateResponsiveCount(baseCount, width, height);
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    initialX: getRandomInRange(-200, 200) * (isForeground ? 1 : 1.5),
    initialY: getRandomInRange(-200, 200) * (isForeground ? 1 : 1.5),
    size: isForeground ? getRandomInRange(0.2, 0.7) : getRandomInRange(1, 2.5),
    duration: isForeground
      ? getRandomInRange(35, 55)
      : getRandomInRange(45, 75),
    delay: getRandomInRange(-30, 0),
    z: isForeground ? getRandomInRange(0, 100) : getRandomInRange(100, 300),
    color: isForeground
      ? ['white', '#E6E6FA', '#B0C4DE'][Math.floor(Math.random() * 3)]
      : 'rgba(255, 255, 255, 0.15)',
    layer: isForeground ? 'foreground' : 'background',
  }));
}
