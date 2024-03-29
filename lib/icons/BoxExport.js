import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const BoxExport = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Box Export',
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
      aria-labelledby="${`title-BoxExport-${count}`}"
      aria-describedby="${`title-BoxExport-${count}`}"
    >
      <title id="${`title-BoxExport-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-BoxExport-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18 46L1.028 36.572A2 2 0 010 34.823V18l18 10zM28.3 6.155l-7.348-3.978a2 2 0 00-1.905 0L.739 12.094a1.031 1.031 0 000 1.813l6.912 3.743zm10.96 5.939l-6.8-3.682-20.644 11.5L20 24.339l19.26-10.433a1.031 1.031 0 000-1.812zM35 24h5v-6L22 28v18l4-2.222V32a2 2 0 012-2h6v-5a1 1 0 011-1z"
      />
      <path
        d="M38 34v-5.341a.5.5 0 01.864-.343L48 38l-9.136 9.684a.5.5 0 01-.864-.343V42h-7a1 1 0 01-1-1v-6a1 1 0 011-1z"
      />
    </svg>
  `;
};
