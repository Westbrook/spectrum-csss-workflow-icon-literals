import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Draft = ({ width = 24, height = 24, hidden = false, title = 'Draft', desc } = {}) => {
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
      aria-labelledby="${`title-Draft-${count}`}"
      aria-describedby="${`title-Draft-${count}`}"
    >
      <title id="${`title-Draft-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Draft-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M47.713 28.966l-4.68-4.68a.986.986 0 00-.7-.287H42.3a1.114 1.114 0 00-.753.33L27.1 38.776a.811.811 0 00-.2.342l-2.816 8.112c-.092.306.373.69.636.69a.233.233 0 00.05-.005c.224-.052 6.944-2.461 8.117-2.814a.8.8 0 00.336-.2l14.446-14.448a1.117 1.117 0 00.331-.717.992.992 0 00-.287-.77zM32.225 43.6c-1.754.527-4.5 1.747-6.02 2.2l2.189-6.022zM28 4v12h12L28 4z"
      />
      <path
        d="M23.117 37.807a4.663 4.663 0 011.156-1.859L40 20.588V20H26a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h10.972z"
      />
    </svg>
  `;
};
