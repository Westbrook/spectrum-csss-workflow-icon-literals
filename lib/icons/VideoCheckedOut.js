import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const VideoCheckedOut = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Video Checked Out',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 48 48"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-VideoCheckedOut-${count}`}"
      aria-describedby="${`title-VideoCheckedOut-${count}`}"
    >
      <title id="${`title-VideoCheckedOut-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-VideoCheckedOut-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 24a12 12 0 1012 12 12 12 0 00-12-12zm6 14.48a.594.594 0 01-1.015.42l-2.528-2.529-5.336 5.336a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l5.336-5.336-2.529-2.528A.594.594 0 0133.52 30h8.126a.354.354 0 01.354.354z"
      />
      <path
        d="M20 36a15.923 15.923 0 013.52-10H15a1 1 0 01-1-1v-2a1 1 0 011-1h13.26A15.92 15.92 0 0136 20a16.085 16.085 0 012 .138V17a1 1 0 011-1h2a1 1 0 011 1v4.174a15.891 15.891 0 012 .984V6a2 2 0 00-2-2H6a2 2 0 00-2 2v36a2 2 0 002 2h16.158A15.905 15.905 0 0120 36zM38 7a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1zM10 41a1 1 0 01-1 1H7a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1H7a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1H7a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h2a1 1 0 011 1z"
      />
    </svg>
  `;
};
