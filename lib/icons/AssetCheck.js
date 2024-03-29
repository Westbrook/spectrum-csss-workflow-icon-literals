import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AssetCheck = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Asset Check',
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
      aria-labelledby="${`title-AssetCheck-${count}`}"
      aria-describedby="${`title-AssetCheck-${count}`}"
    >
      <title id="${`title-AssetCheck-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AssetCheck-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="23.8" cy="10.6" r="2.5" />
      <path
        d="M38 14h-2V4a2 2 0 00-2-2H2a2 2 0 00-2 2v24a2 2 0 002 2h10V15.146A3.638 3.638 0 009.785 14C8.189 14 5.729 16.85 4 19.148V6h28v8H18a2 2 0 00-2 2v22a2 2 0 002 2h2.6a15.9 15.9 0 01-.378-2H18.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h1.754a15.9 15.9 0 01.4-2H18.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v.061c.113-.211.246-.41.369-.615A.477.477 0 0122 27.5v-1a.5.5 0 01.5-.5h1.221A15.792 15.792 0 0140 20.728V16a2 2 0 00-2-2zM22 25.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm16 0a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5z"
      />
      <path
        d="M36 24.1a11.85 11.85 0 100 23.7 11.85 11.85 0 000-23.7zm-2.229 19.8l-6.132-6.132a.5.5 0 010-.707L29.4 35.3a.5.5 0 01.707 0L34 39.188l8.939-8.94a.5.5 0 01.708 0l1.886 1.887a.5.5 0 010 .707L34.479 43.9a.5.5 0 01-.708 0z"
      />
    </svg>
  `;
};
