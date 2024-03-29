import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Preset = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Preset',
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
      aria-labelledby="${`title-Preset-${count}`}"
      aria-describedby="${`title-Preset-${count}`}"
    >
      <title id="${`title-Preset-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Preset-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M16 18h2v2h-2zm2-2h2v2h-2zm4 0h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm-6 2h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm-10 2h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm-10 2h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm-6 2h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm-6 2h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm-6 2h2v2h-2zm4 0h2v2h-2z"
      />
      <path
        d="M32 33.688V32h-2v1.962c-.331.022-.664.038-1 .038s-.668-.029-1-.051V32h-2v1.7a14.93 14.93 0 01-2-.571V32h-2v.262c-.157-.083-.308-.174-.462-.262H22v-2h-2v.979A15.256 15.256 0 0118.826 30H20v-2h-2v1.174A15.068 15.068 0 0117.021 28H18v-2h-2v.462c-.088-.154-.179-.3-.262-.462H16v-2h-1.128a14.93 14.93 0 01-.571-2H16v-2h-1.949c-.022-.332-.051-.662-.051-1s.016-.669.038-1H16v-2h-1.688c.094-.458.2-.911.335-1.353a15 15 0 1018.706 18.706c-.442.134-.895.241-1.353.335zM30 24h2v2h-2zm-10-9.949V16h2v-1.7a14.931 14.931 0 00-2-.249zm4 .821V16h2v-.262a14.883 14.883 0 00-2-.866zM26.462 16H26v2h2v-.979A14.855 14.855 0 0026.462 16zm2.712 2H28v2h2v-1.174q-.4-.426-.826-.826zm1.806 2H30v2h2v-.462A15.12 15.12 0 0030.98 20zm1.282 2H32v2h1.128a14.939 14.939 0 00-.866-2zm1.438 4H32v2h1.949a14.952 14.952 0 00-.249-2z"
      />
      <path
        d="M29 4a15 15 0 00-14.353 10.647c.441-.134.9-.233 1.353-.326V16h2v-1.96h.029a12.044 12.044 0 1115.934 15.931V30H32v2h1.679c-.093.457-.192.912-.326 1.353A15 15 0 0029 4z"
      />
    </svg>
  `;
};
