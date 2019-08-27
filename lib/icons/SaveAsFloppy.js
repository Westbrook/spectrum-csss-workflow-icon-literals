import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SaveAsFloppy = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Save As Floppy',
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
      aria-labelledby="${`title-SaveAsFloppy-${count}`}"
      aria-describedby="${`title-SaveAsFloppy-${count}`}"
    >
      <title id="${`title-SaveAsFloppy-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SaveAsFloppy-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M24 4h6v8h-6z" />
      <path
        d="M20.627 40H10V24h15.59A15.825 15.825 0 0144 22.275V12l-8-8h-2v12H16V4H6a2 2 0 00-2 2v36a2 2 0 002 2h16.275a15.8 15.8 0 01-1.648-4z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8 13.4a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5z"
      />
    </svg>
  `;
};
