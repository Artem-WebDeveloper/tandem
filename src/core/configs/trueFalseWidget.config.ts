export const difficultySecondsConfig = {
  1: 15,
  2: 10,
  3: 5,
};

export function circleFilledColor(progress: number) {
  const timerProgressConfig = {
    high: '#16a34a',
    medium: '#d97706',
    low: '#dc2626',
  };

  const { high, medium, low } = timerProgressConfig;

  return progress > 0.5 ? high : progress > 0.25 ? medium : low;
}
