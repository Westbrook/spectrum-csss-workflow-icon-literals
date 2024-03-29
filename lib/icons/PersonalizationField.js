import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PersonalizationField = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Personalization Field',
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
      aria-labelledby="${`title-PersonalizationField-${count}`}"
      aria-describedby="${`title-PersonalizationField-${count}`}"
    >
      <title id="${`title-PersonalizationField-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PersonalizationField-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 2H6a2 2 0 00-2 2v40a2 2 0 002 2h36a2 2 0 002-2V4a2 2 0 00-2-2zM16 39a1 1 0 01-1 1H9a1 1 0 01-1-1v-2a1 1 0 011-1h6a1 1 0 011 1zm24 0a1 1 0 01-1 1H21a1 1 0 01-1-1v-2a1 1 0 011-1h18a1 1 0 011 1zm0-9h-3.455c-1.238-1.822-3.517-3.556-7.631-3.974a1.334 1.334 0 01-1.154-1.34v-1.933a1.341 1.341 0 01.34-.863 10.208 10.208 0 002.322-6.372C30.422 10.695 27.865 8 24 8s-6.5 2.8-6.5 7.517a10.324 10.324 0 002.434 6.372 1.336 1.336 0 01.341.863v1.925a1.328 1.328 0 01-1.158 1.34C14.876 26.388 12.6 28.143 11.4 30H8V6h32z"
        fill="currentColor"
      />
    </svg>
  `;
};
