import type { AsyncSorterTask } from '../feature/AsyncSorterWidget/types';

export const MOCK_ASYNC_SORTER_DATA: AsyncSorterTask[] = [
  {
    id: 'as-001',
    type: 'async_sorter',
    difficulty: 1,
    section: 'Core JS',
    time_limit: 600,
    title: {
      ru: 'Базовые задачи Event Loop',
      en: 'Basic Event Loop Tasks',
    },
    tags: ['event-loop', 'promises'],
    questions: [
      {
        id: '1',
        code: "console.log('1');\nPromise.resolve().then(()=>console.log('2'));\nsetTimeout(()=>console.log('3'),0);",
        blocks: ['1', '2', '3'],
      },
      {
        id: '2',
        code: "setTimeout(()=>console.log('1'),0);\nconsole.log('2');",
        blocks: ['1', '2'],
      },
      {
        id: '3',
        code: "console.log('1');\nPromise.resolve().then(()=>console.log('2'));\nconsole.log('3');",
        blocks: ['1', '2', '3'],
      },
      {
        id: '4',
        code: "Promise.resolve().then(()=>console.log('1'));\nconsole.log('2');",
        blocks: ['1', '2'],
      },
      {
        id: '5',
        code: "console.log('1');\nsetTimeout(()=>console.log('2'),0);\nconsole.log('3');",
        blocks: ['1', '2', '3'],
      },
    ],
  },

  {
    id: 'as-002',
    type: 'async_sorter',
    difficulty: 2,
    section: 'Core JS',
    time_limit: 840,
    title: {
      ru: 'Очереди микрозадач и макрозадач',
      en: 'Microtask and Macrotask Queue',
    },
    tags: ['event-loop', 'promises', 'microtasks'],
    questions: [
      {
        id: '1',
        code: "console.log('1');\nsetTimeout(()=>console.log('2'),0);\nPromise.resolve().then(()=>console.log('3'));\nconsole.log('4');",
        blocks: ['1', '2', '3', '4'],
      },
      {
        id: '2',
        code: "Promise.resolve().then(()=>console.log('1'));\nPromise.resolve().then(()=>console.log('2'));\nconsole.log('3');",
        blocks: ['1', '2', '3'],
      },
      {
        id: '3',
        code: "setTimeout(()=>console.log('1'),0);\nPromise.resolve().then(()=>console.log('2'));\nconsole.log('3');",
        blocks: ['1', '2', '3'],
      },
      {
        id: '4',
        code: "console.log('1');\nPromise.resolve().then(()=>{\n console.log('2');\n});\nconsole.log('3');",
        blocks: ['1', '2', '3'],
      },
      {
        id: '5',
        code: "console.log('1');\nsetTimeout(()=>console.log('2'),0);\nPromise.resolve().then(()=>console.log('3'));\nPromise.resolve().then(()=>console.log('4'));",
        blocks: ['1', '2', '3', '4'],
      },
    ],
  },

  {
    id: 'as-003',
    type: 'async_sorter',
    difficulty: 3,
    section: 'Core JS',
    time_limit: 780,
    title: {
      ru: 'Сложные задачи Event Loop',
      en: 'Advanced Event Loop Tasks',
    },
    tags: ['event-loop', 'promises', 'async'],
    questions: [
      {
        id: '1',
        code: "console.log('1');\nsetTimeout(()=>console.log('2'),0);\nPromise.resolve().then(()=>{\n console.log('3');\n Promise.resolve().then(()=>console.log('4'));\n});",
        blocks: ['1', '2', '3', '4'],
      },
      {
        id: '2',
        code: "setTimeout(()=>console.log('1'),0);\nPromise.resolve().then(()=>console.log('2'));\nconsole.log('3');\nPromise.resolve().then(()=>console.log('4'));",
        blocks: ['1', '2', '3', '4'],
      },
      {
        id: '3',
        code: "console.log('1');\nPromise.resolve().then(()=>{\n console.log('2');\n setTimeout(()=>console.log('3'),0);\n});\nconsole.log('4');",
        blocks: ['1', '2', '3', '4'],
      },
      {
        id: '4',
        code: "console.log('1');\nsetTimeout(()=>{\n console.log('2');\n Promise.resolve().then(()=>console.log('3'));\n},0);\nPromise.resolve().then(()=>console.log('4'));",
        blocks: ['1', '2', '3', '4'],
      },
      {
        id: '5',
        code: "Promise.resolve().then(()=>{\n console.log('1');\n Promise.resolve().then(()=>console.log('2'));\n});\nconsole.log('3');",
        blocks: ['1', '2', '3'],
      },
    ],
  },

  {
    id: 'as-004',
    type: 'async_sorter',
    difficulty: 3,
    section: 'React',
    time_limit: 840,
    title: {
      ru: 'Базовый порядок React эффектов',
      en: 'Basic React Effects Order',
    },
    tags: ['react', 'hooks'],
    questions: [
      {
        id: '1',
        code: "function App(){\n console.log('1');\n React.useEffect(()=>console.log('2'),[]);\n console.log('3');\n return <div/>;\n}",
        blocks: ['1', '2', '3'],
      },
      {
        id: '2',
        code: "function App(){\n console.log('1');\n React.useEffect(()=>{\n  console.log('2');\n  Promise.resolve().then(()=>console.log('3'));\n },[]);\n return null;\n}",
        blocks: ['1', '2', '3'],
      },
      {
        id: '3',
        code: "function App(){\n console.log('1');\n React.useEffect(()=>console.log('2'),[]);\n setTimeout(()=>console.log('3'));\n console.log('4');\n return null;\n}",
        blocks: ['1', '2', '3', '4'],
      },
      {
        id: '4',
        code: "function App(){\n console.log('1');\n Promise.resolve().then(()=>console.log('2'));\n React.useEffect(()=>console.log('3'),[]);\n console.log('4');\n return null;\n}",
        blocks: ['1', '2', '3', '4'],
      },
    ],
  },
];
