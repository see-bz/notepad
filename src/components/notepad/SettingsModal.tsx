import { FONTS, TFont, useSettingsStore } from "@/store/settings";
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
              onChange={(e) => setMode(e.target.value as "light" | "dark")}
              defaultValue={mode}
              className="mb-3"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
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
              onChange={(e) => setDirection(e.target.value as "ltr" | "rtl")}
              defaultValue={direction}
              className="mb-3"
            >
              <option value="ltr">Left to right</option>
              <option value="rtl">Right to left</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Font</Form.Label>
            <Form.Select
              onChange={(e) =>
                setFont(e.target.value as TFont)
              }
              defaultValue={font}
              className="mb-3"
            >
              {Object.entries(FONTS).map(([key, value]) => (
                <option key={key} value={value}>{value}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => setShowSettings(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
