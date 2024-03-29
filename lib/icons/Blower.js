import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Blower = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Blower',
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
      aria-labelledby="${`title-Blower-${count}`}"
      aria-describedby="${`title-Blower-${count}`}"
    >
      <title id="${`title-Blower-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Blower-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43.013 9.344a8.7 8.7 0 00-8.795-2.692c-3.305.783-8.085 5.682-10 9.37-.073 0-.141-.022-.215-.022a7.917 7.917 0 00-3.614.9c1.376-5.443 5.3-9.991-.271-13.888C15.655-.11 9.346 4.986 9.346 4.986a8.7 8.7 0 00-2.693 8.8c.783 3.3 5.681 8.085 9.369 10 0 .074-.022.142-.022.216a7.917 7.917 0 00.9 3.614c-5.443-1.375-9.991-5.3-13.888.272-3.122 4.459 1.975 10.767 1.975 10.767a8.7 8.7 0 008.8 2.693c3.305-.783 8.085-5.682 10-9.37.073 0 .141.022.215.022a7.917 7.917 0 003.614-.9c-1.376 5.443-5.3 9.99.271 13.888 4.46 3.122 10.769-1.974 10.769-1.974a8.7 8.7 0 002.693-8.8c-.783-3.3-5.681-8.085-9.369-10 0-.074.022-.142.022-.216a7.909 7.909 0 00-.9-3.615c5.444 1.376 9.992 5.3 13.889-.271 3.119-4.459-1.978-10.768-1.978-10.768zM24 28a4 4 0 114-4 4 4 0 01-4 4z"
        fill="currentColor"
      />
    </svg>
  `;
};
