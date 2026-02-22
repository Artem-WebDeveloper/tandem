import { useTheme } from '@mui/material';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useThemeStore } from '../../store/theme.store';

function SwitchThemeButton() {
  const switchMode = useThemeStore((state) => state.switchMode);
  const mode = useThemeStore((state) => state.mode);
  const theme = useTheme();

  return (
    <button
      onClick={switchMode}
      style={{
        backgroundColor: 'transparent',
        padding: '3px',
        borderRadius: '50%',
        border: 'none',
        width: '30px',
        height: '30px',
      }}
    >
      {mode === 'light' ? (
        <LightModeRoundedIcon sx={{ color: theme.palette.primary.main }} />
      ) : (
        <DarkModeRoundedIcon sx={{ color: theme.palette.primary.main }} />
      )}
    </button>
  );
}

export default SwitchThemeButton;
