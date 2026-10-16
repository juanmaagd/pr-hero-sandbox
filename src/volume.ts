// Converts a user-facing volume (0-100) into the value the player consumes.
export function volumeToGain(volume: number): number {
  const clamped = Math.min(100, Math.max(0, volume));
  return clamped / 100;
}
