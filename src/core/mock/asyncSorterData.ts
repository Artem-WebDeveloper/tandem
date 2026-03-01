export const MOCK_ASYNC_SORTER_DATA = [
  {
    id: 'as-001',
    type: 'async_sorter',
    difficulty: 1,
    section: 'Core JS',
    tags: ['event-loop', 'promises'],
    version: 1,
    questions: [
      {
        id: '1',
        code: "console.log('1');\n\nPromise.resolve().then(() => console.log('2'));\n\nsetTimeout(() => console.log('3'), 0);",
        blocks: ['1', '2', '3'],
      },
      {
        id: '2',
        code: "setTimeout(() => console.log('1'), 0);\n\nconsole.log('2');\n\nPromise.resolve().then(() => console.log('3'));\n\nconsole.log('4');",
        blocks: ['1', '2', '3', '4'],
      },
      {
        id: '3',
        code: "console.log('1');\n\nsetTimeout(() => console.log('2'), 0);\n\nsetTimeout(() => console.log('3'), 0);",
        blocks: ['1', '2', '3'],
      },
      {
        id: '4',
        code: "Promise.resolve().then(() => console.log('1'));\n\nPromise.resolve().then(() => console.log('2'));\n\nconsole.log('3');\n\nconsole.log('4');",
        blocks: ['1', '2', '3', '4'],
      },
      {
        id: '5',
        code: "console.log('1');\n\nsetTimeout(() => console.log('2'), 10);\n\nPromise.resolve().then(() => console.log('3'));",
        blocks: ['1', '2', '3'],
      },
    ],
  },
  {
    id: 'as-002',
    type: 'async_sorter',
    difficulty: 2,
    section: 'Core JS',
    tags: ['event-loop', 'promises', 'async'],
    version: 1,
    questions: [
      {
        id: '1',
        code: "console.log('1');\n\nsetTimeout(() => console.log('2'), 0);\n\nPromise.resolve()\n  .then(() => console.log('3'))\n  .then(() => console.log('4'));",
        blocks: ['1', '2', '3', '4'],
      },
      {
        id: '2',
        code: "async function test() {\n  console.log('1');\n  await Promise.resolve();\n  console.log('2');\n}\n\nconsole.log('3');\n\ntest();",
        blocks: ['1', '2', '3'],
      },
      {
        id: '3',
        code: "console.log('1');\n\nsetTimeout(() => {\n  console.log('2');\n  Promise.resolve().then(() => console.log('3'));\n}, 0);\n\nPromise.resolve().then(() => console.log('4'));",
        blocks: ['1', '2', '3', '4'],
      },
      {
        id: '4',
        code: "Promise.resolve()\n  .then(() => {\n    console.log('1');\n    return Promise.resolve();\n  })\n  .then(() => console.log('2'));\n\nsetTimeout(() => console.log('3'), 0);",
        blocks: ['1', '2', '3'],
      },
      {
        id: '5',
        code: "async function test() {\n  console.log('1');\n  await null;\n  console.log('2');\n}\n\nsetTimeout(() => console.log('3'), 0);\n\ntest();",
        blocks: ['1', '2', '3'],
      },
    ],
  },
  {
    id: 'as-003',
    type: 'async_sorter',
    difficulty: 3,
    section: 'Core JS',
    tags: ['event-loop', 'promises', 'async'],
    version: 1,
    questions: [
      {
        id: '1',
        code: "console.log('1');\n\nsetTimeout(() => {\n  console.log('2');\n  Promise.resolve().then(() => console.log('3'));\n}, 0);\n\nPromise.resolve()\n .then(() => {\n    console.log('4');\n    setTimeout(() => console.log('5'), 0);\n })\n .then(() => console.log('6'));\n\nconsole.log('7');",
        blocks: ['1', '2', '3', '4', '5', '6', '7'],
      },
      {
        id: '2',
        code: "async function a() {\n  console.log('1');\n  await b();\n  console.log('2');\n}\n\nasync function b() {\n  console.log('3');\n}\n\nconsole.log('4');\n\na();\n\nPromise.resolve().then(() => console.log('5'));\n\nconsole.log('6');",
        blocks: ['1', '2', '3', '4', '5', '6'],
      },
      {
        id: '3',
        code: "console.log('1');\n\nPromise.resolve().then(() => {\n  console.log('2');\n  return Promise.resolve();\n}).then(() => {\n  console.log('3');\n});\n\nPromise.resolve().then(() => {\n  console.log('4');\n});\n\nconsole.log('5');",
        blocks: ['1', '2', '3', '4', '5'],
      },
      {
        id: '4',
        code: "setTimeout(() => console.log('1'), 0);\n\n(async function() {\n  console.log('2');\n  await Promise.resolve();\n  console.log('3');\n})();\n\nPromise.resolve().then(() => console.log('4'));\n\nconsole.log('5');",
        blocks: ['1', '2', '3', '4', '5'],
      },
      {
        id: '5',
        code: "console.log('1');\n\nsetTimeout(() => {\n  console.log('2');\n}, 0);\n\n(async function() {\n  console.log('3');\n  await null;\n  console.log('4');\n})();\n\nPromise.resolve().then(() => {\n  console.log('5');\n  setTimeout(() => console.log('6'), 0);\n});\n\nconsole.log('7');",
        blocks: ['1', '2', '3', '4', '5', '6', '7'],
      },
    ],
  },
];
