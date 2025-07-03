import { FC, useState } from "react";
import {
  Copy,
  DeleteIcon,
  Printer,
  Save,
  Settings,
} from "@/components/common/Icons";
import { Button, Modal } from "react-bootstrap";
import { useNotepadStore } from "@/store/notepad";
import { useSettingsStore } from "@/store/settings";

export const Toolbar: FC = () => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const { title, note, clear } = useNotepadStore();
  const { setShowSettings } = useSettingsStore();

  const getContent = () => {
    return `${title}\n\n${note}`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getContent());
      setAlertMsg("Copied to clipboard!");
      setTimeout(() => setAlertMsg(""), 3000);
    } catch {
      setAlertMsg("Failed to copy.");
    }
  };

  const downloadFile = () => {
    const blob = new Blob([getContent()], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${title || "note"}.txt`;
    link.click();
  };

  const printPage = () => window.print();

  return (
    <div className="toolbar print-hide">
      <button onClick={copyToClipboard}>
        <Copy /><span>Copy</span>
      </button>
      <button onClick={downloadFile}>
        <Save /><span>Save</span>
      </button>
      <button onClick={() => setShowDeleteConfirmation(true)}>
        <DeleteIcon /><span>Clear</span>
      </button>
      <button onClick={() => printPage()}>
        <Printer /><span>Print</span>
      </button>
      <button onClick={() => setShowSettings(true)}>
        <Settings /><span>Settings</span>
      </button>

      <Modal show={!!alertMsg} onHide={() => setAlertMsg("")}>
        <Modal.Header closeButton className="font-body">
          <Modal.Title className="font-body">Notepad</Modal.Title>
        </Modal.Header>
        <Modal.Body>{alertMsg}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAlertMsg("")}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showDeleteConfirmation}
        onHide={() => setShowDeleteConfirmation(false)}
        centered
      >
        <Modal.Header closeButton className="font-body">
          <Modal.Title className="font-body">Delete Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this note?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowDeleteConfirmation(false)}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              clear();
              setShowDeleteConfirmation(false);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
