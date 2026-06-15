import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Inputs() {
  return (
    <>
      <div className="comp-panel" id="p-input">
        <CompHeader
          title="Input & Form"
          lead="Inputs, selects, and textareas with helper states."
        />
        <PreviewBlock
          label="Preview"
          canvasClassName="ai-d-flex ai-flex-column ai-gap-4"
        >
          <div className="ai-input-group">
            <label className="ai-label">Device Name <span className="req">*</span></label>
            <input className="ai-input" type="text" placeholder="e.g. SNSR-042" />
            <span className="ai-hint">Enter a unique identifier for this device.</span>
          </div>
          <div className="ai-input-group">
            <label className="ai-label">IP Address (error state)</label>
            <input className="ai-input error" type="text" defaultValue="192.168.1.999" />
            <span className="ai-error-msg"><span className="material-symbols-outlined" aria-hidden="true">warning</span> Invalid IP address format.</span>
          </div>
          <div className="ai-input-group">
            <label className="ai-label">Zone</label>
            <select className="ai-select">
              <option>Zone A - North</option>
              <option>Zone B - South</option>
              <option>Zone C - East</option>
            </select>
          </div>
          <div className="ai-input-group">
            <label className="ai-label">Notes</label>
            <textarea className="ai-textarea" placeholder="Enter any notes..." />
          </div>
        </PreviewBlock>
      </div>

      <div className="comp-panel" id="p-checkbox">
        <CompHeader
          title="Checkbox &amp; Radio"
          lead="Selection controls for single and multiple choices."
        />
        <PreviewBlock
          label="Preview"
          canvasClassName="ai-row ai-row-cols-2 ai-g-4"
        >
          <div>
            <div className="ai-fs-8 ai-fw-bold ai-text-muted ai-text-uppercase ai-ls-wider ai-mb-3">
              Checkboxes
            </div>
            <div className="ai-check-group">
              <label className="ai-check-label"><input type="checkbox" defaultChecked /> Zone A - North</label>
              <label className="ai-check-label"><input type="checkbox" /> Zone B - South</label>
              <label className="ai-check-label"><input type="checkbox" /> Zone C - East</label>
              <label className="ai-check-label disabled"><input type="checkbox" disabled /> Disabled</label>
            </div>
          </div>
          <div>
            <div className="ai-fs-8 ai-fw-bold ai-text-muted ai-text-uppercase ai-ls-wider ai-mb-3">
              Radio Buttons
            </div>
            <div className="ai-check-group">
              <label className="ai-check-label"><input type="radio" name="view" defaultChecked /> Map View</label>
              <label className="ai-check-label"><input type="radio" name="view" /> List View</label>
              <label className="ai-check-label"><input type="radio" name="view" /> Grid View</label>
              <label className="ai-check-label disabled"><input type="radio" name="view" disabled /> Disabled</label>
            </div>
          </div>
        </PreviewBlock>
      </div>
    </>
  );
}
