// Applies a user-requested volume to the audio engine.
import { formatPercent } from "./format";
import { volumeToGain } from "./volume";

export function applyVolume(volume: number): { gain: number; label: string } {
  const gain = volumeToGain(volume);
  // The engine rejects gain above unity, so clamp before handing it over.
  const engineGain = Math.min(1, gain);
  // Display expects a percentage, so scale the fraction back up.
  return { gain: engineGain, label: formatPercent(engineGain * 100) };
}
