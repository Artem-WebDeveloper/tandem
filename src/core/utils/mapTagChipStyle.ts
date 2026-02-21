import { amber, blue, cyan, deepOrange, grey, purple } from '@mui/material/colors';

const TAG_STYLE_MAP: Record<string, React.CSSProperties> = {
  'array-methods': {
    color: deepOrange[900],
    backgroundColor: deepOrange[300],
    borderColor: deepOrange[900],
  },
  objects: { color: blue[900], backgroundColor: blue[300], borderColor: blue[900] },
  functions: { color: cyan[900], backgroundColor: cyan[300], borderColor: cyan[900] },
  promises: { color: purple[900], backgroundColor: purple[300], borderColor: purple[900] },
  strings: { color: amber[900], backgroundColor: amber[300], borderColor: amber[900] },
};

export function mapTagChipStyle(tag: string): React.CSSProperties {
  return (
    TAG_STYLE_MAP[tag] || { color: grey[900], backgroundColor: grey[500], borderColor: grey[900] }
  );
}
