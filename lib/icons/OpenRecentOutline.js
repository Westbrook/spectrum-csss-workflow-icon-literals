import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const OpenRecentOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Open Recent Outline',
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
      aria-labelledby="${`title-OpenRecentOutline-${count}`}"
      aria-describedby="${`title-OpenRecentOutline-${count}`}"
    >
      <title id="${`title-OpenRecentOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-OpenRecentOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.27 38H6l4-20h33.561l-.852 3.406a15.886 15.886 0 013.4 2.135l1.763-7.056A2 2 0 0045.938 14h-3.377v-2a2 2 0 00-2-2h-15.3l-4.839-4.832A4 4 0 0017.6 4H6a4 4 0 00-4 4v32a2 2 0 002 2h17.359a15.769 15.769 0 01-1.089-4z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm0 20.8a8.887 8.887 0 01-1.5-17.649v9.37l3.688 3.688a.5.5 0 00.708 0L40.31 38.9a.5.5 0 000-.707l-2.81-2.814v-8.128A8.887 8.887 0 0136 44.9z"
      />
    </svg>
  `;
};
