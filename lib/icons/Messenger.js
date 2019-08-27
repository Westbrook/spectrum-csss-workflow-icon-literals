import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Messenger = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Messenger',
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
      aria-labelledby="${`title-Messenger-${count}`}"
      aria-describedby="${`title-Messenger-${count}`}"
    >
      <title id="${`title-Messenger-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Messenger-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 3.08c-11.429 0-20.693 8.779-20.693 19.608a19.039 19.039 0 006.2 13.973v10.045l8.867-5.144A21.8 21.8 0 0024 42.3c11.429 0 20.694-8.779 20.694-19.608S35.429 3.08 24 3.08zm2.177 26.185L20.8 23.748l-9.82 5.471 10.848-11.877 5.424 5.284 9.913-5.378z"
        fill="currentColor"
      />
    </svg>
  `;
};
