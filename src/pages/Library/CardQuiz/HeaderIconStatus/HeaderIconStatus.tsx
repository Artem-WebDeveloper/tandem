import { Tooltip, useTheme } from '@mui/material';

import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import AdjustRoundedIcon from '@mui/icons-material/AdjustRounded';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

import { useTranslation } from 'react-i18next';
import { tooltipProps } from '../../types';

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
      <Tooltip title={t('tooltips.passed')} {...tooltipProps}>
        <CheckCircleOutlineRoundedIcon sx={{ color: theme.palette.success.main, cursor: 'help' }} />
      </Tooltip>
    );

  if (bestResult !== null)
    return (
      <Tooltip title={t('tooltips.notPassed')} {...tooltipProps}>
        <AdjustRoundedIcon sx={{ color: theme.palette.textLight, cursor: 'help' }} />
      </Tooltip>
    );

  return (
    <Tooltip title={t('tooltips.noResults')} {...tooltipProps}>
      <PanoramaFishEyeIcon sx={{ color: theme.palette.textUltralight, cursor: 'help' }} />
    </Tooltip>
  );
}
