import { generateUtilityClass, generateUtilityClasses } from "@mui/base";

export interface PinInputClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type PinInputClassKey = keyof typeof pinInputClasses;

export function getPinInputUtilityClass(slot: string) {
  return generateUtilityClass("JunPinInput", slot);
}

export const pinInputClasses: PinInputClasses = generateUtilityClasses(
  "JunPinInput",
  ["root"]
);
