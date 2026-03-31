import { Tooltip, useTheme } from '@mui/material';

import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import AdjustRoundedIcon from '@mui/icons-material/AdjustRounded';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

import { useTranslation } from 'react-i18next';

export default function HeaderIconStatus({
  isPerfect,
  bestResult,
}: {
  isPerfect: boolean;
  bestResult: number | null;
}) {
  const theme = useTheme();
  const { t } = useTranslation('library');

  if (isPerfect)
    return (
      <Tooltip
        title={t('tooltips.passed')}
        arrow
        placement="top-start"
        enterDelay={350}
        leaveDelay={150}
      >
        <CheckCircleOutlineRoundedIcon sx={{ color: theme.palette.success.main }} />
      </Tooltip>
    );

  if (bestResult !== null)
    return (
      <Tooltip
        arrow
        title={t('tooltips.notPassed')}
        placement="top-start"
        enterDelay={350}
        leaveDelay={150}
      >
        <AdjustRoundedIcon sx={{ color: theme.palette.textLight }} />
      </Tooltip>
    );

  return (
    <Tooltip
      arrow
      title={t('tooltips.noResults')}
      placement="top-start"
      enterDelay={350}
      leaveDelay={150}
    >
      <PanoramaFishEyeIcon sx={{ color: theme.palette.textUltralight }} />
    </Tooltip>
  );
}
