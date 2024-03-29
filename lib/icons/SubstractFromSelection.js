import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SubstractFromSelection = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Substract From Selection',
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
      aria-labelledby="${`title-SubstractFromSelection-${count}`}"
      aria-describedby="${`title-SubstractFromSelection-${count}`}"
    >
      <title id="${`title-SubstractFromSelection-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SubstractFromSelection-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M11.321 33.7l-3.592 2.075a20.194 20.194 0 004.5 4.5l2.071-3.596a16.043 16.043 0 01-2.979-2.979zm25.358 0a16.043 16.043 0 01-2.979 2.979l2.074 3.593a20.194 20.194 0 004.5-4.5zm-6.541 5.055a15.882 15.882 0 01-4.076 1.078V44a19.947 19.947 0 006.146-1.659zm9.695-12.693a15.882 15.882 0 01-1.078 4.076l3.586 2.07A19.947 19.947 0 0044 26.062zM9.245 30.138a15.882 15.882 0 01-1.078-4.076H4a19.947 19.947 0 001.659 6.146zm12.693 9.695a15.882 15.882 0 01-4.076-1.078l-2.07 3.586A19.947 19.947 0 0021.938 44zM11.321 14.3l-3.592-2.075a20.194 20.194 0 014.5-4.5l2.071 3.596a16.043 16.043 0 00-2.979 2.979zm25.358 0a16.043 16.043 0 00-2.979-2.979l2.074-3.593a20.194 20.194 0 014.5 4.5zm-6.541-5.055a15.882 15.882 0 00-4.076-1.078V4a19.947 19.947 0 016.146 1.659zm9.695 12.693a15.882 15.882 0 00-1.078-4.076l3.586-2.07A19.947 19.947 0 0144 21.938zM9.245 17.862a15.882 15.882 0 00-1.078 4.076H4a19.947 19.947 0 011.659-6.146zm12.693-9.695a15.882 15.882 0 00-4.076 1.078l-2.07-3.586A19.947 19.947 0 0121.938 4zM34 25a1 1 0 01-1 1H15a1 1 0 01-1-1v-2a1 1 0 011-1h18a1 1 0 011 1z"
      />
    </svg>
  `;
};
