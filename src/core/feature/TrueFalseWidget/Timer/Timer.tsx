import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './Timer.module.scss';
import { circleFilledColor } from '@/core/configs/trueFalseWidget.config';

const RADIUS = 24;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

type TimerProps = {
  duration: number;
  onExpire?: () => void;
  className?: string;
};

function Timer({ duration, onExpire, className }: TimerProps) {
  const [progress, setProgress] = useState(1); // 1.0 → 0.0
  const startTimeRef = useRef<number>(0);

  const seconds = Math.ceil(progress * duration); // для цифры
  const strokeDashoffset = CIRCUMFERENCE * (1 - progress);
  const color = circleFilledColor(progress);

  useEffect(() => {
    startTimeRef.current = Date.now();

    const tick = () => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const remaining = Math.max(0, 1 - elapsed / duration);

      setProgress(remaining);

      if (remaining <= 0) {
        onExpire?.();
        return;
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    const frameRef = { current: requestAnimationFrame(tick) };

    return () => cancelAnimationFrame(frameRef.current);
  }, [duration, onExpire]);

  return (
    <div className={clsx(styles.timer, className)}>
      <svg width="56" height="56" viewBox="0 0 56 56" style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx="28"
          cy="28"
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.2}
          strokeWidth="3"
        />
        <circle
          cx="28"
          cy="28"
          r={RADIUS}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <span className={styles.value} style={{ color }}>
        {seconds}
      </span>
    </div>
  );
}

export default Timer;
