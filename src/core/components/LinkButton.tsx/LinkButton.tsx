import { Button, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  const theme = useTheme();

  return (
    <Button tabIndex={-1} sx={{ textTransform: 'none' }}>
      <Link
        to={href}
        style={{
          display: 'flex',
          alignItems: 'center',
          color: theme.palette.text.secondary,
          textDecoration: 'none',
          outline: 'none',
        }}
      >
        {children}
      </Link>
    </Button>
  );
}

export default LinkButton;
