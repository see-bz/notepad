import { create } from "zustand";
import { persist } from "zustand/middleware";

export const FONTS = {
  EB_Garamond: "EB Garamond",
  Geist_Sans: "Geist",
  Arial: "Arial",
  Times_New_Roman: "Times New Roman",
  Geist_Mono: "Geist Mono",
  Monospace: "Monospace",
};

export type TFont = typeof FONTS[keyof typeof FONTS];

const defaults = {
  mode: "light",
  spellcheck: false,
  direction: "ltr",
  font: FONTS.EB_Garamond,
} as const;

type SettingsState = {
  mode: "light" | "dark";
  setMode: (val: "light" | "dark") => void;
  showSettings: boolean;
  setShowSettings: (val: boolean) => void;
  spellcheck: boolean;
  setSpellcheck: (val: boolean) => void;
  direction: "ltr" | "rtl";
  setDirection: (val: "ltr" | "rtl") => void;
  font: TFont;
  setFont: (val: TFont) => void;
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      mode: defaults.mode,
      setMode: (val) => set({ mode: val }),
      showSettings: false,
      setShowSettings: (val) => set({ showSettings: val }),
      spellcheck: defaults.spellcheck,
      setSpellcheck: (val) => set({ spellcheck: val }),
      direction: defaults.direction,
      setDirection: (val) => set({ direction: val }),
      font: defaults.font,
      setFont: (val) => set({ font: val }),
    }),
    {
      name: "see-notepad-ui", // key in localStorage
      partialize: (state) => ({
        mode: state.mode,
        spellcheck: state.spellcheck,
        direction: state.direction,
        font: state.font,
      }),
    }
  )
);
