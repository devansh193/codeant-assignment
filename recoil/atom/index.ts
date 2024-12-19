import { atom } from "recoil";
type TabOption = "SAAS" | "Self Hosted";
export const tabsAtom = atom<TabOption>({
  key: "tabAtom",
  default: "SAAS",
});
