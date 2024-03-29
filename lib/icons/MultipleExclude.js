import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MultipleExclude = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Multiple Exclude',
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
      aria-labelledby="${`title-MultipleExclude-${count}`}"
      aria-describedby="${`title-MultipleExclude-${count}`}"
    >
      <title id="${`title-MultipleExclude-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MultipleExclude-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 10v10.2h.1a15.868 15.868 0 015.313.91A2.493 2.493 0 0042 19.5v-15A2.5 2.5 0 0039.5 2h-15A2.5 2.5 0 0022 4.5V8h12a2 2 0 012 2zM20.2 36.1a15.828 15.828 0 011.8-7.353V24.5a2.5 2.5 0 00-2.5-2.5h-15A2.5 2.5 0 002 24.5v15A2.5 2.5 0 004.5 42h15a2.491 2.491 0 001.61-.588 15.866 15.866 0 01-.91-5.312z"
      />
      <path
        d="M26 20v3.819a15.858 15.858 0 016-3.085V14.5a2.5 2.5 0 00-2.5-2.5h-15a2.5 2.5 0 00-2.5 2.5V18h12a2 2 0 012 2zm10.1 4.2A11.9 11.9 0 1048 36.1a11.9 11.9 0 00-11.9-11.9zm8.925 11.9a8.858 8.858 0 01-1.663 5.158l-12.42-12.42A8.9 8.9 0 0145.025 36.1zm-17.85 0a8.858 8.858 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.175 36.1z"
      />
    </svg>
  `;
};
