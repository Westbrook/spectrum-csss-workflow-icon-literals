import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const UserCheckedOut = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'User Checked Out',
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
      aria-labelledby="${`title-UserCheckedOut-${count}`}"
      aria-describedby="${`title-UserCheckedOut-${count}`}"
    >
      <title id="${`title-UserCheckedOut-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-UserCheckedOut-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 24a12 12 0 1012 12 12 12 0 00-12-12zm6 14.48a.594.594 0 01-1.015.42l-2.528-2.529-5.336 5.336a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l5.336-5.336-2.529-2.528A.594.594 0 0133.52 30h8.126a.354.354 0 01.354.354z"
      />
      <path
        d="M20 36a15.939 15.939 0 015.124-11.712 13.915 13.915 0 01-.086-1.836 18.8 18.8 0 004.45-11.228c0-6.793-3.88-11.213-9.471-11.222L20.009 0H20c-5.59.01-9.471 4.431-9.471 11.224a18.8 18.8 0 004.45 11.228c0 2.07-.034 3.732-2.11 3.91-2.734.238-11.488 3.1-12.852 11.38A2 2 0 002.039 40h18.485A15.974 15.974 0 0120 36z"
      />
    </svg>
  `;
};
