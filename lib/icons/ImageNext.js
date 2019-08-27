import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ImageNext = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Image Next',
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
      aria-labelledby="${`title-ImageNext-${count}`}"
      aria-describedby="${`title-ImageNext-${count}`}"
    >
      <title id="${`title-ImageNext-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ImageNext-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="19.5" cy="18.404" r="3.094" />
      <path
        d="M39.669 31.722L48 23l-8.331-8.708a1 1 0 00-1.669.743V20H26.5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5H38v4.979a1 1 0 001.669.743z"
      />
      <path
        d="M34 16v-6a2 2 0 00-2-2H2a2 2 0 00-2 2v28a2 2 0 002 2h30a2 2 0 002-2v-8h-4v3.311c-1.92-2.034-5.14-4.645-6.682-4.583-2.409 0-3.5 4.006-6.753 4.006-2.2 0-3.366-7.519-5.838-7.519S6.479 28.587 4 31.7V12h26v4z"
      />
    </svg>
  `;
};
