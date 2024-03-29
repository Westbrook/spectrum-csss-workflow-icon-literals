import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const EditInLight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Edit In Light',
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
      aria-labelledby="${`title-EditInLight-${count}`}"
      aria-describedby="${`title-EditInLight-${count}`}"
    >
      <title id="${`title-EditInLight-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-EditInLight-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18.809 32H8V8h24v10.809l4-4V5a1 1 0 00-1-1H5a1 1 0 00-1 1v30a1 1 0 001 1h11.571a13.809 13.809 0 01.849-2.138A11.88 11.88 0 0118.809 32zm28.717-9.753l-5.764-5.765a1.217 1.217 0 00-.867-.353h-.038a1.371 1.371 0 00-.927.406L21.043 35.423a1 1 0 00-.251.421l-2.777 9.305c-.114.377.459.851.783.851a.3.3 0 00.061-.006c.276-.064 7.867-2.345 9.312-2.779a.984.984 0 00.414-.249l18.887-18.887a1.376 1.376 0 00.405-.884 1.225 1.225 0 00-.351-.948zm-26.9 21.142l2.009-6.731 4.72 4.708c-2.155.65-4.861 1.466-6.728 2.023z"
      />
    </svg>
  `;
};
