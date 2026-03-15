import type { CodeCompletionTask } from '../feature/CodeCompletionWidget/types';

export const MOCK_CODE_COMPLETION_DATA: CodeCompletionTask[] = [
  {
    id: 'cc-001',
    type: 'code_completion',
    difficulty: 1,
    section: 'Core JS',
    time_limit: 300,
    title: {
      ru: 'Методы массивов',
      en: 'Array Methods',
    },
    tags: ['array-methods'],
    questions: [
      {
        id: '1',
        code: 'const result = arr.___(x => x > 10);',
        blanks: '___',
        hint: {
          ru: 'Возвращает новый массив с элементами, прошедшими условие',
          en: 'Returns a new array with elements that pass the test',
        },
      },
      {
        id: '2',
        code: 'const doubled = arr.___(x => x * 2);',
        blanks: '___',
        hint: {
          ru: 'Создает новый массив, преобразуя каждый элемент',
          en: 'Creates a new array by transforming each element',
        },
      },
      {
        id: '3',
        code: 'const sum = arr.___((acc, val) => acc + val, 0);',
        blanks: '___',
        hint: {
          ru: 'Сводит массив к одному значению',
          en: 'Reduces an array to a single value',
        },
      },
      {
        id: '4',
        code: 'const found = arr.___(x => x === 5);',
        blanks: '___',
        hint: {
          ru: 'Возвращает первый элемент, соответствующий условию',
          en: 'Returns the first element that matches the condition',
        },
      },
      {
        id: '5',
        code: 'arr.___(x => console.log(x));',
        blanks: '___',
        hint: {
          ru: 'Выполняет функцию для каждого элемента массива',
          en: 'Executes a function for each array element',
        },
      },
    ],
  },

  {
    id: 'cc-002',
    type: 'code_completion',
    difficulty: 2,
    section: 'Core JS',
    time_limit: 360,
    title: {
      ru: 'Объекты JavaScript',
      en: 'JavaScript Objects',
    },
    tags: ['objects'],
    questions: [
      {
        id: '1',
        code: 'const keys = Object.___(user);',
        blanks: '___',
        hint: {
          ru: 'Возвращает массив ключей объекта',
          en: 'Returns an array of object property names',
        },
      },
      {
        id: '2',
        code: 'const values = Object.___(user);',
        blanks: '___',
        hint: {
          ru: 'Возвращает массив значений объекта',
          en: 'Returns an array of object values',
        },
      },
      {
        id: '3',
        code: 'const entries = Object.___(user);',
        blanks: '___',
        hint: {
          ru: 'Возвращает массив пар ключ-значение',
          en: 'Returns an array of key-value pairs',
        },
      },
      {
        id: '4',
        code: 'const clone = Object.___({}, user);',
        blanks: '___',
        hint: {
          ru: 'Копирует свойства из одного объекта в другой',
          en: 'Copies properties from one object to another',
        },
      },
      {
        id: '5',
        code: "console.log(user.___('name'));",
        blanks: '___',
        hint: {
          ru: 'Проверяет наличие собственного свойства у объекта',
          en: 'Checks if an object has its own property',
        },
      },
    ],
  },

  {
    id: 'cc-003',
    type: 'code_completion',
    difficulty: 2,
    section: 'Core JS',
    time_limit: 480,
    title: {
      ru: 'Функции JavaScript',
      en: 'JavaScript Functions',
    },
    tags: ['functions'],
    questions: [
      {
        id: '1',
        code: 'function greet() { return this.name; }\nconst bound = greet.___(user);',
        blanks: '___',
        hint: {
          ru: 'Создает новую функцию с фиксированным this',
          en: 'Creates a new function with a fixed this context',
        },
      },
      {
        id: '2',
        code: 'function sum(a,b){ return a + b }\nsum.___(null,[1,2])',
        blanks: '___',
        hint: {
          ru: 'Вызывает функцию с аргументами в виде массива',
          en: 'Calls a function with arguments provided as an array',
        },
      },
      {
        id: '3',
        code: "function greet(name){ return `Hi ${name}` }\ngreet.___(null,'Tom')",
        blanks: '___',
        hint: {
          ru: 'Вызывает функцию с указанным this и аргументами',
          en: 'Calls a function with a given this value and arguments',
        },
      },
      {
        id: '4',
        code: 'const add = (a) => (b) => a + b;\n// Это пример ___ функции',
        blanks: '___',
        hint: {
          ru: 'Функция, возвращающая другую функцию',
          en: 'A function that returns another function',
        },
      },
      {
        id: '5',
        code: 'function counter(){ let n = 0; return () => ++n }\n// Это пример ___',
        blanks: '___',
        hint: {
          ru: 'Функция, запоминающая переменные из внешней области',
          en: 'A function that remembers variables from its outer scope',
        },
      },
    ],
  },

  {
    id: 'cc-004',
    type: 'code_completion',
    difficulty: 3,
    section: 'Core JS',
    time_limit: 480,
    title: {
      ru: 'Промисы и асинхронность',
      en: 'Promises and Async JavaScript',
    },
    tags: ['promises', 'async'],
    questions: [
      {
        id: '1',
        code: 'promise.___(result => console.log(result));',
        blanks: '___',
        hint: {
          ru: 'Обрабатывает успешно выполненный промис',
          en: 'Handles a fulfilled promise',
        },
      },
      {
        id: '2',
        code: 'promise.___(err => console.error(err));',
        blanks: '___',
        hint: {
          ru: 'Обрабатывает отклоненный промис',
          en: 'Handles a rejected promise',
        },
      },
      {
        id: '3',
        code: "promise.___(() => console.log('done'));",
        blanks: '___',
        hint: {
          ru: 'Выполняется после завершения промиса',
          en: 'Runs after a promise is settled',
        },
      },
      {
        id: '4',
        code: 'const data = ___ fetch(url)',
        blanks: '___',
        hint: {
          ru: 'Ключевое слово для ожидания результата промиса',
          en: 'Keyword used to wait for a promise result',
        },
      },
      {
        id: '5',
        code: 'Promise.___([p1,p2]).then(res => console.log(res));',
        blanks: '___',
        hint: {
          ru: 'Ожидает выполнения всех промисов',
          en: 'Waits for all promises to resolve',
        },
      },
    ],
  },

  {
    id: 'cc-005',
    type: 'code_completion',
    difficulty: 1,
    section: 'HTML',
    time_limit: 240,
    title: {
      ru: 'Основы HTML',
      en: 'HTML Basics',
    },
    tags: ['html-elements'],
    questions: [
      {
        id: '1',
        code: '<___>Hello</p>',
        blanks: '___',
        hint: {
          ru: 'Тег для абзаца',
          en: 'Tag used to create a paragraph',
        },
      },
      {
        id: '2',
        code: "<a ___='https://example.com'>Link</a>",
        blanks: '___',
        hint: {
          ru: 'Атрибут, задающий адрес ссылки',
          en: 'Attribute that specifies link URL',
        },
      },
      {
        id: '3',
        code: "<img ___='photo.jpg' />",
        blanks: '___',
        hint: {
          ru: 'Атрибут, задающий источник изображения',
          en: 'Attribute specifying the image source',
        },
      },
      {
        id: '4',
        code: "<input type='___'>",
        blanks: '___',
        hint: {
          ru: 'Тип поля ввода для пароля',
          en: 'Input type used for passwords',
        },
      },
      {
        id: '5',
        code: '<___>Item</li>',
        blanks: '___',
        hint: {
          ru: 'Тег контейнера для элементов списка',
          en: 'Tag used as container for list items',
        },
      },
    ],
  },

  {
    id: 'cc-006',
    type: 'code_completion',
    difficulty: 2,
    section: 'HTML',
    time_limit: 480,
    title: {
      ru: 'HTML формы и атрибуты',
      en: 'HTML Forms and Attributes',
    },
    tags: ['forms', 'attributes'],
    questions: [
      {
        id: '1',
        code: "<form ___='/submit'>",
        blanks: '___',
        hint: {
          ru: 'Определяет адрес, куда отправляется форма',
          en: 'Specifies where form data will be sent',
        },
      },
      {
        id: '2',
        code: "<input ___='email'>",
        blanks: '___',
        hint: {
          ru: 'Атрибут, определяющий тип поля ввода',
          en: 'Attribute defining the input type',
        },
      },
      {
        id: '3',
        code: "<label ___='email'>Email</label>",
        blanks: '___',
        hint: {
          ru: 'Связывает label с input по id',
          en: 'Associates label with an input using its id',
        },
      },
      {
        id: '4',
        code: "<input placeholder='Enter name' ___>",
        blanks: '___',
        hint: {
          ru: 'Атрибут, делающий поле обязательным',
          en: 'Attribute that makes a field mandatory',
        },
      },
      {
        id: '5',
        code: "<button type='___'>Submit</button>",
        blanks: '___',
        hint: {
          ru: 'Тип кнопки для отправки формы',
          en: 'Button type used to submit a form',
        },
      },
      {
        id: '6',
        code: '<input ___>',
        blanks: '___',
        hint: {
          ru: 'Атрибут, отключающий поле ввода',
          en: 'Attribute that disables an input element',
        },
      },
    ],
  },

  {
    id: 'cc-007',
    type: 'code_completion',
    difficulty: 3,
    section: 'HTML',
    time_limit: 540,
    title: {
      ru: 'Семантический HTML и доступность',
      en: 'Semantic HTML and Accessibility',
    },
    tags: ['semantic', 'accessibility'],
    questions: [
      {
        id: '1',
        code: '<___>Navigation links</nav>',
        blanks: '___',
        hint: {
          ru: 'Семантический тег для навигации',
          en: 'Semantic element representing navigation links',
        },
      },
      {
        id: '2',
        code: '<___>Main content</main>',
        blanks: '___',
        hint: {
          ru: 'Основной контент страницы',
          en: 'Represents the dominant content of the document',
        },
      },
      {
        id: '3',
        code: "<img src='cat.jpg' ___='Cat'>",
        blanks: '___',
        hint: {
          ru: 'Текстовое описание изображения',
          en: 'Alternative text description for an image',
        },
      },
      {
        id: '4',
        code: "<section aria-___='Title'>",
        blanks: '___',
        hint: {
          ru: 'ARIA атрибут для текстовой метки элемента',
          en: 'ARIA attribute providing a textual label',
        },
      },
      {
        id: '5',
        code: "<button aria-___='Close'>",
        blanks: '___',
        hint: {
          ru: 'ARIA атрибут, описывающий кнопку',
          en: 'ARIA attribute describing a button',
        },
      },
      {
        id: '6',
        code: "<meta ___='UTF-8'>",
        blanks: '___',
        hint: {
          ru: 'Атрибут, задающий кодировку страницы',
          en: 'Attribute specifying document character encoding',
        },
      },
    ],
  },

  {
    id: 'cc-008',
    type: 'code_completion',
    difficulty: 1,
    section: 'React',
    time_limit: 480,
    title: {
      ru: 'Основы React и JSX',
      en: 'React Basics and JSX',
    },
    tags: ['jsx', 'components'],
    questions: [
      {
        id: '1',
        code: 'function App(){ return <___>Hello</div> }',
        blanks: '___',
        hint: {
          ru: 'Обычный контейнерный HTML элемент',
          en: 'Common container HTML element',
        },
      },
      {
        id: '2',
        code: '<button ___={handleClick}>Click</button>',
        blanks: '___',
        hint: {
          ru: 'Обработчик события клика',
          en: 'Event handler for click events',
        },
      },
      {
        id: '3',
        code: 'const list = items.___(item => <li>{item}</li>)',
        blanks: '___',
        hint: {
          ru: 'Метод массива для рендера списков',
          en: 'Array method commonly used for rendering lists',
        },
      },
      {
        id: '4',
        code: "<div class___='container'></div>",
        blanks: '___',
        hint: {
          ru: 'Атрибут JSX вместо HTML class',
          en: 'JSX attribute used instead of HTML class',
        },
      },
      {
        id: '5',
        code: 'export ___ App',
        blanks: '___',
        hint: {
          ru: 'Ключевое слово для экспорта компонента',
          en: 'Keyword used to export a component by default',
        },
      },
    ],
  },

  {
    id: 'cc-009',
    type: 'code_completion',
    difficulty: 2,
    section: 'React',
    time_limit: 600,
    title: {
      ru: 'React Hooks',
      en: 'React Hooks',
    },
    tags: ['hooks', 'state'],
    questions: [
      {
        id: '1',
        code: 'const [count,setCount] = React.___(0)',
        blanks: '___',
        hint: {
          ru: 'Хук для хранения состояния компонента',
          en: 'Hook used to store component state',
        },
      },
      {
        id: '2',
        code: "React.___(()=>{ console.log('mounted') },[])",
        blanks: '___',
        hint: {
          ru: 'Хук для побочных эффектов',
          en: 'Hook used for side effects',
        },
      },
      {
        id: '3',
        code: 'const ref = React.___(null)',
        blanks: '___',
        hint: {
          ru: 'Хук для доступа к DOM элементам',
          en: 'Hook used to reference DOM elements',
        },
      },
      {
        id: '4',
        code: 'const value = React.___(()=>a+b,[a,b])',
        blanks: '___',
        hint: {
          ru: 'Кэширует вычисленное значение',
          en: 'Memoizes a computed value',
        },
      },
      {
        id: '5',
        code: 'const fn = React.___(handler,[a,b])',
        blanks: '___',
        hint: {
          ru: 'Кэширует функцию между рендерами',
          en: 'Memoizes a function between renders',
        },
      },
    ],
  },

  {
    id: 'cc-010',
    type: 'code_completion',
    difficulty: 3,
    section: 'React',
    time_limit: 600,
    title: {
      ru: 'Продвинутые возможности React',
      en: 'Advanced React Concepts',
    },
    tags: ['context', 'performance', 'hooks'],
    questions: [
      {
        id: '1',
        code: 'const ThemeContext = React.___()',
        blanks: '___',
        hint: {
          ru: 'Создает новый React контекст',
          en: 'Creates a new React context',
        },
      },
      {
        id: '2',
        code: 'const theme = React.___(ThemeContext)',
        blanks: '___',
        hint: {
          ru: 'Хук для чтения значения контекста',
          en: 'Hook used to read context value',
        },
      },
      {
        id: '3',
        code: 'export default React.___(Component)',
        blanks: '___',
        hint: {
          ru: 'Оптимизирует компонент, предотвращая лишние рендеры',
          en: 'Optimizes component by preventing unnecessary re-renders',
        },
      },
      {
        id: '4',
        code: 'const [state,dispatch] = React.___(reducer,initialState)',
        blanks: '___',
        hint: {
          ru: 'Хук для сложной логики управления состоянием',
          en: 'Hook for managing complex state logic',
        },
      },
      {
        id: '5',
        code: 'const id = React.___()',
        blanks: '___',
        hint: {
          ru: 'Хук для генерации уникального идентификатора',
          en: 'Hook used to generate a unique stable id',
        },
      },
    ],
  },
];
