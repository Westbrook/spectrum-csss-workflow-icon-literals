import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TaskList = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Task List',
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
      aria-labelledby="${`title-TaskList-${count}`}"
      aria-describedby="${`title-TaskList-${count}`}"
    >
      <title id="${`title-TaskList-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TaskList-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M44 4H4a2 2 0 00-2 2v36a2 2 0 002 2h40a2 2 0 002-2V6a2 2 0 00-2-2zm-2 36H6V8h36z" />
      <rect height="4" rx=".5" ry=".5" width="16" x="24" y="16" />
      <rect height="4" rx=".5" ry=".5" width="16" x="24" y="28" />
      <path
        d="M12.224 23.085L8.142 18.91a1 1 0 01.016-1.41l1.43-1.4a1 1 0 011.412.014l1.852 1.895 5.8-6.4a1 1 0 011.413-.07l1.482 1.342a1 1 0 01.07 1.412l-7.937 8.764a1 1 0 01-1.456.028zm0 12L8.142 30.91a1 1 0 01.016-1.41l1.43-1.4a1 1 0 011.412.014l1.852 1.895 5.8-6.4a1 1 0 011.413-.07l1.482 1.342a1 1 0 01.07 1.412l-7.937 8.764a1 1 0 01-1.456.028z"
      />
    </svg>
  `;
};
