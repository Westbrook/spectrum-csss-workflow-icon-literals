import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GlobeGrid = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Globe Grid',
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
      aria-labelledby="${`title-GlobeGrid-${count}`}"
      aria-describedby="${`title-GlobeGrid-${count}`}"
    >
      <title id="${`title-GlobeGrid-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GlobeGrid-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 3a21 21 0 1021 21A21 21 0 0024 3zm14.967 29h-5.8a25 25 0 001.315-7h6.462a16.883 16.883 0 01-1.977 7zM39 16a16.9 16.9 0 011.951 7h-6.464a24.787 24.787 0 00-1.3-7zm-1.271-2h-5.318a25.157 25.157 0 00-3.861-6.191l-.19-.223A16.993 16.993 0 0137.727 14zM25 7.051c.1 0 .2.007.293.014L27.026 9.1a23.181 23.181 0 013.187 4.9H25zM25 16h6.076a22.862 22.862 0 011.409 7H25zm7.485 9a23.037 23.037 0 01-1.423 7H25v-7zm-16.97 0H23v7h-6.061a23.009 23.009 0 01-1.424-7zm0-2a22.862 22.862 0 011.409-7H23v7zm7.192-15.935c.1-.007.2-.009.293-.014V14h-5.213a23.181 23.181 0 013.187-4.9zm-3.067.521l-.19.223A25.157 25.157 0 0015.589 14h-5.316a16.993 16.993 0 019.367-6.414zM9 16h5.81a24.787 24.787 0 00-1.3 7H7.051A16.9 16.9 0 019 16zm4.511 9a25 25 0 001.315 7H9.033a16.883 16.883 0 01-1.982-7zm-3.227 9H15.6a24.938 24.938 0 003.848 6.191l.19.223A16.98 16.98 0 0110.286 34zm12.421 6.935L20.974 38.9a23.016 23.016 0 01-3.193-4.9H23v6.949c-.1-.005-.2-.007-.293-.014zm2.586 0c-.1.007-.2.009-.293.014V34h5.219a23.016 23.016 0 01-3.193 4.9zm3.067-.521l.19-.223A24.938 24.938 0 0032.4 34h5.316a16.98 16.98 0 01-9.356 6.414z"
        fill="currentColor"
      />
    </svg>
  `;
};
