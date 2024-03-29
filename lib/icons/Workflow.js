import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Workflow = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Workflow',
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
      aria-labelledby="${`title-Workflow-${count}`}"
      aria-describedby="${`title-Workflow-${count}`}"
    >
      <title id="${`title-Workflow-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Workflow-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="20" rx="2" ry="2" width="12" x="4" y="14" />
      <rect height="12" rx="2" ry="2" width="12" x="32" y="4" />
      <rect height="12" rx="2" ry="2" width="12" x="32" y="18" />
      <rect height="12" rx="2" ry="2" width="12" x="32" y="32" />
      <path
        d="M30 11V9a1 1 0 00-1-1h-6a1 1 0 00-1 1v13h-3a1 1 0 00-1 1v2a1 1 0 001 1h3v13a1 1 0 001 1h6a1 1 0 001-1v-2a1 1 0 00-1-1h-3V26h3a1 1 0 001-1v-2a1 1 0 00-1-1h-3V12h3a1 1 0 001-1z"
      />
    </svg>
  `;
};
