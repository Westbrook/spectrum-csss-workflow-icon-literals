import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MultipleAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Multiple Add',
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
      aria-labelledby="${`title-MultipleAdd-${count}`}"
      aria-describedby="${`title-MultipleAdd-${count}`}"
    >
      <title id="${`title-MultipleAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MultipleAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M26 20v3.719a15.858 15.858 0 016-3.085V14.5a2.5 2.5 0 00-2.5-2.5h-15a2.5 2.5 0 00-2.5 2.5V18h12a2 2 0 012 2z"
      />
      <path
        d="M36 10v10.1h.1a15.869 15.869 0 015.375.932A2.487 2.487 0 0042 19.5v-15A2.5 2.5 0 0039.5 2h-15A2.5 2.5 0 0022 4.5V8h12a2 2 0 012 2zM20.2 36a15.828 15.828 0 011.8-7.353V24.5a2.5 2.5 0 00-2.5-2.5h-15A2.5 2.5 0 002 24.5v15A2.5 2.5 0 004.5 42h15a2.486 2.486 0 001.637-.612A15.882 15.882 0 0120.2 36zm4 .1a11.9 11.9 0 1011.9-11.9 11.9 11.9 0 00-11.9 11.9zm13.4-8a.5.5 0 01.5.5v5.5h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-5.5v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-5.5h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h5.5v-5.5a.5.5 0 01.5-.5z"
      />
    </svg>
  `;
};
