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
          canvasStyle={{ display: 'flex', flexDirection: 'column', gap: 16}}
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
          canvasStyle={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
        >
          <div>
            <div style={{ fontSize: '12px', fontFamily: "'DM Mono', monospace", color: 'var(--c-text-muted)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '.1em' }}>
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
            <div style={{ fontSize: '12px', fontFamily: "'DM Mono', monospace", color: 'var(--c-text-muted)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '.1em' }}>
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
