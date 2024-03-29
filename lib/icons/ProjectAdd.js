import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ProjectAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Project Add',
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
      aria-labelledby="${`title-ProjectAdd-${count}`}"
      aria-describedby="${`title-ProjectAdd-${count}`}"
    >
      <title id="${`title-ProjectAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ProjectAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M14.1 4.8a2 2 0 00-1.6-.8H2a2 2 0 00-2 2v4h18zm6 31.3A15.845 15.845 0 0140 20.728V16a2 2 0 00-2-2H0v26a2 2 0 002 2h19.244a15.82 15.82 0 01-1.144-5.9zM10 37a1 1 0 01-1 1H7a1 1 0 01-1-1V19a1 1 0 011-1h2a1 1 0 011 1zm8 0a1 1 0 01-1 1h-2a1 1 0 01-1-1V27a1 1 0 011-1h2a1 1 0 011 1z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8 13.4a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5z"
      />
    </svg>
  `;
};
