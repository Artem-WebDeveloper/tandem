import {
  amber,
  blue,
  blueGrey,
  brown,
  common,
  cyan,
  deepOrange,
  deepPurple,
  grey,
  indigo,
  lightBlue,
  lime,
  purple,
  red,
  teal,
  yellow,
} from '@mui/material/colors';

//! Place in alphabetic order
const TAG_STYLE_MAP: Record<string, React.CSSProperties> = {
  accessibility: getStyle(amber),
  'array-methods': getStyle(deepOrange),
  async: getStyle(deepPurple),
  bfc: getStyle(amber),
  context: getStyle(indigo),
  css: getStyle(deepPurple),
  'event-loop': getStyle(blue),
  fiber: getStyle(teal),
  flexbox: getStyle(purple),
  forms: getStyle(cyan),
  frontend: getStyle(blueGrey),
  functions: getStyle(cyan),
  grid: getStyle(red),
  hooks: getStyle(lime),
  html: getStyle(yellow),
  javascript: { color: common.black, backgroundColor: yellow[300], borderColor: yellow[900] },
  markup: getStyle(blue),
  media: getStyle(purple),
  objects: getStyle(blue),
  performance: getStyle(brown),
  positioning: getStyle(lime),
  promises: getStyle(purple),
  prototypes: getStyle(purple),
  react: getStyle(cyan),
  selectors: getStyle(yellow),
  semantic: getStyle(blueGrey),
  specificity: getStyle(teal),
  sr: getStyle(red),
  'stacking-context': getStyle(brown),
  strings: getStyle(amber),
  styles: getStyle(deepOrange),
  typescript: { color: common.white, backgroundColor: lightBlue[300], borderColor: lightBlue[900] },
  types: getStyle(blue),
};

function getStyle(color: Record<string, string>): React.CSSProperties {
  return { color: color[900], backgroundColor: color[300], borderColor: color[900] };
}

export function mapTagChipStyle(tag: string): React.CSSProperties {
  return (
    TAG_STYLE_MAP[tag] || { color: grey[900], backgroundColor: grey[500], borderColor: grey[900] }
  );
}
