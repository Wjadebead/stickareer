import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const authAtom = atomWithStorage(null);
export const userNameAtom = atomWithStorage(null);