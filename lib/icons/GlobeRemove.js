import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GlobeRemove = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Globe Remove',
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
      aria-labelledby="${`title-GlobeRemove-${count}`}"
      aria-describedby="${`title-GlobeRemove-${count}`}"
    >
      <title id="${`title-GlobeRemove-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GlobeRemove-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42.75 14.024a21.822 21.822 0 00-.827-1.357c-.05.026-.094.059-.145.083-1.666.778-1.9 1.007-2.666 0a2.1 2.1 0 01.461-3.1 21.312 21.312 0 00-15.538-6.963c2.7.037 5.929 2.04 4.284 5.239.247-.508-5.37-1.72-6.133-1.72-1.03 0 2.1-3.852 1.813-3.519a21.438 21.438 0 00-8.819 1.9c1.457.942 3.081.613 4.724 1.019a4.01 4.01 0 011.465.6A4.926 4.926 0 0019.9 5.6c-2.424-.281 1.173 6.37 1.037 5.485.664-3.056 4.816-4.235 6.088-.2a4.991 4.991 0 01-1.117 3.02c-1.88 2.472-2.262 6.872-3.2 5.746-8.787-3.6-7.819 1.162-4.936 4.344 3.71 4.092 2.935 1.952 5.619 2.332a15.787 15.787 0 0116.192-5.807c-.01-.231-.021-.444-.027-.7a7.687 7.687 0 012.222-5.333 4.109 4.109 0 01.972-.463zm-22.26 18.51a61.854 61.854 0 00-4.042-6.661c-2.765-4.115-5.278-1.571-6.921-7.514-1.4-5.049 2.207-7.223 1.852-11.538A21.429 21.429 0 002.667 24c0 12.149 10.591 19.39 18.071 20.976a9.239 9.239 0 001.394.221c.122-.311.211-.625.3-.938a15.725 15.725 0 01-1.942-11.725zM36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8 13.4a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h15a.5.5 0 01.5.5z"
      />
    </svg>
  `;
};
