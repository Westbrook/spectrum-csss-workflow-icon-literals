import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Demographic = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Demographic',
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
      aria-labelledby="${`title-Demographic-${count}`}"
      aria-describedby="${`title-Demographic-${count}`}"
    >
      <title id="${`title-Demographic-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Demographic-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="10" cy="7.375" r="4.5" />
      <circle cx="38" cy="7.375" r="4.5" />
      <circle cx="24" cy="7.375" r="4.5" />
      <path
        d="M38.267 14.212h-.534c-2.909 0-5.413.95-6.733 2.807-1.32-1.857-3.824-2.807-6.733-2.807h-.534c-2.909 0-5.413.95-6.733 2.807-1.32-1.857-3.824-2.807-6.733-2.807h-.534c-4.271 0-7.733 2-7.733 6v8.476a1.294 1.294 0 001.333 1.25h1.334L6 42.625a1.294 1.294 0 001.333 1.25h5.334A1.294 1.294 0 0014 42.625l1.333-12.687h1.334a1.412 1.412 0 00.333-.063 1.412 1.412 0 00.333.063h1.334L20 42.625a1.294 1.294 0 001.333 1.25h5.334A1.294 1.294 0 0028 42.625l1.333-12.687h1.334a1.412 1.412 0 00.333-.063 1.412 1.412 0 00.333.063h1.334L34 42.625a1.294 1.294 0 001.333 1.25h5.334A1.294 1.294 0 0042 42.625l1.333-12.687h1.334A1.294 1.294 0 0046 28.688v-8.476c0-4.004-3.462-6-7.733-6z"
      />
    </svg>
  `;
};
