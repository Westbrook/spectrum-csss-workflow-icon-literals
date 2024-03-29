import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Login = ({ width = 24, height = 24, hidden = false, title = 'Login', desc } = {}) => {
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
      aria-labelledby="${`title-Login-${count}`}"
      aria-describedby="${`title-Login-${count}`}"
    >
      <title id="${`title-Login-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Login-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M16 40.667a11.012 11.012 0 0111-11 10.6 10.6 0 012.2.23l.529-.529a2.071 2.071 0 01-.7-1.535v-2.808a2.039 2.039 0 01.455-1.252 17.5 17.5 0 003.1-9.86c0-7-3.419-10.3-8.585-10.3s-8.683 3.455-8.683 10.3a17.628 17.628 0 003.253 9.859 2.036 2.036 0 01.455 1.253v2.795a1.888 1.888 0 01-1.549 1.945C6.182 30.881 4 38.96 4 42c0 .338.037 1.667.06 2h12.46a10.937 10.937 0 01-.52-3.333z"
      />
      <path
        d="M47.629 28.825L42.6 23.8a1.167 1.167 0 00-1.65 0l-10.7 10.7a6.92 6.92 0 00-3.25-.833 7 7 0 107 7 6.925 6.925 0 00-.816-3.214l5.231-5.231 2.909 2.909a.583.583 0 00.825 0l2.6-2.6-3.321-3.321.958-.957 3.321 3.321 1.921-1.921a.583.583 0 00.001-.828zm-21.458 15A2.333 2.333 0 1128.5 41.5a2.334 2.334 0 01-2.329 2.329z"
      />
    </svg>
  `;
};
