import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DataCorrelated = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Data Correlated',
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
      aria-labelledby="${`title-DataCorrelated-${count}`}"
      aria-describedby="${`title-DataCorrelated-${count}`}"
    >
      <title id="${`title-DataCorrelated-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DataCorrelated-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M33.965 18.685a11.975 11.975 0 00-15.28 15.28 15.975 15.975 0 0015.28-15.28z" />
      <path
        d="M14 30a15.959 15.959 0 0119.583-15.583 15.994 15.994 0 10-19.166 19.166A16.017 16.017 0 0114 30z"
      />
      <path
        d="M33.583 14.417A16.017 16.017 0 0134 18c0 .231-.025.456-.035.685a11.994 11.994 0 11-15.28 15.28c-.229.01-.453.035-.685.035a16.017 16.017 0 01-3.583-.417 15.994 15.994 0 1019.166-19.166z"
      />
    </svg>
  `;
};
