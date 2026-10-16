import { applyVolume } from "./player";

export function main(volume: number): string {
  const { label } = applyVolume(volume);
  return `volume set to ${label}`;
}
