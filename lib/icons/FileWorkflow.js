import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileWorkflow = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Workflow',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="${height}"
      viewBox="0 0 48 48"
      width="${width}"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-FileWorkflow-${count}`}"
      aria-describedby="${`title-FileWorkflow-${count}`}"
    >
      <title id="${`title-FileWorkflow-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileWorkflow-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M28 4v12h12L28 4z" />
      <path
        d="M20 43.5v-9a4.506 4.506 0 014.5-4.5h12.26A4.489 4.489 0 0140 28.063V20H26a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h10.051a4.446 4.446 0 01-.051-.5z"
      />
      <path
        d="M46 37.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5V36h-4v6h4v-1.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5V44h-5.5a.5.5 0 01-.5-.5V40h-4v3.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V38h4v-3.5a.5.5 0 01.5-.5H40v-1.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5z"
      />
    </svg>
  `;
};
