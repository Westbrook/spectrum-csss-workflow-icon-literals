import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DataEdit = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Data Edit',
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
      aria-labelledby="${`title-DataEdit-${count}`}"
      aria-describedby="${`title-DataEdit-${count}`}"
    >
      <title id="${`title-DataEdit-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DataEdit-${count}`}">${desc}</desc>
          `
        : html``}
      <ellipse cx="24" cy="10.25" rx="20" ry="6.25" />
      <path
        d="M23.056 37.9a4.835 4.835 0 011.17-1.906L28.216 32a61.163 61.163 0 01-4.216.156c-6.17 0-17.765-1.461-20-5.005v10.6c0 3.129 7.365 5.713 16.968 6.171zm9.56-10.3l6.058-6.058a5.146 5.146 0 013.548-1.5h.062A5.011 5.011 0 0144 20.36V15.5c-3.059 3.865-13.83 5-20 5s-17.765-1.458-20-5v6.471c0 3.451 8.954 6.25 20 6.25a58.671 58.671 0 008.616-.621zm15.052 1.41l-4.68-4.68a.987.987 0 00-.7-.287h-.031a1.112 1.112 0 00-.753.33L27.055 38.82a.812.812 0 00-.2.342l-2.813 8.112c-.092.306.373.69.636.69a.221.221 0 00.05-.005c.224-.052 6.944-2.461 8.117-2.814a.8.8 0 00.336-.2L47.624 30.5a1.115 1.115 0 00.328-.717.992.992 0 00-.284-.773zM32.18 43.645c-1.754.527-4.5 1.747-6.02 2.2l2.189-6.022z"
      />
    </svg>
  `;
};
