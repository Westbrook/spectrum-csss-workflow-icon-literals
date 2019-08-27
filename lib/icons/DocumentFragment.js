import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DocumentFragment = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Document Fragment',
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
      aria-labelledby="${`title-DocumentFragment-${count}`}"
      aria-describedby="${`title-DocumentFragment-${count}`}"
    >
      <title id="${`title-DocumentFragment-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DocumentFragment-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46 6H2a2.071 2.071 0 00-2 2v32a2 2 0 002 2h44a2 2 0 002-2V8a2 2 0 00-2-2zM4 10h20v20c-1.04-1.837-2.879-3.674-3.714-3.619-.8.1-3.82 2.143-4.81 2.143-.886 0-4.4-3.286-5.381-3.286C7.333 25.238 5.81 28.19 4 30zm40 28H4v-4h40zm0-8H28v-4h16zm0-8H28v-4h16zm0-8H28v-4h16z"
      />
      <circle cx="17.5" cy="18.5" r="3" />
    </svg>
  `;
};
