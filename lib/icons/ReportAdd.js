import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ReportAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Report Add',
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
      aria-labelledby="${`title-ReportAdd-${count}`}"
      aria-describedby="${`title-ReportAdd-${count}`}"
    >
      <title id="${`title-ReportAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ReportAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.728 40H15a1 1 0 01-1-1v-2a1 1 0 011-1h5.2a15.893 15.893 0 01.527-4H15a1 1 0 01-1-1v-2a1 1 0 011-1h7.375A15.943 15.943 0 0130 21.317V9a1 1 0 011-1h2a1 1 0 011 1v11.254a14.491 14.491 0 014-.031V6a2 2 0 00-2-2H12a2 2 0 00-2 2v36a2 2 0 002 2h10.375a15.8 15.8 0 01-1.647-4zM22 15a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1h-2a1 1 0 01-1-1zm-8 4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1z"
      />
      <path
        d="M24.2 36.1a11.9 11.9 0 1011.9-11.9 11.9 11.9 0 00-11.9 11.9zm13.4-8a.5.5 0 01.5.5v5.5h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-5.5v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-5.5h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h5.5v-5.5a.5.5 0 01.5-.5z"
      />
    </svg>
  `;
};
