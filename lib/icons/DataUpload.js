import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DataUpload = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Data Upload',
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
      aria-labelledby="${`title-DataUpload-${count}`}"
      aria-describedby="${`title-DataUpload-${count}`}"
    >
      <title id="${`title-DataUpload-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DataUpload-${count}`}">${desc}</desc>
          `
        : html``}
      <ellipse cx="24" cy="10.25" rx="20" ry="6.25" />
      <path
        d="M26 40h-4.414a3 3 0 01-2.122-5.121l2.76-2.76C15.831 31.877 6.037 30.382 4 27.152v10.6C4 41.2 12.954 44 24 44q1.013 0 2-.031zm16.2-15.454a3.387 3.387 0 001.8-2.578V15.5c-1.315 1.663-4.06 2.819-7.248 3.6zM26.163 28.18l8.669-8.669A60.9 60.9 0 0124 20.5c-6.17 0-17.765-1.461-20-5.006v6.471c0 3.451 8.954 6.25 20 6.25.731.003 1.452-.015 2.163-.035zm20.983 6.966a.5.5 0 01-.353.854H42v12H30V36h-4.793a.5.5 0 01-.353-.854L36 24z"
      />
    </svg>
  `;
};
