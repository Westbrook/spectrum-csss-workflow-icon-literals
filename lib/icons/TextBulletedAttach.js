import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextBulletedAttach = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Bulleted Attach',
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
      aria-labelledby="${`title-TextBulletedAttach-${count}`}"
      aria-describedby="${`title-TextBulletedAttach-${count}`}"
    >
      <title id="${`title-TextBulletedAttach-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextBulletedAttach-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43 8H17a1 1 0 00-1 1v2a1 1 0 001 1h26a1 1 0 001-1V9a1 1 0 00-1-1zM8 36a4 4 0 104 4 4 4 0 00-4-4zm8-11v2a1 1 0 001 1h12.632l4-4H17a1 1 0 00-1 1zm-8-5a4 4 0 104 4 4 4 0 00-4-4zM8 4a4 4 0 104 4 4 4 0 00-4-4zm9 36a1 1 0 00-1 1v2a1 1 0 001 1h7.44a10.922 10.922 0 01-1.157-4zm28.4-2.674l-5.566 5.566a7 7 0 01-9.9-9.9l7.528-7.528a5 5 0 017.071 0 4.816 4.816 0 01-.156 6.915l-6.542 6.542a2.82 2.82 0 01-4.086.156 2.789 2.789 0 01.184-4.059l4.58-4.58 1.23 1.23-4.58 4.58a1 1 0 001.414 1.414l6.542-6.542a3 3 0 00-4.243-4.243l-7.528 7.528a5.232 5.232 0 00-.1 7.26 5.127 5.127 0 007.172-.189l5.566-5.566z"
      />
    </svg>
  `;
};
