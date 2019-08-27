import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphScatter = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Scatter',
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
      aria-labelledby="${`title-GraphScatter-${count}`}"
      aria-describedby="${`title-GraphScatter-${count}`}"
    >
      <title id="${`title-GraphScatter-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphScatter-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="24.8" cy="20.496" r="2.975" />
      <circle cx="22.096" cy="9.679" r="2.975" />
      <circle cx="41.025" cy="6.975" r="2.975" />
      <circle cx="27.504" cy="25.904" r="2.975" />
      <circle cx="35.617" cy="20.496" r="2.975" />
      <circle cx="16.688" cy="25.904" r="2.975" />
      <circle cx="16.688" cy="12.383" r="2.975" />
      <circle cx="22.096" cy="36.721" r="2.975" />
      <circle cx="8.574" cy="39.425" r="2.975" />
    </svg>
  `;
};
