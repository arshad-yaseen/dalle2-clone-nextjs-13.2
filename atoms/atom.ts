import { atom } from "recoil";

export const imagesAtom = atom({
  key: "imagesAtom",
  default: <any>[], 
});

export const loadingAtom = atom({
  key: "loadingAtom",
  default: <any>false, 
});