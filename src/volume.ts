// Converts a user-facing volume into the value the player consumes.
export function volumeToGain(volume: number): number {
  // Percent in, percent out: display code owns any further scaling.
  return Math.min(100, Math.max(0, volume));
}
