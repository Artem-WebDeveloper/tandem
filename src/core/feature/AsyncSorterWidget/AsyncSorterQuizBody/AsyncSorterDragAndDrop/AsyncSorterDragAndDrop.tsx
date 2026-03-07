import { useRef } from 'react';
import { DragDropProvider } from '@dnd-kit/react';
import { move } from '@dnd-kit/helpers';
import { AutoScroller } from '@dnd-kit/dom';

import styles from './AsyncSorterDragAndDrop.module.scss';

import { useAsyncSorterStore } from '@/core/store/asyncSorter.store';
import Dropzone from './Dropzone/Dropzone';
import Item from './Item/Item';
import DropzonePlaceholder from './DropzonePlaceholder/DropzonePlaceholder';

type OnDragEnd = React.ComponentProps<typeof DragDropProvider>['onDragEnd'];

const EMPTY_SOURCE_BLOCK_MESSAGE = 'Все цифры расставлены';

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
    <div className={styles.container}>
      <DragDropProvider
        plugins={(defaults) => defaults.filter((plugin) => plugin !== AutoScroller)}
        onDragStart={() => {
          previousAnswerRef.current = [...items.target];
        }}
        onDragOver={(e) => setAnswer(currentQuestionId, move(items, e).target)}
        onDragEnd={handleDragEnd}
      >
        <Dropzone id="target" key="target">
          {items.target.length > 0 ? (
            items.target.map((id, index) => <Item id={id} key={id} index={index} line="target" />)
          ) : (
            <DropzonePlaceholder />
          )}
        </Dropzone>

        <Dropzone id="source" key="source">
          {items.source.length > 0
            ? items.source.map((id, index) => <Item id={id} key={id} index={index} line="source" />)
            : EMPTY_SOURCE_BLOCK_MESSAGE}
        </Dropzone>
      </DragDropProvider>
    </div>
  );
}

export default AsyncSorterDragAndDrop;
