import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PublishSchedule = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Publish Schedule',
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
      aria-labelledby="${`title-PublishSchedule-${count}`}"
      aria-describedby="${`title-PublishSchedule-${count}`}"
    >
      <title id="${`title-PublishSchedule-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PublishSchedule-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44.194 4.424L2 17a1.065 1.065 0 00-.191 1.978l9.669 4.834zM20.312 33.627L12.066 29v10.185a.95.95 0 001.564.725l6.57-5.531c.025-.254.072-.502.112-.752zM36 20.2a15.863 15.863 0 014.125.56l7.33-14.669-31.377 19.951 5.74 2.895A15.887 15.887 0 0136 20.2z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm0 20.1a8.185 8.185 0 01-2-16.126v8.274a1 1 0 00.293.707l3.42 3.42a1 1 0 001.414 0l1.336-1.336a1 1 0 000-1.414l-2.17-2.17a1 1 0 01-.293-.706v-6.775A8.185 8.185 0 0136 44.2z"
      />
    </svg>
  `;
};
