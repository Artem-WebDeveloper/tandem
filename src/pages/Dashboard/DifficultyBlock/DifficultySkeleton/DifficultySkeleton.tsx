import { Skeleton } from '@mui/material';

const PLOTS_COUNT = 3;

function DifficultySkeleton() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '48px',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px',
      }}
    >
      {Array.from({ length: PLOTS_COUNT }).map((_, index) => (
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}
          key={index}
        >
          <Skeleton variant="rounded" sx={{ width: '70px' }} />
          <Skeleton variant="circular" sx={{ width: '130px', height: '130px' }} />
        </div>
      ))}
    </div>
  );
}

export default DifficultySkeleton;
