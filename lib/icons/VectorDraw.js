import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const VectorDraw = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Vector Draw',
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
      aria-labelledby="${`title-VectorDraw-${count}`}"
      aria-describedby="${`title-VectorDraw-${count}`}"
    >
      <title id="${`title-VectorDraw-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-VectorDraw-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43.953 14.125l-10.1-10.1a2 2 0 00-2.829 0l-5.39 5.397L14.1 14.963l-.179.09a4.487 4.487 0 00-2 2.3l-8.262 20.71a2 2 0 00.435 2.147l3.64 3.69a2 2 0 002.162.452l20.681-8.231a4.726 4.726 0 002.471-2.221l5.579-11.619 5.326-5.326a2 2 0 000-2.83zM29.84 32.266a1.077 1.077 0 01-.579.5L9.333 41.055l-.507-.5 9.931-9.932a3.21 3.21 0 10-1.414-1.414L7.4 39.147l-.471-.465 8.345-20.03a.919.919 0 01.377-.443L27.96 12.3l7.751 7.75z"
        fill="currentColor"
      />
    </svg>
  `;
};
