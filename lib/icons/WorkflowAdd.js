import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const WorkflowAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Workflow Add',
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
      aria-labelledby="${`title-WorkflowAdd-${count}`}"
      aria-describedby="${`title-WorkflowAdd-${count}`}"
    >
      <title id="${`title-WorkflowAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-WorkflowAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 18h-8a2 2 0 00-2 2v.628a15.678 15.678 0 0112 1.647V20a2 2 0 00-2-2zm0-14h-8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2zM29 8h-6a1 1 0 00-1 1v13h-3a1 1 0 00-1 1v2a1 1 0 001 1h3v2.461A15.968 15.968 0 0128.461 22H26V12h3a1 1 0 001-1V9a1 1 0 00-1-1zm-15 6H6a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V16a2 2 0 00-2-2zm10.2 22.1a11.9 11.9 0 1011.9-11.9 11.9 11.9 0 00-11.9 11.9zm13.4-8a.5.5 0 01.5.5v5.5h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-5.5v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-5.5h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h5.5v-5.5a.5.5 0 01.5-.5z"
      />
    </svg>
  `;
};
