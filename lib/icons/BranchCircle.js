import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const BranchCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Branch Circle',
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
      aria-labelledby="${`title-BranchCircle-${count}`}"
      aria-describedby="${`title-BranchCircle-${count}`}"
    >
      <title id="${`title-BranchCircle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-BranchCircle-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="32" cy="32" r="3.307" />
      <circle cx="32" cy="16" r="3.307" />
      <path
        d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zm8 34.1a6.122 6.122 0 01-6.093-7.266L18.863 27.8a6.2 6.2 0 110-7.606l7.044-3.131a6.252 6.252 0 111.23 2.737l-7.044 3.13a5.33 5.33 0 010 2.132l7.043 3.138A6.189 6.189 0 1132 38.2z"
      />
    </svg>
  `;
};
