import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ImageProfile = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Image Profile',
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
      aria-labelledby="${`title-ImageProfile-${count}`}"
      aria-describedby="${`title-ImageProfile-${count}`}"
    >
      <title id="${`title-ImageProfile-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ImageProfile-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46 6H2a2 2 0 00-2 2v32a2 2 0 002 2h44a2 2 0 002-2V8a2 2 0 00-2-2zm-2 32h-5.368c-1.373-2.2-4.019-4.368-8.978-4.871a1.535 1.535 0 01-1.329-1.541v-2.224a1.539 1.539 0 01.392-.993 11.746 11.746 0 002.671-7.33c0-5.547-2.942-8.647-7.387-8.647s-7.471 3.222-7.471 8.647a11.873 11.873 0 002.8 7.329 1.539 1.539 0 01.392.993v2.214a1.528 1.528 0 01-1.333 1.542c-5.112.445-7.741 2.635-9.065 4.88H4V10h40z"
        fill="currentColor"
      />
    </svg>
  `;
};
