import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RadialGradient = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Radial Gradient',
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
      aria-labelledby="${`title-RadialGradient-${count}`}"
      aria-describedby="${`title-RadialGradient-${count}`}"
    >
      <title id="${`title-RadialGradient-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RadialGradient-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 17.526A6.474 6.474 0 1030.474 24 6.475 6.475 0 0024 17.526z"
        opacity=".07"
        fill="currentColor"
      />
      <path
        d="M24 15.591A8.409 8.409 0 1032.409 24 8.409 8.409 0 0024 15.591zm0 14.883A6.474 6.474 0 1130.474 24 6.475 6.475 0 0124 30.474z"
        opacity=".18"
        fill="currentColor"
      />
      <path
        d="M24 13.572A10.428 10.428 0 1034.428 24 10.428 10.428 0 0024 13.572zm0 18.837A8.409 8.409 0 1132.409 24 8.409 8.409 0 0124 32.409z"
        opacity=".28"
        fill="currentColor"
      />
      <path
        d="M24 11.487A12.513 12.513 0 1036.513 24 12.513 12.513 0 0024 11.487zm0 22.941A10.428 10.428 0 1134.428 24 10.428 10.428 0 0124 34.428z"
        opacity=".38"
        fill="currentColor"
      />
      <path
        d="M24 9.4A14.6 14.6 0 1038.6 24 14.6 14.6 0 0024 9.4zm0 27.112A12.513 12.513 0 1136.513 24 12.513 12.513 0 0124 36.513z"
        opacity=".5"
        fill="currentColor"
      />
      <path
        d="M19.523 40.059h8.954a16.7 16.7 0 0011.582-11.581v-8.956A16.7 16.7 0 0028.478 7.941h-8.956A16.7 16.7 0 007.941 19.522v8.956a16.7 16.7 0 0011.582 11.581zM24 9.4A14.6 14.6 0 119.4 24 14.6 14.6 0 0124 9.4z"
        opacity=".6"
        fill="currentColor"
      />
      <path
        d="M19.522 7.941h-5.2a18.838 18.838 0 00-6.378 6.378v5.2A16.7 16.7 0 0119.522 7.941zm8.955 32.118h5.2a18.838 18.838 0 006.378-6.378v-5.2a16.7 16.7 0 01-11.578 11.578zM7.941 28.478v5.2a18.838 18.838 0 006.378 6.378h5.2A16.7 16.7 0 017.941 28.478zm32.118-8.956v-5.2a18.838 18.838 0 00-6.378-6.378h-5.2a16.7 16.7 0 0111.578 11.578z"
      />
      <path
        d="M33.681 40.059H37.3a20.969 20.969 0 002.759-2.759v-3.619a18.838 18.838 0 01-6.378 6.378zM14.319 7.941H10.7A20.969 20.969 0 007.941 10.7v3.623a18.838 18.838 0 016.378-6.382zm-6.378 25.74V37.3a20.969 20.969 0 002.759 2.759h3.623a18.838 18.838 0 01-6.382-6.378zm32.118-19.362V10.7A20.969 20.969 0 0037.3 7.941h-3.619a18.838 18.838 0 016.378 6.378z"
      />
      <path
        d="M42 4H6a2 2 0 00-2 2v36a2 2 0 002 2h36a2 2 0 002-2V6a2 2 0 00-2-2zm-1.941 33.3a20.969 20.969 0 01-2.759 2.759H10.7A20.969 20.969 0 017.941 37.3V10.7A20.969 20.969 0 0110.7 7.941h26.6a20.969 20.969 0 012.759 2.759z"
        fill="currentColor"
      />
    </svg>
  `;
};
