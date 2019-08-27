import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SelectGear = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Select Gear',
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
      aria-labelledby="${`title-SelectGear-${count}`}"
      aria-describedby="${`title-SelectGear-${count}`}"
    >
      <title id="${`title-SelectGear-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SelectGear-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M8 8h16v6l4 4V6a2 2 0 00-2-2H6a2 2 0 00-2 2v20a2 2 0 002 2h2zm39.146 26.349h-2.891a8.356 8.356 0 00-1.221-2.964l2.059-2.058a.826.826 0 000-1.168l-1.251-1.251a.826.826 0 00-1.168 0l-2.058 2.059a8.366 8.366 0 00-2.964-1.221v-2.892a.826.826 0 00-.826-.826h-1.652a.826.826 0 00-.826.826v2.891a8.366 8.366 0 00-2.964 1.221l-2.058-2.059a.826.826 0 00-1.168 0l-1.251 1.251a.826.826 0 000 1.168l2.059 2.058a8.356 8.356 0 00-1.221 2.964h-2.891a.826.826 0 00-.826.826v1.651a.826.826 0 00.826.826h2.891a8.356 8.356 0 001.221 2.964l-2.059 2.058a.825.825 0 000 1.167l1.251 1.251a.826.826 0 001.168 0l2.058-2.058a8.365 8.365 0 002.964 1.221v2.891a.826.826 0 00.826.826h1.651a.826.826 0 00.826-.826v-2.89a8.365 8.365 0 002.964-1.221l2.058 2.058a.826.826 0 001.168 0l1.251-1.251a.825.825 0 000-1.167l-2.059-2.058a8.356 8.356 0 001.221-2.964h2.891a.826.826 0 00.826-.826v-1.652a.826.826 0 00-.825-.825zM36 39.223A3.223 3.223 0 1139.223 36 3.223 3.223 0 0136 39.223z"
      />
      <path
        d="M27.362 24.185L13.155 10.2a.678.678 0 00-1.155.479v27.935a.678.678 0 001.157.48L20 30.758h2.985a15.923 15.923 0 014.377-6.573z"
      />
    </svg>
  `;
};
