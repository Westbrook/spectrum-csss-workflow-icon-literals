import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DataRefresh = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Data Refresh',
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
      aria-labelledby="${`title-DataRefresh-${count}`}"
      aria-describedby="${`title-DataRefresh-${count}`}"
    >
      <title id="${`title-DataRefresh-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DataRefresh-${count}`}">${desc}</desc>
          `
        : html``}
      <ellipse cx="24" cy="10.25" rx="20" ry="6.25" />
      <path
        d="M18 35.875A10.511 10.511 0 0118.21 34a17.336 17.336 0 01.5-2.115c-6-.568-13.021-2.055-14.709-4.732v10.6c0 2.8 5.886 5.167 14 5.963zM34 20a15.3 15.3 0 018.284 2.417l.858-.876.858-.876V15.5c-3.059 3.865-13.83 5-20 5s-17.765-1.458-20-5v6.471c0 3.059 7.039 5.6 16.33 6.14A15.9 15.9 0 0134 20zm8.96 16A9.186 9.186 0 0134 44.58a8.181 8.181 0 01-6.222-2.69L31.66 38H22v9.68l3.475-3.48A11.641 11.641 0 0034 48c6.38 0 11.58-5.3 12-12z"
      />
      <path
        d="M42.566 27.846A11.564 11.564 0 0034 24c-6.38 0-11.58 5.3-12 12h3.04A9.186 9.186 0 0134 27.42a8.765 8.765 0 016.32 2.72L36.54 34H46v-9.66z"
      />
    </svg>
  `;
};
