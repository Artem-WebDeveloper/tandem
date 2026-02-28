import { useRef } from 'react';
import { DragDropProvider } from '@dnd-kit/react';
import { move } from '@dnd-kit/helpers';
import { AutoScroller } from '@dnd-kit/dom';

import styles from './AsyncSorterDragAndDrop.module.scss';

import { useAsyncSorterStore } from '@/core/store/asyncSorter.store';
import Dropzone from './Dropzone/Dropzone';
import Item from './Item/Item';

type OnDragEnd = React.ComponentProps<typeof DragDropProvider>['onDragEnd'];

function AsyncSorterDragAndDrop({
  blocks,
  currentQuestionId,
}: {
  blocks: string[];
  currentQuestionId: string;
}) {
  const setAnswer = useAsyncSorterStore((state) => state.setAnswer);
  const answers = useAsyncSorterStore((state) => state.answers);
  const currentAnswer = answers.find((answer) => answer.questionId === currentQuestionId);

  const previousAnswerRef = useRef<string[] | null>(null);

  const items = {
    source: [...blocks].filter(
      (item) => currentAnswer?.payload.find((i) => i === item) === undefined,
    ),
    target: currentAnswer?.payload || [],
  };

  const handleDragEnd: OnDragEnd = (event) => {
    if (event.canceled && previousAnswerRef.current) {
      setAnswer(currentQuestionId, previousAnswerRef.current);
    }
  };

  return (
    <DragDropProvider
      plugins={(defaults) => defaults.filter((plugin) => plugin !== AutoScroller)}
      onDragStart={() => {
        previousAnswerRef.current = [...items.target];
      }}
      onDragOver={(e) => setAnswer(currentQuestionId, move(items, e).target)}
      onDragEnd={handleDragEnd}
    >
      <div className={styles.container}>
        <Dropzone id="target" key="target">
          {items.target.map((id, index) => (
            <Item id={id} key={id} index={index} line="target" />
          ))}
        </Dropzone>

        <Dropzone id="source" key="source">
          {items.source.map((id, index) => (
            <Item id={id} key={id} index={index} line="source" />
          ))}
        </Dropzone>
      </div>
    </DragDropProvider>
  );
}

export default AsyncSorterDragAndDrop;
