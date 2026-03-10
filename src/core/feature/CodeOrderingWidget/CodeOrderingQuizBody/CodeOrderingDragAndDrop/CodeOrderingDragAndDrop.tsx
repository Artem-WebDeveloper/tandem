// import { DragDropProvider } from '@dnd-kit/react';
import { useTheme } from '@mui/material';
import { useSortable } from '@dnd-kit/react/sortable';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import styles from './CodeOrderingDragAndDrop.module.scss';

// import { useCodeOrderingStore } from '@/core/store/codeOrdering.store';
import { useThemeStore } from '@/core/store/theme.store';
import type { CodeLine } from '../../types';

// type OnDragEnd = React.ComponentProps<typeof DragDropProvider>['onDragEnd'];

export default function CodeOrderingDragAndDrop({
  codeLines,
  currentQuestionId,
}: {
  codeLines: CodeLine[];
  currentQuestionId: string;
}) {
  console.log(currentQuestionId);
  // const setAnswer = useCodeOrderingStore((state) => state.setAnswer);
  // const answers = useCodeOrderingStore((state) => state.answers);
  // const currentAnswer = answers.find((answer) => answer.questionId === currentQuestionId);

  // const previousAnswerRef = useRef<string[] | null>(null);

  // const items = {
  //   source: [...blocks].filter(
  //     (item) => currentAnswer?.payload.find((i) => i === item) === undefined,
  //   ),
  //   target: currentAnswer?.payload || [],
  // };

  // const handleDragEnd: OnDragEnd = (event) => {
  //   if (event.canceled && previousAnswerRef.current) {
  //     setAnswer(currentQuestionId, previousAnswerRef.current);
  //   }
  // };

  return (
    <div className={styles.container}>
      {codeLines.map((codeLine, index) => (
        <CodeLine key={codeLine.id} index={index} codeLine={codeLine} />
      ))}

      {/* <DragDropProvider
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
      </DragDropProvider> */}
    </div>
  );
}

function CodeLine({ codeLine, index }: { codeLine: CodeLine; index: number }) {
  const appMode = useThemeStore((state) => state.mode);
  const theme = useTheme();
  const { isDragging, ref } = useSortable({ id: codeLine.id, index });

  return (
    <div
      ref={ref}
      className={styles.item}
      style={{
        // backgroundColor: isDragging
        //   ? theme.palette.backgroundAccent
        //   : theme.palette.background.default,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        boxShadow: isDragging ? theme.shadows[8] : '',
        fontWeight: 400,
        fontFamily: 'monospace',
        borderColor: theme.palette.divider,
      }}
    >
      <DragIndicatorIcon className={styles.dragIcon} style={{ width: '16px' }} />
      <div className={styles.indent}>{'  '.repeat(codeLine.indent)}</div>
      <SyntaxHighlighter
        language="javascript"
        style={appMode === 'light' ? docco : railscasts}
        customStyle={{
          background: 'transparent',
          paddingLeft: 10 * codeLine.indent + 'px',
          margin: 0,
          display: 'inline-block',
        }}
      >
        {codeLine.code}
      </SyntaxHighlighter>
    </div>
  );
}
