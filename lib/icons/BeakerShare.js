import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const BeakerShare = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Beaker Share',
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
      aria-labelledby="${`title-BeakerShare-${count}`}"
      aria-describedby="${`title-BeakerShare-${count}`}"
    >
      <title id="${`title-BeakerShare-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-BeakerShare-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M39.722 26.331L34 20l-5.708 6.331A1 1 0 0029.035 28H32v11.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V28h2.979a1 1 0 00.743-1.669z"
      />
      <path
        d="M47 30h-7v4h4v10H24V34h4v-4h-7a1 1 0 00-1 1v16a1 1 0 001 1h26a1 1 0 001-1V31a1 1 0 00-1-1z"
      />
      <path
        d="M30 2H14a2 2 0 00-2 2v2a2 2 0 002 2v8.358a8 8 0 01-.647 3.151L4.389 40.424A4 4 0 008.066 46h8.469V30.64L12.272 32l4.78-11.3A12 12 0 0018 16.022V8h8v8.059a12 12 0 00.919 4.607l.515 1.24 2.941-3.262A7.957 7.957 0 0130 16.358V8a2 2 0 002-2V4a2 2 0 00-2-2z"
      />
    </svg>
  `;
};
