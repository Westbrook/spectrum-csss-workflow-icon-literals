import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const UploadToCloud = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Upload To Cloud',
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
      aria-labelledby="${`title-UploadToCloud-${count}`}"
      aria-describedby="${`title-UploadToCloud-${count}`}"
    >
      <title id="${`title-UploadToCloud-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-UploadToCloud-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M26 32h-4v11a1 1 0 001 1h2a1 1 0 001-1zm11.5-15a7.392 7.392 0 00-.846.048A9.516 9.516 0 0037 14.5 9.638 9.638 0 0027.5 5c-5.125-.2-9.106 2.805-9.708 7.472A8.006 8.006 0 007.713 20.2a15.549 15.549 0 00.557 2.867A4.5 4.5 0 107.5 32H22v-8h-6.2a.8.8 0 01-.8-.8.787.787 0 01.2-.527l8.445-8.524a.5.5 0 01.7 0l8.455 8.519a.787.787 0 01.2.527.8.8 0 01-.8.8H26v8h11.5a7.5 7.5 0 000-15z"
      />
    </svg>
  `;
};
