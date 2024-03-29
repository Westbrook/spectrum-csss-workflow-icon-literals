import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileXML = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File XM L',
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
      aria-labelledby="${`title-FileXML-${count}`}"
      aria-describedby="${`title-FileXML-${count}`}"
    >
      <title id="${`title-FileXML-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileXML-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M28 4v12h12L28 4z" />
      <path
        d="M26 20a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h28a2 2 0 002-2V20zm-4.793 17.8a1.178 1.178 0 01-.959 1.862h-1.439a1.175 1.175 0 01-.942-.471L13.1 32.833l4.77-6.361a1.177 1.177 0 01.939-.472h1.439a1.178 1.178 0 01.959 1.862l-3.384 5.167zm13.032 1.68H31.9a.74.74 0 01-.713-.415s-1.7-2.906-2.307-3.953a195.009 195.009 0 01-2.211 3.975.685.685 0 01-.645.393h-2.217a.575.575 0 01-.491-.876l3.554-5.8-3.47-5.749a.576.576 0 01.492-.873h2.285a.811.811 0 01.706.413l2.173 3.864 2.066-3.851a.81.81 0 01.713-.427h2.159a.575.575 0 01.49.876l-3.42 5.6 3.664 5.953a.576.576 0 01-.489.874z"
      />
    </svg>
  `;
};
