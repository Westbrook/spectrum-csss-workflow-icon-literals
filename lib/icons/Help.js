import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Help = ({ width = 24, height = 24, hidden = false, title = 'Help', desc } = {}) => {
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
      aria-labelledby="${`title-Help-${count}`}"
      aria-describedby="${`title-Help-${count}`}"
    >
      <title id="${`title-Help-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Help-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zm-.063 33.887a2.844 2.844 0 110-5.688 2.718 2.718 0 012.863 2.824 2.665 2.665 0 01-2.863 2.864zm1.515-11.457a4.3 4.3 0 00.735 2.168.212.212 0 01-.2.327h-3.6a.532.532 0 01-.492-.2 4.413 4.413 0 01-1.063-2.782c0-3.274 5.359-5.279 5.359-8.552 0-1.6-1.309-2.987-3.8-2.987a11.818 11.818 0 00-4.951 1.023c-.164.081-.287 0-.287-.164v-3.236c0-.164 0-.327.163-.41a14 14 0 016.1-1.268c4.787 0 7.856 2.742 7.856 6.67-.01 4.5-5.82 7.081-5.82 9.411z"
        fill="currentColor"
      />
    </svg>
  `;
};
