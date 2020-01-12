export const RED = "RED";
export const YELLOW = "YELLOW";
export const GREEN = "GREEN";
export const CHANGE_LIGHT = "CHANGE_LIGHT";
export const A = "A";
export const B = "B";

export function changeLight() {
  return { type: CHANGE_LIGHT };
}
