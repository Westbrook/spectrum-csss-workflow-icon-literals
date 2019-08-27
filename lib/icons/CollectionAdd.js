import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CollectionAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Collection Add',
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
      aria-labelledby="${`title-CollectionAdd-${count}`}"
      aria-describedby="${`title-CollectionAdd-${count}`}"
    >
      <title id="${`title-CollectionAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CollectionAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24.1 33.9A11.9 11.9 0 1036 22a11.9 11.9 0 00-11.9 11.9zm3.9-1.5a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v5.5h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-5.5h-5.5a.5.5 0 01-.5-.5z"
      />
      <path
        d="M20.627 38H18V26h4.275a15.959 15.959 0 013.315-4H18V10h10v10.275a15.8 15.8 0 014-1.648V10h10v9.28a15.864 15.864 0 014 2.365V8a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h20.275a15.8 15.8 0 01-1.648-4zM14 38H4V26h10zm0-16H4V10h10z"
      />
    </svg>
  `;
};
