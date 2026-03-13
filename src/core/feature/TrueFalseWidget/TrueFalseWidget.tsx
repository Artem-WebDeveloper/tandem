import styles from './TrueFalseWidget.module.scss';
import type { TrueFalseTask } from './types';

function TrueFalseWidget({ data }: { data: TrueFalseTask }) {
  const { type } = data;
  return <div className={styles.container}>{type}</div>;
}

export default TrueFalseWidget;
