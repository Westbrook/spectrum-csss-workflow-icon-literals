import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Heal = ({ width = 24, height = 24, hidden = false, title = 'Heal', desc } = {}) => {
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
      aria-labelledby="${`title-Heal-${count}`}"
      aria-describedby="${`title-Heal-${count}`}"
    >
      <title id="${`title-Heal-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Heal-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43.637 4.363a8 8 0 00-11.313 0l-8.609 8.608L4.363 32.324a8 8 0 1011.313 11.313l7.93-7.93 20.031-20.031a8 8 0 000-11.313zM29.625 20.508a2.934 2.934 0 11-2.933 2.934 2.934 2.934 0 012.933-2.934zm-5.063-5.062a2.933 2.933 0 11-2.933 2.933 2.934 2.934 0 012.933-2.933zM24 26.133a2.934 2.934 0 11-2.934 2.934A2.934 2.934 0 0124 26.133zm-5.063-5.062A2.934 2.934 0 1116 24a2.934 2.934 0 012.933-2.929z"
        fill="currentColor"
      />
    </svg>
  `;
};
