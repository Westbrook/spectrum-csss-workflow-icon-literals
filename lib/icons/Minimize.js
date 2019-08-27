import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Minimize = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Minimize',
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
      aria-labelledby="${`title-Minimize-${count}`}"
      aria-describedby="${`title-Minimize-${count}`}"
    >
      <title id="${`title-Minimize-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Minimize-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43.96 6.133L41.867 4.04a1 1 0 00-1.414 0l-9.142 9.142-3.947-3.946A.781.781 0 0026.8 9a.8.8 0 00-.8.754V21.5a.5.5 0 00.5.5h11.75a.8.8 0 00.75-.8.784.784 0 00-.235-.56l-3.948-3.947 9.142-9.142a1 1 0 00.001-1.418zM21.5 26H9.754a.8.8 0 00-.754.8.784.784 0 00.235.56l3.948 3.947-9.142 9.146a1 1 0 000 1.414l2.092 2.093a1 1 0 001.414 0l9.142-9.142 3.947 3.946A.781.781 0 0021.2 39a.8.8 0 00.8-.754V26.5a.5.5 0 00-.5-.5z"
      />
    </svg>
  `;
};
