import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const NoteAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Note Add',
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
      aria-labelledby="${`title-NoteAdd-${count}`}"
      aria-describedby="${`title-NoteAdd-${count}`}"
    >
      <title id="${`title-NoteAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-NoteAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8 13.4a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5z"
      />
      <path
        d="M20.1 36.1a15.95 15.95 0 01.551-4.1H11a1 1 0 01-1-1v-2a1 1 0 011-1h11.319a16.063 16.063 0 013.333-4H11a1 1 0 01-1-1v-2a1 1 0 011-1h28a1 1 0 01.9.572A15.89 15.89 0 0144 22.2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v28a2 2 0 002 2h10l6 10 1.354-2.257A15.908 15.908 0 0120.1 36.1zM10 13a1 1 0 011-1h24a1 1 0 011 1v2a1 1 0 01-1 1H11a1 1 0 01-1-1z"
      />
    </svg>
  `;
};
