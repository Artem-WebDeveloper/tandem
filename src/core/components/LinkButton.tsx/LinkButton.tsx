import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { grey } from '@mui/material/colors';

function LinkButton({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Button sx={{ textTransform: 'none' }}>
      <Link
        to={to}
        style={{ display: 'flex', alignItems: 'center', color: grey[500], textDecoration: 'none' }}
      >
        {children}
      </Link>
    </Button>
  );
}

export default LinkButton;
