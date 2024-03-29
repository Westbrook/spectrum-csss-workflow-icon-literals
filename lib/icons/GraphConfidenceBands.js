import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphConfidenceBands = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Confidence Bands',
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
      aria-labelledby="${`title-GraphConfidenceBands-${count}`}"
      aria-describedby="${`title-GraphConfidenceBands-${count}`}"
    >
      <title id="${`title-GraphConfidenceBands-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphConfidenceBands-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M37.959 16.7l-1.922.549a1.5 1.5 0 00.412 2.941 1.451 1.451 0 00.412-.059l1.922-.549a1.5 1.5 0 10-.824-2.883zm-7.77 3.546l-1.414 1.414a1.5 1.5 0 102.125 2.121l1.414-1.414a1.5 1.5 0 00-2.121-2.121zM0 29.01l10.684-10.682 8.953 2.238a1.514 1.514 0 001.424-.395l9.547-9.547L48 4.1V.9L29.25 7.93a1.476 1.476 0 00-.533.344l-9.178 9.176-8.953-2.238a1.5 1.5 0 00-1.424.394L0 24.768zM45.652 14.5l-1.924.549a1.5 1.5 0 00.412 2.943 1.522 1.522 0 00.412-.057l1.924-.549a1.5 1.5 0 00-.824-2.887zM24.533 25.9l-1.416 1.416a1.5 1.5 0 102.121 2.121l1.416-1.416a1.5 1.5 0 00-2.121-2.121zm-4.012 2.041l-1.629-1.162a1.5 1.5 0 00-1.742 2.442l1.629 1.162a1.5 1.5 0 101.742-2.441zM2.324 36.6A1.5 1.5 0 10.3 34.379l-.3.277v3.668a1.5 1.5 0 00.844-.38zM48 27.229l-16.023 2.625a1.511 1.511 0 00-.814.42l-11 11-6.3-8.394a1.5 1.5 0 00-1.025-.59 1.54 1.54 0 00-1.135.338L0 42.38v3.907l12.414-10.346 6.386 8.514a1.5 1.5 0 001.094.6 1.534 1.534 0 001.166-.436l11.883-11.885L48 30.271z"
      />
      <path
        d="M12.143 23.615l-1.48 1.346a1.5 1.5 0 102.019 2.219l1.481-1.346a1.5 1.5 0 00-2.02-2.219zM6.223 29l-1.479 1.344a1.5 1.5 0 002.019 2.219l1.479-1.346A1.5 1.5 0 006.223 29z"
      />
    </svg>
  `;
};
