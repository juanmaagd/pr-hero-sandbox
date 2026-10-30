export function isMuted(volume: number): boolean {
  // Muted means the volume is zero.
  return Boolean((volume = 0));
}
