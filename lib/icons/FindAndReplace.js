import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FindAndReplace = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Find And Replace',
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
      aria-labelledby="${`title-FindAndReplace-${count}`}"
      aria-describedby="${`title-FindAndReplace-${count}`}"
    >
      <title id="${`title-FindAndReplace-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FindAndReplace-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M47.276 43.3l-6.891-10.04a16.017 16.017 0 10-27.3-9.977 6.838 6.838 0 004.257 1.832 12.093 12.093 0 1110.36 8.9 17.314 17.314 0 01-1.951 1.168 17.11 17.11 0 01-3.5 1.3 15.853 15.853 0 0013.184.175L42.329 46.7a3 3 0 004.947-3.4z"
      />
      <path
        d="M12.111 6.406a8.732 8.732 0 017.047-.311A18.589 18.589 0 0122.7 4.363a11.887 11.887 0 00-12.127-1.012 11.642 11.642 0 00-5.9 7.231L0 9.036l4.355 8.645 8.628-4.346-5.218-1.728a8.183 8.183 0 014.346-5.201zm18.715 16.745a13.421 13.421 0 01-6.87 8.459c-6.612 3.331-14.769.552-18.7-6.172l3.149-1.588a10.659 10.659 0 0013.765 4.215 10.17 10.17 0 005.13-6.118l-5.932-2.027 9.8-4.939 5.043 10.012z"
      />
    </svg>
  `;
};
