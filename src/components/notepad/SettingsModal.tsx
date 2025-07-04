import { FONTS, LIGHT_MODE, TEXT_DIRECTION } from "@/config";
import {
  TFont,
  TLightMode,
  TTextDirection,
  useSettingsStore,
} from "@/store/settings";
import { Button, Form, Modal } from "react-bootstrap";

export const SettingsModal = () => {
  const {
    showSettings,
    setShowSettings,
    mode,
    setMode,
    spellcheck,
    setSpellcheck,
    direction,
    setDirection,
    font,
    setFont,
    fontScale,
    setFontScale,
    resetSettings,
    clearLocalStorage,
  } = useSettingsStore();

  return (
    <Modal show={showSettings} onHide={() => setShowSettings(false)}>
      <Modal.Header closeButton className="font-body">
        <Modal.Title className="font-body">Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group className="mb-3">
            <Form.Label>Mode</Form.Label>
            <Form.Select
              onChange={(e) => setMode(e.target.value as TLightMode)}
              defaultValue={mode}
              className="mb-3"
            >
              {Object.entries(LIGHT_MODE).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Check
            type="switch"
            id="spellcheck"
            label="Enable default spellcheck"
            onChange={(e) => setSpellcheck(e.target.checked)}
            checked={spellcheck}
            className="mb-3"
          ></Form.Check>

          <Form.Group className="mb-3">
            <Form.Label>Writing direction</Form.Label>
            <Form.Select
              onChange={(e) => setDirection(e.target.value as TTextDirection)}
              defaultValue={direction}
              className="mb-3"
            >
              {Object.entries(TEXT_DIRECTION).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Font</Form.Label>
            <Form.Select
              onChange={(e) => setFont(e.target.value as TFont)}
              defaultValue={font}
              className="mb-3"
            >
              {Object.entries(FONTS).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Font size (x{fontScale})</Form.Label>
            <Form.Range
              min={0.5}
              max={2}
              step={0.1}
              value={fontScale}
              onChange={(e) => setFontScale(e.target.valueAsNumber)}
            ></Form.Range>
          </Form.Group>

          <Button variant="warning" onClick={() => resetSettings()}>
            Reset Settings
          </Button>

          <Button variant="danger" className="ms-2" onClick={() => clearLocalStorage()}>
            Clear Local Storage
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowSettings(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
