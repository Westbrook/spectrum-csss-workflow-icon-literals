import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PublishReject = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Publish Reject',
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
      aria-labelledby="${`title-PublishReject-${count}`}"
      aria-describedby="${`title-PublishReject-${count}`}"
    >
      <title id="${`title-PublishReject-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PublishReject-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44.194 4.424L2 17a1.065 1.065 0 00-.191 1.978l9.669 4.834zM20.312 33.627L12.066 29v10.185a.95.95 0 001.564.725l6.57-5.531c.025-.254.072-.502.112-.752zM36 20.2a15.871 15.871 0 014.125.56l7.33-14.669-31.377 19.951 5.74 2.895A15.886 15.886 0 0136 20.2z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8 13.4a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h15a.5.5 0 01.5.5z"
      />
    </svg>
  `;
};
