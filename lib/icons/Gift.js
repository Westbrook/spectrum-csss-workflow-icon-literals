import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Gift = ({ width = 24, height = 24, hidden = false, title = 'Gift', desc } = {}) => {
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
      aria-labelledby="${`title-Gift-${count}`}"
      aria-describedby="${`title-Gift-${count}`}"
    >
      <title id="${`title-Gift-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Gift-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36.688.043c-2.8 0-8.87 2.178-12.354 8.305C20.849 2.221 14.78.043 11.979.043a5.979 5.979 0 100 11.957h24.709a5.979 5.979 0 100-11.957zM11.979 9a2.979 2.979 0 110-5.957c1.712 0 6.288 1.5 9.247 5.957zm24.709 0h-9.247c2.959-4.458 7.535-5.957 9.247-5.957a2.979 2.979 0 110 5.957zM4 42a2 2 0 002 2h16V28H4zM0 18v4a2 2 0 002 2h20v-8H2a2 2 0 00-2 2zm28 26h14a2 2 0 002-2V28H28zm18-28H28v8h18a2 2 0 002-2v-4a2 2 0 00-2-2z"
      />
    </svg>
  `;
};
