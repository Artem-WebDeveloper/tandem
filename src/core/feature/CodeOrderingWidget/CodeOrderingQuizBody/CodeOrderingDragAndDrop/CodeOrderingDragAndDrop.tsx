import { DragDropProvider } from '@dnd-kit/react';
import { move } from '@dnd-kit/helpers';

import styles from './CodeOrderingDragAndDrop.module.scss';
import { useCodeOrderingStore } from '@/core/store/codeOrdering.store';
import type { CodeLineData } from '../../types';
import { CodeLine } from './CodeLine/CodeLine';

export default function CodeOrderingDragAndDrop({
  lines,
  currentQuestionId,
}: {
  lines: CodeLineData[];
  currentQuestionId: number;
}) {
  const setAnswer = useCodeOrderingStore((state) => state.setAnswer);
  const answers = useCodeOrderingStore((state) => state.answers);

  // получаем ответ на отрисовываемый вопрос, если он был сохранен в стор
  const savedLinesIds = answers.find((answer) => answer.questionId === currentQuestionId)?.payload;

  // получаем массив линий в нужном для отрисовки порядке
  let orderedLines: CodeLineData[] = [];

  if (savedLinesIds) {
    // если есть сохраненный ответ - пересортировываем линии с сервера так,
    // как их расставил пользователь в сохраненном ответе
    for (const savedLineId of savedLinesIds) {
      const codeLine = lines.find((codeLine) => codeLine.id === savedLineId);
      if (codeLine) {
        orderedLines.push(codeLine);
        console.log('1', orderedLines);
      }
    }
  } else {
    // если сохраненного ответа нет то используем исходный массив линий
    orderedLines = lines;
    console.log('2', orderedLines);
  }
  console.log(orderedLines);
  const orderedLinesIds = orderedLines.map((orderedLine) => orderedLine.id);

  return (
    <div className={styles.container}>
      <DragDropProvider
        onDragEnd={(event) => {
          const answer = move(orderedLinesIds, event);
          console.log(`Save answer ${answer}`);
          setAnswer(currentQuestionId, answer);
        }}
      >
        {orderedLines.map((codeLine, index) => (
          <CodeLine key={codeLine.id} index={index} codeLine={codeLine} />
        ))}
      </DragDropProvider>
    </div>
  );
}
