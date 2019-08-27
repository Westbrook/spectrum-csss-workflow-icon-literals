import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GenderFemale = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Gender Female',
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
      aria-labelledby="${`title-GenderFemale-${count}`}"
      aria-describedby="${`title-GenderFemale-${count}`}"
    >
      <title id="${`title-GenderFemale-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GenderFemale-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="24" cy="4.913" r="4.913" />
      <path
        d="M17.053 17.757l.7 8.666-5.715 9.7a1.248 1.248 0 001.335 1.491h5.9l.924 9.342A1.211 1.211 0 0021.4 48h5.18a1.211 1.211 0 001.206-1.044l.929-9.342h5.906a1.248 1.248 0 001.335-1.491l-5.715-9.7.708-8.712a5.211 5.211 0 00-3.61-5.521 5.4 5.4 0 00-1.418-.19h-3.842a5.39 5.39 0 00-.733.05 5.243 5.243 0 00-4.293 5.707z"
      />
    </svg>
  `;
};
