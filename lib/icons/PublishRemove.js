import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PublishRemove = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Publish Remove',
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
      aria-labelledby="${`title-PublishRemove-${count}`}"
      aria-describedby="${`title-PublishRemove-${count}`}"
    >
      <title id="${`title-PublishRemove-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PublishRemove-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44.194 4.424L2 17a1.065 1.065 0 00-.191 1.978l9.669 4.834zM20.312 33.627L12.066 29v10.185a.95.95 0 001.564.725l6.57-5.531c.025-.254.072-.502.112-.752zM36 20.2a15.863 15.863 0 014.125.56l7.33-14.669-31.377 19.951 5.74 2.895A15.887 15.887 0 0136 20.2z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8.132 17.2a.5.5 0 010 .707l-2.122 2.125a.5.5 0 01-.707 0l-5.3-5.3-5.3 5.3a.5.5 0 01-.707 0l-2.128-2.122a.5.5 0 010-.707l5.3-5.3-5.3-5.3a.5.5 0 010-.707l2.122-2.121a.5.5 0 01.707 0l5.3 5.3 5.3-5.3a.5.5 0 01.707 0l2.122 2.121a.5.5 0 010 .707l-5.3 5.3z"
      />
    </svg>
  `;
};
