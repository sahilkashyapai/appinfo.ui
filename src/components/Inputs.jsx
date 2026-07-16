import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Inputs() {
  return (
    <>
      <div className="comp-panel" id="p-input">
        <CompHeader
          title="Input & Form"
          lead="Inputs, selects, and textareas with helper states. .ai-input, .ai-select, and .ai-textarea share one visual language - bordered, rounded, full-width fields that highlight with a colored focus ring on .ai-input:focus. Add .error for an invalid state paired with .ai-error-msg, wrap a field in .ai-input-group with .ai-label and .ai-hint for standard form-field structure, or prefix a field with .ai-input-addon for units/protocols."
        />
        <div className="sub-heading">Text Inputs - States</div>
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
            <label className="ai-label">Serial Number (disabled)</label>
            <input className="ai-input" type="text" defaultValue="SN-88213-A" disabled />
            <span className="ai-hint">Assigned automatically and cannot be edited.</span>
          </div>
          <div className="ai-input-group">
            <label className="ai-label">Password</label>
            <input className="ai-input" type="password" defaultValue="hunter2" />
          </div>
          <div className="ai-input-group">
            <label className="ai-label">Install Date</label>
            <input className="ai-input" type="date" defaultValue="2026-01-15" />
          </div>
        </PreviewBlock>

        <div className="sub-heading">Input Groups (Addon)</div>
        <PreviewBlock
          label="Preview"
          canvasClassName="ai-d-flex ai-flex-column ai-gap-4"
        >
          <div className="ai-input-group">
            <label className="ai-label">Stream URL</label>
            <div className="ai-input-addon">
              <span className="addon">https://</span>
              <input className="ai-input" type="text" placeholder="camera-04.example.com" />
            </div>
          </div>
          <div className="ai-input-group">
            <label className="ai-label">Polling Timeout</label>
            <div className="ai-input-addon">
              <span className="addon"><span className="material-symbols-outlined" aria-hidden="true">timer</span></span>
              <input className="ai-input" type="number" defaultValue="30" />
            </div>
          </div>
        </PreviewBlock>

        <div className="sub-heading">Select &amp; Textarea</div>
        <PreviewBlock
          label="Preview"
          canvasClassName="ai-d-flex ai-flex-column ai-gap-4"
        >
          <div className="ai-input-group">
            <label className="ai-label">Zone</label>
            <select className="ai-select">
              <option>Zone A - North</option>
              <option>Zone B - South</option>
              <option>Zone C - East</option>
            </select>
          </div>
          <div className="ai-input-group">
            <label className="ai-label">Priority (disabled)</label>
            <select className="ai-select" disabled>
              <option>Standard</option>
            </select>
          </div>
          <div className="ai-input-group">
            <label className="ai-label">Notes</label>
            <textarea className="ai-textarea" placeholder="Enter any notes..." />
          </div>
          <div className="ai-input-group">
            <label className="ai-label">Maintenance Log (error state)</label>
            <textarea className="ai-textarea error" defaultValue={'Required field left blank.'} />
            <span className="ai-error-msg"><span className="material-symbols-outlined" aria-hidden="true">warning</span> This field cannot be empty.</span>
          </div>
        </PreviewBlock>

        <div className="ai-table-wrap">
          <table className="ai-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Applies to</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>ai-input-group</code></td>
                <td>Field wrapper</td>
                <td>Vertical flex stack (label, control, hint/error) with 5px gap.</td>
              </tr>
              <tr>
                <td><code>ai-label</code></td>
                <td><code>&lt;label&gt;</code></td>
                <td>12.5px, 600 weight; nest <code>&lt;span className="req"&gt;</code> for a required-field marker colored <code>var(--c-danger)</code>.</td>
              </tr>
              <tr>
                <td><code>ai-hint</code></td>
                <td>Helper text</td>
                <td>12px muted supporting copy below a field.</td>
              </tr>
              <tr>
                <td><code>ai-input</code></td>
                <td><code>&lt;input&gt;</code></td>
                <td>Works with any native <code>type</code> (text, password, number, date, email...); border, radius, focus ring via <code>:focus</code>.</td>
              </tr>
              <tr>
                <td><code>ai-select</code></td>
                <td><code>&lt;select&gt;</code></td>
                <td>Same field chrome as <code>.ai-input</code>.</td>
              </tr>
              <tr>
                <td><code>ai-textarea</code></td>
                <td><code>&lt;textarea&gt;</code></td>
                <td>Same chrome, vertically resizable, 90px minimum height.</td>
              </tr>
              <tr>
                <td><code>error</code></td>
                <td>Modifier on <code>.ai-input</code>/<code>.ai-select</code>/<code>.ai-textarea</code></td>
                <td>Red border, red-tinted focus ring; pair with <code>.ai-error-msg</code>.</td>
              </tr>
              <tr>
                <td><code>ai-error-msg</code></td>
                <td>Error text</td>
                <td>12px, <code>var(--c-danger)</code>, usually paired with a warning icon.</td>
              </tr>
              <tr>
                <td><code>ai-input-addon</code></td>
                <td>Group wrapper</td>
                <td>Flex row joining an <code>.addon</code> label chip to an <code>.ai-input</code>, sharing one pill shape (addon rounded left, input rounded right).</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td>Native attribute</td>
                <td>Browser-default dimmed/disabled rendering (no custom disabled skin defined).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="comp-panel" id="p-checkbox">
        <CompHeader
          title="Checkbox &amp; Radio"
          lead="Selection controls for single and multiple choices. .ai-check-label wraps a native checkbox or radio input with its text; inputs are enlarged to 17px and tinted with accent-color so browser-native controls match the theme. Stack related options inside .ai-check-group, and add .disabled to a label (plus the native disabled attribute on the input) to gray out an option."
        />
        <div className="sub-heading">Checkboxes &amp; Radio Buttons</div>
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
              <label className="ai-check-label disabled"><input type="checkbox" disabled defaultChecked /> Disabled &amp; Checked</label>
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
              <label className="ai-check-label disabled"><input type="radio" name="view-disabled" disabled /> Disabled</label>
            </div>
          </div>
        </PreviewBlock>

        <div className="sub-heading">Inline Layout</div>
        <PreviewBlock
          label="ai-check-group items can also flow horizontally when the group is placed in a flex row"
          canvasClassName="ai-d-flex ai-flex-column ai-gap-4"
        >
          <div className="ai-d-flex ai-gap-6" style={{ flexWrap: 'wrap' }}>
            <label className="ai-check-label"><input type="checkbox" defaultChecked /> Email Alerts</label>
            <label className="ai-check-label"><input type="checkbox" defaultChecked /> SMS Alerts</label>
            <label className="ai-check-label"><input type="checkbox" /> Push Notifications</label>
          </div>
        </PreviewBlock>

        <div className="ai-table-wrap">
          <table className="ai-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Applies to</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>ai-check-group</code></td>
                <td>Wrapper</td>
                <td>Vertical flex stack with 10px gap; remove the direction to lay options out inline instead.</td>
              </tr>
              <tr>
                <td><code>ai-check-label</code></td>
                <td><code>&lt;label&gt;</code></td>
                <td>14px text, flex-aligned with its input, 10px gap, pointer cursor; input is enlarged to 17px x 17px with <code>accent-color: var(--c-btn)</code>.</td>
              </tr>
              <tr>
                <td><code>ai-check-label.disabled</code></td>
                <td>Label modifier</td>
                <td>Fades the whole label to 45% opacity and sets <code>cursor: not-allowed</code> - pair with a native <code>disabled</code> attribute on the input (which independently dims the control to 40% opacity).</td>
              </tr>
              <tr>
                <td>native <code>type="checkbox"</code></td>
                <td>Multi-select</td>
                <td>Independent boolean options.</td>
              </tr>
              <tr>
                <td>native <code>type="radio"</code> + shared <code>name</code></td>
                <td>Single-select</td>
                <td>Only one option per <code>name</code> group can be checked.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
