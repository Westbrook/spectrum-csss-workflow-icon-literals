import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ImageAlbum = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Image Album',
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
      aria-labelledby="${`title-ImageAlbum-${count}`}"
      aria-describedby="${`title-ImageAlbum-${count}`}"
    >
      <title id="${`title-ImageAlbum-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ImageAlbum-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M37 20.7a3.7 3.7 0 10-3.7-3.7 3.7 3.7 0 003.7 3.7z" />
      <path
        d="M46 6H6a2 2 0 00-2 2v4H1a1 1 0 00-1 1v2a1 1 0 001 1h3v16H1a1 1 0 00-1 1v2a1 1 0 001 1h3v4a2 2 0 002 2h40a2 2 0 002-2V8a2 2 0 00-2-2zM10 35a1 1 0 01-1 1H6v-4h3a1 1 0 011 1zm0-20a1 1 0 01-1 1H6v-4h3a1 1 0 011 1zm34 19.809l-6.4-6.4a2.427 2.427 0 00-3.434 0l-3.729 3.729-9.176-9.176a2.43 2.43 0 00-3.435 0L12 28.786V10h32z"
      />
    </svg>
  `;
};
