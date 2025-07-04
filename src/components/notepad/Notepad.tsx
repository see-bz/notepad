import { FC } from "react";
import { useNotepadStore } from "@/store/notepad";
import { useSettingsStore } from "@/store/settings";

export const Notepad: FC = () => {
  const { title, note, setTitle, setNote } = useNotepadStore();
  const { spellcheck, direction, font } = useSettingsStore();

  return (
    <div
      className="note-container font-body"
      style={{
        direction: direction,
        fontFamily: font,
      }}
    >
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Untitled"
        className="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoComplete="off"
        maxLength={50}
      />

      <textarea
        name="notepad"
        id="notepad"
        className="notepad print-hide"
        placeholder="Enter your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={10}
        spellCheck={spellcheck}
        style={{ direction: direction }}
      ></textarea>
      <div className="print-show text-pre-wrap">{note}</div>
    </div>
  );
};
