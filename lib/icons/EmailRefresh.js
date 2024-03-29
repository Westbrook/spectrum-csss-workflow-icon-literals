import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const EmailRefresh = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Email Refresh',
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
      aria-labelledby="${`title-EmailRefresh-${count}`}"
      aria-describedby="${`title-EmailRefresh-${count}`}"
    >
      <title id="${`title-EmailRefresh-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-EmailRefresh-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45.818 4H2.182A2.1 2.1 0 000 6v1.387l23.685 17.368a.54.54 0 00.633 0L48 7.387V6a2.1 2.1 0 00-2.182-2zM0 12.161v16.928l13.172-7.27L0 12.161zm21.145 15.506L16.56 24.3 0 33.437V36a2.1 2.1 0 002.182 2h17.956A16.091 16.091 0 0120 36a15.909 15.909 0 012.079-7.869 4.4 4.4 0 01-.934-.464zM36 44.58a8.184 8.184 0 01-6.229-2.68L33.66 38H24v9.68l3.469-3.48A11.648 11.648 0 0036 48c6.38 0 11.58-5.3 12-12h-3.04A9.186 9.186 0 0136 44.58zm8.446-22.148L48 18.8v-6.639l-10.773 7.9a15.883 15.883 0 017.219 2.371zM36 24c-6.38 0-11.58 5.3-12 12h3.04A9.186 9.186 0 0136 27.42a8.765 8.765 0 016.32 2.72L38.54 34H48v-9.66l-3.433 3.5A11.565 11.565 0 0036 24z"
      />
    </svg>
  `;
};
