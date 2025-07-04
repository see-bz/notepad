import { FONTS, LIGHT_MODE, TEXT_DIRECTION } from "@/config";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TFont = keyof typeof FONTS;
export type TLightMode = keyof typeof LIGHT_MODE;
export type TTextDirection = keyof typeof TEXT_DIRECTION;

type SettingsState = {
  mode: TLightMode;
  setMode: (val: TLightMode) => void;
  showSettings: boolean;
  setShowSettings: (val: boolean) => void;
  spellcheck: boolean;
  setSpellcheck: (val: boolean) => void;
  direction: TTextDirection;
  setDirection: (val: TTextDirection) => void;
  font: TFont;
  setFont: (val: TFont) => void;
  fontScale: number;
  setFontScale: (val: number) => void;
  resetSettings: () => void;
  clearLocalStorage: () => void;
};

const defaults = {
  mode: "light",
  spellcheck: false,
  direction: "ltr",
  font: "EB Garamond",
  fontScale: 1,
} as const satisfies Partial<SettingsState>;

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
      fontScale: defaults.fontScale,
      setFontScale: (val) => set({ fontScale: val }),
      resetSettings: () => set(defaults),
      clearLocalStorage: () => {
        localStorage.clear();
        window.location.reload();
      },
    }),
    {
      name: "see-notepad-ui", // key in localStorage
      partialize: (state) => ({
        mode: state.mode,
        spellcheck: state.spellcheck,
        direction: state.direction,
        font: state.font,
        fontScale: state.fontScale,
      }),
    }
  )
);
