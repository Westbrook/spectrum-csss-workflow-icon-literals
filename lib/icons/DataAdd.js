import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DataAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Data Add',
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
      aria-labelledby="${`title-DataAdd-${count}`}"
      aria-describedby="${`title-DataAdd-${count}`}"
    >
      <title id="${`title-DataAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DataAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <ellipse cx="24" cy="10.25" rx="20" ry="6.25" />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8 13.4a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5zM20 36a15.949 15.949 0 01.517-3.971C14.211 31.608 5.862 30.105 4 27.152v10.6c0 3.255 7.968 5.927 18.14 6.221A15.917 15.917 0 0120 36z"
      />
      <path
        d="M36 20a15.909 15.909 0 017.972 2.141c0-.058.028-.115.028-.173V15.5c-3.059 3.868-13.83 5-20 5s-17.765-1.461-20-5v6.471c0 3.245 7.917 5.911 18.044 6.219A15.988 15.988 0 0136 20z"
      />
    </svg>
  `;
};
