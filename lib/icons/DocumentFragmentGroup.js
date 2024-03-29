import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DocumentFragmentGroup = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Document Fragment Group',
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
      aria-labelledby="${`title-DocumentFragmentGroup-${count}`}"
      aria-describedby="${`title-DocumentFragmentGroup-${count}`}"
    >
      <title id="${`title-DocumentFragmentGroup-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DocumentFragmentGroup-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46 14H10a2 2 0 00-2 2v24a2 2 0 002 2h36a2 2 0 002-2V16a2 2 0 00-2-2zm-34 4h16v12c-1.04-1.837-2.879-3.674-3.714-3.619-.8.1-3.82 2.143-4.81 2.143-.886 0-2.741-2.774-3.726-2.774-2.762 0-1.94 2.44-3.75 4.25zm32 20H12v-4h32zm0-8H32v-4h12zm0-8H32v-4h12z"
      />
      <circle cx="21.5" cy="22.5" r="3" />
      <path d="M4 11a1 1 0 011-1h35V7a1 1 0 00-1-1H1a1 1 0 00-1 1v26a1 1 0 001 1h3z" />
    </svg>
  `;
};
