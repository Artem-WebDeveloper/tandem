import { useTheme } from '@mui/material';
import { useSortable } from '@dnd-kit/react/sortable';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import styles from './CodeLine.module.scss';
import { useThemeStore } from '@/core/store/theme.store';
import type { CodeLineData } from '../../../types';

export function CodeLine({ codeLine, index }: { codeLine: CodeLineData; index: number }) {
  const appMode = useThemeStore((state) => state.mode);
  const theme = useTheme();
  const { isDragging, ref } = useSortable({
    id: codeLine.id,
    index: index,
  });

  return (
    <div
      ref={ref}
      className={styles.codeLineItem}
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        boxShadow: isDragging ? theme.shadows[8] : '',
        borderColor: theme.palette.divider,
      }}
    >
      <DragIndicatorIcon className={styles.dragIcon} style={{ width: '16px' }} />
      <pre className={styles.indent}>{'  '.repeat(codeLine.indent)}</pre>
      <SyntaxHighlighter
        language="javascript"
        style={appMode === 'light' ? docco : railscasts}
        customStyle={{
          background: 'transparent',
          margin: 0,
          display: 'inline-block',
        }}
        wrapLongLines
      >
        {codeLine.code}
      </SyntaxHighlighter>
    </div>
  );
}
