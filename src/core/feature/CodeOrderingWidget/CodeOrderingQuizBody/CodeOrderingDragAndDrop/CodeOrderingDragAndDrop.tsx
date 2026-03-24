import { useMemo, useState } from 'react';
import { DragDropProvider } from '@dnd-kit/react';
import { move } from '@dnd-kit/helpers';

import styles from './CodeOrderingDragAndDrop.module.scss';
import { useCodeOrderingStore } from '@/core/store/codeOrdering.store';
import type { CodeLineData } from '../../types';
import { CodeLine } from './CodeLine/CodeLine';

export default function CodeOrderingDragAndDrop({
  codeLines,
  currentQuestionId,
}: {
  codeLines: CodeLineData[];
  currentQuestionId: string;
}) {
  const setAnswer = useCodeOrderingStore((state) => state.setAnswer);
  const answers = useCodeOrderingStore((state) => state.answers);

  // получаем ответ на отрисовываемый вопрос, если он был сохранен в стор
  const answer = answers.find((answer) => answer.questionId === currentQuestionId)?.payload;

  // получаем массив линий в нужном для отрисовки порядке
  const orderedLines = useMemo(() => {
    // если есть сохраненный ответ - пересортировываем линии с сервера так,
    // как их расставил пользователь в сохраненном ответе
    if (answer) {
      // console.log(`Saved answer is ${answer}`)
      return answer.map((lineId) =>
        codeLines.find((codeLine) => codeLine.id === lineId),
      ) as CodeLineData[];
    }

    // если сохраненного ответа нет то шафлим линии
    // console.log(`No saved answer, shuffle`)
    const shuffledLines = [...codeLines];

    // этот временное игнорирование Math.random для линтера,
    // в итоге перемешивание будет делаться на сервере
    // eslint-disable-next-line react-hooks/purity
    shuffledLines.sort(() => (Math.random() > 0.5 ? 1 : -1));
    return shuffledLines;
  }, [codeLines, answer]);

  const [lineIds, setLineIds] = useState(orderedLines.map((line) => line.id));

  return (
    <div className={styles.container}>
      <DragDropProvider
        onDragEnd={(event) => {
          const answer = move(lineIds, event);
          console.log(`Save answer ${answer}`);
          setAnswer(currentQuestionId, answer);
          setLineIds(answer);
        }}
      >
        {orderedLines.map((codeLine, index) => (
          <CodeLine key={codeLine.id} index={index} codeLine={codeLine} />
        ))}
      </DragDropProvider>
    </div>
  );
}
