import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AlertCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Alert Circle',
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
      aria-labelledby="${`title-AlertCircle-${count}`}"
      aria-describedby="${`title-AlertCircle-${count}`}"
    >
      <title id="${`title-AlertCircle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AlertCircle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M23.9 7.8A16.1 16.1 0 117.8 23.9 16.118 16.118 0 0123.9 7.8zm0-3.8a19.9 19.9 0 1019.9 19.9A19.9 19.9 0 0023.9 4z"
      />
      <path
        d="M21 32.408a2.742 2.742 0 012.7-2.784c.068 0 .135 0 .2.005a2.7 2.7 0 012.894 2.484 2.9 2.9 0 01.006.3 2.636 2.636 0 01-2.559 2.711 2.769 2.769 0 01-.341-.012 2.638 2.638 0 01-2.888-2.358 2.769 2.769 0 01-.012-.346zm5.358-20.514a.5.5 0 01.24.443v2.516c0 3.384-.684 9.619-.8 10.829 0 .12-.041.24-.283.24h-3.226a.267.267 0 01-.283-.24c-.08-1.128-.725-7.324-.725-10.708v-2.517a.427.427 0 01.2-.442 6.949 6.949 0 012.417-.484 7.91 7.91 0 012.46.363z"
      />
    </svg>
  `;
};
