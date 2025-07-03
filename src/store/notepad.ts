import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const defaults = {
  title: 'Untitled',
  note: '',
}

type NoteState = {
  title: string
  setTitle: (val: string) => void
  note: string
  setNote: (val: string) => void
  clear: () => void
}

export const useNotepadStore = create<NoteState>()(
  persist(
    (set) => ({
      title: defaults.title,
      setTitle: (val) => set({ title: val }),
      note: defaults.note,
      setNote: (val) => set({ note: val }),
      clear: () => set({ title: defaults.title, note: defaults.note }),
    }),
    {
      name: 'see-notepad', // key in localStorage
    }
  )
)
