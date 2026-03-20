import type { TrueFalseTask } from '../feature/TrueFalseWidget/types';

export const MOCK_TRUE_FALSE_DATA: TrueFalseTask[] = [
  {
    id: 'tf-001',
    type: 'true_false',
    difficulty: 2,
    section: 'Core-js',
    tags: ['promises', 'async', 'functions'],
    time_limit: 8,
    title: {
      ru: 'Основы работы с Promise',
      en: 'Basics of Promise in JavaScript',
    },
    questions: [
      {
        id: '1',
        statement: {
          ru: 'Метод Promise.all() возвращает результаты в порядке завершения промисов.',
          en: 'The method Promise.all() returns results in the order of completion of the promises.',
        },
        correct: false,
        explanation: {
          ru: 'Promise.all() сохраняет порядок входного массива, несмотря на порядок завершения промисов.',
          en: 'Promise.all() preserves the order of the input array regardless of the order in which the promises are completed.',
        },
      },
      {
        id: '2',
        statement: {
          ru: 'Метод Promise.resolve() используется для создания отклоненного промиса.',
          en: 'The method Promise.resolve() is used to create a rejected promise.',
        },
        correct: false,
        explanation: {
          ru: 'Promise.resolve() используется для создания выполненного промиса с переданным значением.',
          en: 'Promise.resolve() is used to create a resolved promise with a given value.',
        },
      },
      {
        id: '3',
        statement: {
          ru: 'Метод Promise.all() работает только с массивами Promise объектов.',
          en: 'The method Promise.all() works only with arrays of Promise objects.',
        },
        correct: true,
        explanation: {
          ru: 'Метод Promise.all() ожидает массив или итерабельный объект, содержащий Promise объекты.',
          en: 'The method Promise.all() expects an array or iterable object containing Promise objects.',
        },
      },
      {
        id: '4',
        statement: {
          ru: 'Promise в JavaScript всегда выполняется асинхронно, даже если промис немедленно решен.',
          en: 'Promises in JavaScript always execute asynchronously, even if the promise is immediately resolved.',
        },
        correct: true,
        explanation: {
          ru: 'Промисы всегда выполняются асинхронно, даже если они немедленно решены.',
          en: 'Promises always execute asynchronously, even if they are immediately resolved.',
        },
      },
      {
        id: '5',
        statement: {
          ru: 'Метод .then() возвращает новый Promise, который можно использовать для цепочки операций.',
          en: 'The method .then() returns a new Promise that can be used for chaining operations.',
        },
        correct: true,
        explanation: {
          ru: 'Метод .then() возвращает новый Promise, который позволяет создать цепочку асинхронных операций.',
          en: 'The .then() method returns a new Promise that allows creating a chain of asynchronous operations.',
        },
      },
      {
        id: '6',
        statement: {
          ru: 'Метод Promise.all() может обрабатывать как асинхронные функции, так и синхронные.',
          en: 'The method Promise.all() can handle both asynchronous and synchronous functions.',
        },
        correct: true,
        explanation: {
          ru: 'Promise.all() может быть использован для обработки как синхронных, так и асинхронных задач в одном массиве.',
          en: 'Promise.all() can be used to handle both synchronous and asynchronous tasks in the same array.',
        },
      },
      {
        id: '7',
        statement: {
          ru: 'Promise.all() завершится сразу же, как только один из промисов завершится с ошибкой.',
          en: 'Promise.all() will finish as soon as one of the promises completes with an error.',
        },
        correct: true,
        explanation: {
          ru: 'Если хотя бы один промис в массиве завершится с ошибкой, Promise.all() отклоняется с этой ошибкой.',
          en: 'If any promise in the array finishes with an error, Promise.all() rejects with that error.',
        },
      },
    ],
  },
  {
    id: 'tf-002',
    type: 'true_false',
    difficulty: 3,
    section: 'TypeScript',
    tags: ['types', 'interfaces', 'generics'],
    time_limit: 10,
    title: {
      ru: 'Типы данных в TypeScript',
      en: 'Data Types in TypeScript',
    },
    questions: [
      {
        id: '1',
        statement: {
          ru: 'TypeScript не поддерживает типы данных, такие как null или undefined.',
          en: 'TypeScript does not support data types like null or undefined.',
        },
        correct: false,
        explanation: {
          ru: 'TypeScript поддерживает типы null и undefined, и они могут быть использованы в коде.',
          en: 'TypeScript supports the null and undefined types, and they can be used in the code.',
        },
      },
      {
        id: '2',
        statement: {
          ru: 'TypeScript поддерживает только строгую типизацию.',
          en: 'TypeScript only supports strict typing.',
        },
        correct: false,
        explanation: {
          ru: 'TypeScript поддерживает как строгую, так и нестрогую типизацию в зависимости от настроек компилятора.',
          en: 'TypeScript supports both strict and non-strict typing depending on the compiler settings.',
        },
      },
      {
        id: '3',
        statement: {
          ru: 'Generics в TypeScript позволяют создавать обобщенные компоненты для работы с разными типами данных.',
          en: 'Generics in TypeScript allow creating generic components to work with different data types.',
        },
        correct: true,
        explanation: {
          ru: 'Generics позволяют создавать компоненты, которые могут работать с любыми типами данных, повышая гибкость кода.',
          en: 'Generics allow creating components that can work with any data type, enhancing code flexibility.',
        },
      },
      {
        id: '4',
        statement: {
          ru: 'TypeScript не поддерживает декораторы (decorators) в классовых компонентах.',
          en: 'TypeScript does not support decorators in class components.',
        },
        correct: false,
        explanation: {
          ru: 'TypeScript поддерживает декораторы в классах, начиная с версии 1.6, но требует их включения через флаг компилятора.',
          en: 'TypeScript supports decorators in classes starting from version 1.6, but requires enabling them through a compiler flag.',
        },
      },
      {
        id: '5',
        statement: {
          ru: 'Interfaces в TypeScript не могут содержать реализации методов.',
          en: 'Interfaces in TypeScript cannot contain method implementations.',
        },
        correct: true,
        explanation: {
          ru: 'Интерфейсы в TypeScript могут содержать только сигнатуры методов, но не их реализацию.',
          en: 'Interfaces in TypeScript can only contain method signatures, not their implementations.',
        },
      },
      {
        id: '6',
        statement: {
          ru: 'TypeScript поддерживает перегрузку функций (function overloading).',
          en: 'TypeScript supports function overloading.',
        },
        correct: true,
        explanation: {
          ru: 'TypeScript поддерживает перегрузку функций, позволяя определять несколько сигнатур для одной функции.',
          en: 'TypeScript supports function overloading, allowing multiple signatures for a single function.',
        },
      },
      {
        id: '7',
        statement: {
          ru: 'В TypeScript переменная с типом string всегда может быть использована как number.',
          en: 'In TypeScript, a variable of type string can always be used as a number.',
        },
        correct: false,
        explanation: {
          ru: 'Переменная с типом string не может быть использована как number без явного преобразования типов.',
          en: 'A variable of type string cannot be used as a number without explicit type conversion.',
        },
      },
      {
        id: '8',
        statement: {
          ru: 'Перечисления в TypeScript могут быть строковыми или числовыми.',
          en: 'Enums in TypeScript can be either string or numeric.',
        },
        correct: true,
        explanation: {
          ru: 'TypeScript поддерживает как строковые, так и числовые перечисления.',
          en: 'TypeScript supports both string and numeric enums.',
        },
      },
      {
        id: '9',
        statement: {
          ru: 'С помощью TypeScript можно создать тип, который будет совместим с несколькими другими типами.',
          en: 'With TypeScript, you can create a type that is compatible with multiple other types.',
        },
        correct: true,
        explanation: {
          ru: 'TypeScript позволяет использовать объединение типов (union types), чтобы создать тип, который может быть совместим с несколькими другими типами.',
          en: 'TypeScript allows using union types to create a type that can be compatible with several other types.',
        },
      },
      {
        id: '10',
        statement: {
          ru: 'TypeScript всегда будет выявлять ошибки типов при компиляции, независимо от настроек компилятора.',
          en: 'TypeScript will always detect type errors during compilation, regardless of compiler settings.',
        },
        correct: false,
        explanation: {
          ru: 'Если компилятор настроен с флагом "strict" или "noImplicitAny", TypeScript может выявить ошибки типов, но при других настройках могут возникать проблемы с типами.',
          en: 'If the compiler is set with the "strict" or "noImplicitAny" flag, TypeScript can detect type errors, but with other settings, issues with types may arise.',
        },
      },
      {
        id: '11',
        statement: {
          ru: 'TypeScript поддерживает условные типы, которые могут быть использованы для условной проверки типов.',
          en: 'TypeScript supports conditional types, which can be used for conditional type checking.',
        },
        correct: true,
        explanation: {
          ru: 'Условные типы позволяют выбирать типы в зависимости от условий, улучшая гибкость кода.',
          en: 'Conditional types allow selecting types based on conditions, improving code flexibility.',
        },
      },
    ],
  },
  {
    id: 'tf-003',
    type: 'true_false',
    difficulty: 2,
    section: 'React',
    tags: ['hooks', 'state', 'components'],
    time_limit: 8,
    title: {
      ru: 'Основы React',
      en: 'Basics of React',
    },
    questions: [
      {
        id: '1',
        statement: {
          ru: 'React использует виртуальный DOM для улучшения производительности.',
          en: 'React uses virtual DOM to improve performance.',
        },
        correct: true,
        explanation: {
          ru: 'Виртуальный DOM позволяет минимизировать количество операций с реальным DOM, повышая производительность.',
          en: 'Virtual DOM minimizes operations on the real DOM, improving performance.',
        },
      },
      {
        id: '2',
        statement: {
          ru: 'Хуки в React могут быть использованы только внутри функциональных компонентов.',
          en: 'Hooks in React can only be used inside functional components.',
        },
        correct: true,
        explanation: {
          ru: 'Хуки могут быть использованы только в функциональных компонентах, начиная с версии React 16.8.',
          en: 'Hooks can only be used in functional components, starting from React version 16.8.',
        },
      },
      {
        id: '3',
        statement: {
          ru: 'State в React всегда должен быть изменен с помощью метода setState, даже в функциональных компонентах.',
          en: 'State in React should always be changed using the setState method, even in functional components.',
        },
        correct: false,
        explanation: {
          ru: 'В функциональных компонентах state изменяется с помощью useState и setState не используется.',
          en: 'In functional components, state is changed using useState and setState is not used.',
        },
      },
      {
        id: '4',
        statement: {
          ru: 'React компоненты могут быть как функциональными, так и классовыми.',
          en: 'React components can be both functional and class-based.',
        },
        correct: true,
        explanation: {
          ru: 'До появления хуков компоненты в React были только классовыми, но сейчас можно использовать и функциональные компоненты.',
          en: 'Before hooks were introduced, React components were only class-based, but now both functional and class components can be used.',
        },
      },
      {
        id: '5',
        statement: {
          ru: 'React не поддерживает передачу данных между компонентами через props.',
          en: 'React does not support passing data between components via props.',
        },
        correct: false,
        explanation: {
          ru: 'Props являются основным способом передачи данных между компонентами в React.',
          en: 'Props are the main way to pass data between components in React.',
        },
      },
      {
        id: '6',
        statement: {
          ru: 'React предоставляет встроенную систему роутинга через библиотеку React Router.',
          en: 'React provides a built-in routing system via the React Router library.',
        },
        correct: false,
        explanation: {
          ru: 'React не предоставляет встроенной системы роутинга, но для этого существует сторонняя библиотека React Router.',
          en: 'React does not provide a built-in routing system, but there is a third-party library called React Router for this.',
        },
      },
      {
        id: '7',
        statement: {
          ru: 'Хуки useEffect и useLayoutEffect имеют одинаковое поведение.',
          en: 'The hooks useEffect and useLayoutEffect behave the same.',
        },
        correct: false,
        explanation: {
          ru: 'useEffect выполняется после рендеринга, а useLayoutEffect — синхронно до рендеринга, что влияет на порядок их исполнения.',
          en: 'useEffect runs after rendering, while useLayoutEffect runs synchronously before rendering, affecting their execution order.',
        },
      },
      {
        id: '8',
        statement: {
          ru: 'React поддерживает одностороннюю привязку данных (one-way data binding).',
          en: 'React supports one-way data binding.',
        },
        correct: true,
        explanation: {
          ru: 'React использует одностороннюю привязку данных, что помогает управлять потоком данных от родительских компонентов к дочерним.',
          en: 'React uses one-way data binding, which helps manage data flow from parent to child components.',
        },
      },
      {
        id: '9',
        statement: {
          ru: 'Компоненты React всегда должны возвращать только один элемент.',
          en: 'React components must always return only one element.',
        },
        correct: true,
        explanation: {
          ru: 'Компоненты React должны возвращать один корневой элемент, обычно это оборачивающий элемент типа <div>, или можно использовать React.Fragment.',
          en: 'React components must return a single root element, usually a wrapping <div>, or you can use React.Fragment.',
        },
      },
      {
        id: '10',
        statement: {
          ru: 'React предоставляет возможность использовать напрямую состояние браузера через useState.',
          en: 'React provides the ability to use browser state directly through useState.',
        },
        correct: false,
        explanation: {
          ru: 'React использует внутреннее состояние компонентов с помощью useState, а не состояние браузера, которое доступно через Web API.',
          en: 'React uses internal state with useState, not browser state available through Web API.',
        },
      },
    ],
  },
  {
    id: 'tf-004',
    type: 'true_false',
    difficulty: 2,
    section: 'HTML',
    tags: ['forms', 'elements', 'attributes'],
    time_limit: 7,
    title: {
      ru: 'Основы HTML',
      en: 'Basics of HTML',
    },
    questions: [
      {
        id: '1',
        statement: {
          ru: 'Тег <form> используется для создания таблиц в HTML.',
          en: 'The <form> tag is used for creating tables in HTML.',
        },
        correct: false,
        explanation: {
          ru: 'Тег <form> используется для создания форм, а не таблиц. Для таблиц используется <table>.',
          en: 'The <form> tag is used for creating forms, not tables. Use <table> for tables.',
        },
      },
      {
        id: '2',
        statement: {
          ru: 'Атрибут href в теге <a> указывает URL ссылки.',
          en: 'The href attribute in the <a> tag specifies the URL of the link.',
        },
        correct: true,
        explanation: {
          ru: 'Атрибут href указывает адрес, на который ведет ссылка, и по которому происходит переход.',
          en: 'The href attribute specifies the address the link points to and where it leads when clicked.',
        },
      },
      {
        id: '3',
        statement: {
          ru: 'Семантические элементы HTML, такие как <header>, <footer>, <section>, помогают улучшить доступность страницы.',
          en: 'Semantic HTML elements like <header>, <footer>, <section> improve page accessibility.',
        },
        correct: true,
        explanation: {
          ru: 'Семантические элементы делают структуру страницы более понятной для поисковых систем и людей с ограниченными возможностями.',
          en: 'Semantic elements make the page structure more understandable for search engines and people with disabilities.',
        },
      },
      {
        id: '4',
        statement: {
          ru: 'В HTML можно использовать только один <head> и один <body> на страницу.',
          en: 'In HTML, you can use only one <head> and one <body> per page.',
        },
        correct: true,
        explanation: {
          ru: 'HTML структура ограничивает количество элементов <head> и <body> на одну страницу до одного.',
          en: 'HTML structure limits the number of <head> and <body> elements per page to one.',
        },
      },
      {
        id: '5',
        statement: {
          ru: 'Элемент <input type="text"> используется для отображения кнопки.',
          en: 'The <input type="text"> element is used for displaying a button.',
        },
        correct: false,
        explanation: {
          ru: 'Элемент <input type="text"> используется для ввода текста, а для кнопки используется <button> или <input type="button">.',
          en: 'The <input type="text"> element is used for text input, and for buttons, <button> or <input type="button"> should be used.',
        },
      },
      {
        id: '6',
        statement: {
          ru: 'Тег <img> используется для вставки изображений на страницу.',
          en: 'The <img> tag is used to insert images into the page.',
        },
        correct: true,
        explanation: {
          ru: 'Тег <img> вставляет изображения с использованием атрибута src для указания пути к файлу.',
          en: 'The <img> tag inserts images using the src attribute to specify the path to the file.',
        },
      },
      {
        id: '7',
        statement: {
          ru: 'HTML5 поддерживает аудио и видео теги для работы с мультимедийными файлами.',
          en: 'HTML5 supports audio and video tags for working with multimedia files.',
        },
        correct: true,
        explanation: {
          ru: 'HTML5 добавил теги <audio> и <video>, позволяющие встраивать и управлять аудио- и видеоконтентом.',
          en: 'HTML5 added <audio> and <video> tags to embed and control audio and video content.',
        },
      },
      {
        id: '8',
        statement: {
          ru: 'Элемент <link> используется для подключения JavaScript файлов к странице.',
          en: 'The <link> element is used to link JavaScript files to the page.',
        },
        correct: false,
        explanation: {
          ru: 'Элемент <link> используется для подключения внешних файлов стилей (CSS), а для JavaScript используется <script>.',
          en: 'The <link> element is used to link external style sheets (CSS), while <script> is used for JavaScript.',
        },
      },
    ],
  },
  {
    id: 'tf-005',
    type: 'true_false',
    difficulty: 3,
    section: 'Algorithms',
    tags: ['sorting', 'recursion', 'dynamic-programming'],
    time_limit: 12,
    title: {
      ru: 'Основы алгоритмов',
      en: 'Algorithms Basics',
    },
    questions: [
      {
        id: '1',
        statement: {
          ru: 'Алгоритм сортировки пузырьком работает за время O(n^2).',
          en: 'Bubble sort algorithm works in O(n^2) time.',
        },
        correct: true,
        explanation: {
          ru: 'Алгоритм сортировки пузырьком имеет квадратичную сложность O(n^2).',
          en: 'Bubble sort has quadratic complexity O(n^2).',
        },
      },
      {
        id: '2',
        statement: {
          ru: 'Поиск в глубину (DFS) всегда находит наикратший путь в графе.',
          en: 'Depth First Search (DFS) always finds the shortest path in a graph.',
        },
        correct: false,
        explanation: {
          ru: 'DFS не гарантирует наикратший путь, так как он может исследовать более длинные пути раньше.',
          en: 'DFS does not guarantee the shortest path as it may explore longer paths first.',
        },
      },
      {
        id: '3',
        statement: {
          ru: 'Алгоритм Дейкстры используется для нахождения кратчайшего пути в графе с отрицательными весами.',
          en: "Dijkstra's algorithm is used to find the shortest path in graphs with negative weights.",
        },
        correct: false,
        explanation: {
          ru: 'Алгоритм Дейкстры не работает с графами, содержащими отрицательные веса.',
          en: "Dijkstra's algorithm does not work with graphs containing negative weights.",
        },
      },
      {
        id: '4',
        statement: {
          ru: 'Динамическое программирование используется для решения задач, которые могут быть разделены на подзадачи.',
          en: 'Dynamic programming is used to solve problems that can be divided into subproblems.',
        },
        correct: true,
        explanation: {
          ru: 'Динамическое программирование эффективно решает задачи, которые могут быть разбиты на перекрывающиеся подзадачи.',
          en: 'Dynamic programming efficiently solves problems that can be divided into overlapping subproblems.',
        },
      },
      {
        id: '5',
        statement: {
          ru: 'Алгоритм быстрой сортировки имеет сложность O(n log n) в худшем случае.',
          en: 'Quick sort has a time complexity of O(n log n) in the worst case.',
        },
        correct: false,
        explanation: {
          ru: 'В худшем случае быстрая сортировка имеет сложность O(n^2), но в среднем случае – O(n log n).',
          en: 'In the worst case, quick sort has a time complexity of O(n^2), but in the average case, it is O(n log n).',
        },
      },
      {
        id: '6',
        statement: {
          ru: 'Алгоритм Кнута-Морриса-Пратта (KMP) использует предварительное вычисление частичных совпадений.',
          en: 'The Knuth-Morris-Pratt (KMP) algorithm uses precomputed partial matches.',
        },
        correct: true,
        explanation: {
          ru: 'Алгоритм KMP использует таблицу частичных совпадений, чтобы избежать ненужных сравнений в процессе поиска.',
          en: 'The KMP algorithm uses a partial match table to avoid unnecessary comparisons during the search.',
        },
      },
      {
        id: '7',
        statement: {
          ru: 'Алгоритм слияния (Merge Sort) работает за время O(n log n).',
          en: 'Merge Sort algorithm works in O(n log n) time.',
        },
        correct: true,
        explanation: {
          ru: 'Алгоритм слияния имеет сложность O(n log n), так как использует стратегию "разделяй и властвуй".',
          en: 'Merge sort has O(n log n) time complexity, as it uses the divide and conquer strategy.',
        },
      },
      {
        id: '8',
        statement: {
          ru: 'Графы могут быть ориентированными и неориентированными.',
          en: 'Graphs can be directed and undirected.',
        },
        correct: true,
        explanation: {
          ru: 'Графы бывают ориентированными, где ребра имеют направление, и неориентированными, где направление не важно.',
          en: 'Graphs can be directed, where edges have direction, and undirected, where direction does not matter.',
        },
      },
      {
        id: '9',
        statement: {
          ru: 'Алгоритм Флойда-Уоршелла находит кратчайшие пути между всеми парами вершин в графе.',
          en: 'The Floyd-Warshall algorithm finds the shortest paths between all pairs of vertices in a graph.',
        },
        correct: true,
        explanation: {
          ru: 'Алгоритм Флойда-Уоршелла находит кратчайшие пути между всеми парами вершин в графе за время O(n^3).',
          en: 'The Floyd-Warshall algorithm finds the shortest paths between all pairs of vertices in O(n^3) time.',
        },
      },
    ],
  },
];

/* export const MOCK_TRUE_FALSE_DATA: TrueFalseTask[] = [
  {
    id: 'tf-001',
    type: 'true_false',
    difficulty: 2,
    section: 'Core-js',
    tags: ['promises', 'async', 'functions'],
    time_limit: 8,
    title: {
      ru: 'Основы работы с Promise',
      en: 'Basics of Promise in JavaScript',
    },
    questions: [
      {
        id: '1',
        statement: 'Метод Promise.all() возвращает результаты в порядке завершения промисов.',
        correct: false,
        explanation:
          'Promise.all() сохраняет порядок входного массива, несмотря на порядок завершения промисов.',
      },
      {
        id: '2',
        statement: 'Метод Promise.resolve() используется для создания отклоненного промиса.',
        correct: false,
        explanation:
          'Promise.resolve() используется для создания выполненного промиса с переданным значением.',
      },
      {
        id: '3',
        statement: 'Метод Promise.all() работает только с массивами Promise объектов.',
        correct: true,
        explanation:
          'Метод Promise.all() ожидает массив или итерабельный объект, содержащий Promise объекты.',
      },
      {
        id: '4',
        statement:
          'Promise в JavaScript всегда выполняется асинхронно, даже если промис немедленно решен.',
        correct: true,
        explanation: 'Промисы всегда выполняются асинхронно, даже если они немедленно решены.',
      },
      {
        id: '5',
        statement:
          'Метод .then() возвращает новый Promise, который можно использовать для цепочки операций.',
        correct: true,
        explanation:
          'Метод .then() возвращает новый Promise, который позволяет создать цепочку асинхронных операций.',
      },
      {
        id: '6',
        statement:
          'Метод Promise.all() может обрабатывать как асинхронные функции, так и синхронные.',
        correct: true,
        explanation:
          'Promise.all() может быть использован для обработки как синхронных, так и асинхронных задач в одном массиве.',
      },
      {
        id: '7',
        statement:
          'Promise.all() завершится сразу же, как только один из промисов завершится с ошибкой.',
        correct: true,
        explanation:
          'Если хотя бы один промис в массиве завершится с ошибкой, Promise.all() отклоняется с этой ошибкой.',
      },
    ],
  },
  {
    id: 'tf-002',
    type: 'true_false',
    difficulty: 3,
    section: 'TypeScript',
    tags: ['types', 'interfaces', 'generics'],
    time_limit: 10,
    title: {
      ru: 'Типы данных в TypeScript',
      en: 'Data Types in TypeScript',
    },
    questions: [
      {
        id: '1',
        statement: 'TypeScript не поддерживает типы данных, такие как null или undefined.',
        correct: false,
        explanation:
          'TypeScript поддерживает типы null и undefined, и они могут быть использованы в коде.',
      },
      {
        id: '2',
        statement: 'TypeScript поддерживает только строгую типизацию.',
        correct: false,
        explanation:
          'TypeScript поддерживает как строгую, так и нестрогую типизацию в зависимости от настроек компилятора.',
      },
      {
        id: '3',
        statement:
          'Generics в TypeScript позволяют создавать обобщенные компоненты для работы с разными типами данных.',
        correct: true,
        explanation:
          'Generics позволяют создавать компоненты, которые могут работать с любыми типами данных, повышая гибкость кода.',
      },
      {
        id: '4',
        statement: 'TypeScript не поддерживает декораторы (decorators) в классовых компонентах.',
        correct: false,
        explanation:
          'TypeScript поддерживает декораторы (decorators) в классах, начиная с версии 1.6, но требует их включения через флаг компилятора.',
      },
      {
        id: '5',
        statement: 'Interfaces в TypeScript не могут содержать реализации методов.',
        correct: true,
        explanation:
          'Интерфейсы в TypeScript могут содержать только сигнатуры методов, но не их реализацию.',
      },
      {
        id: '6',
        statement: 'TypeScript поддерживает перегрузку функций (function overloading).',
        correct: true,
        explanation:
          'TypeScript поддерживает перегрузку функций, позволяя определять несколько сигнатур для одной функции.',
      },
      {
        id: '7',
        statement:
          'В TypeScript переменная с типом string всегда может быть использована как number.',
        correct: false,
        explanation:
          'Переменная с типом string не может быть использована как number без явного преобразования типов.',
      },
      {
        id: '8',
        statement: 'Перечисления в TypeScript могут быть строковыми или числовыми.',
        correct: true,
        explanation: 'TypeScript поддерживает как строковые, так и числовые перечисления.',
      },
      {
        id: '9',
        statement:
          'С помощью TypeScript можно создать тип, который будет совместим с несколькими другими типами.',
        correct: true,
        explanation:
          'TypeScript позволяет использовать объединение типов (union types), чтобы создать тип, который может быть совместим с несколькими другими типами.',
      },
      {
        id: '10',
        statement:
          'TypeScript всегда будет выявлять ошибки типов при компиляции, независимо от настроек компилятора.',
        correct: false,
        explanation:
          'Если компилятор настроен с флагом "strict" или "noImplicitAny", TypeScript может выявить ошибки типов, но при других настройках могут возникать проблемы с типами.',
      },
      {
        id: '11',
        statement:
          'TypeScript поддерживает условные типы, которые могут быть использованы для условной проверки типов.',
        correct: true,
        explanation:
          'Условные типы (conditional types) позволяют выбирать типы в зависимости от условий, улучшая гибкость кода.',
      },
    ],
  },
  {
    id: 'tf-003',
    type: 'true_false',
    difficulty: 2,
    section: 'React',
    tags: ['hooks', 'state', 'components'],
    time_limit: 8,
    title: {
      ru: 'Основы React',
      en: 'Basics of React',
    },
    questions: [
      {
        id: '1',
        statement: 'React использует виртуальный DOM для улучшения производительности.',
        correct: true,
        explanation:
          'Виртуальный DOM позволяет минимизировать количество операций с реальным DOM, повышая производительность.',
      },
      {
        id: '2',
        statement: 'Хуки в React могут быть использованы только внутри функциональных компонентов.',
        correct: true,
        explanation:
          'Хуки могут быть использованы только в функциональных компонентах, начиная с версии React 16.8.',
      },
      {
        id: '3',
        statement:
          'State в React всегда должен быть изменен с помощью метода setState, даже в функциональных компонентах.',
        correct: false,
        explanation:
          'В функциональных компонентах state изменяется с помощью useState и setState не используется.',
      },
      {
        id: '4',
        statement: 'React компоненты могут быть как функциональными, так и классовыми.',
        correct: true,
        explanation:
          'До появления хуков компоненты в React были только классовыми, но сейчас можно использовать и функциональные компоненты.',
      },
      {
        id: '5',
        statement: 'React не поддерживает передачу данных между компонентами через props.',
        correct: false,
        explanation: 'Props являются основным способом передачи данных между компонентами в React.',
      },
      {
        id: '6',
        statement: 'React предоставляет встроенную систему роутинга через библиотеку React Router.',
        correct: false,
        explanation:
          'React не предоставляет встроенной системы роутинга, но для этого существует сторонняя библиотека React Router.',
      },
      {
        id: '7',
        statement: 'Хуки useEffect и useLayoutEffect имеют одинаковое поведение.',
        correct: false,
        explanation:
          'useEffect выполняется после рендеринга, а useLayoutEffect — синхронно до рендеринга, что влияет на порядок их исполнения.',
      },
      {
        id: '8',
        statement: 'React поддерживает одностороннюю привязку данных (one-way data binding).',
        correct: true,
        explanation:
          'React использует одностороннюю привязку данных, что помогает управлять потоком данных от родительских компонентов к дочерним.',
      },
      {
        id: '9',
        statement: 'Компоненты React всегда должны возвращать только один элемент.',
        correct: true,
        explanation:
          'Компоненты React должны возвращать один корневой элемент, обычно это оборачивающий элемент типа <div>, или можно использовать React.Fragment.',
      },
      {
        id: '10',
        statement:
          'React предоставляет возможность использовать напрямую состояние браузера через useState.',
        correct: false,
        explanation:
          'React использует внутреннее состояние компонентов с помощью useState, а не состояние браузера, которое доступно через Web API.',
      },
    ],
  },
  {
    id: 'tf-004',
    type: 'true_false',
    difficulty: 2,
    section: 'HTML',
    tags: ['forms', 'elements', 'attributes'],
    time_limit: 7,
    title: {
      ru: 'Основы HTML',
      en: 'Basics of HTML',
    },
    questions: [
      {
        id: '1',
        statement: 'Тег <form> используется для создания таблиц в HTML.',
        correct: false,
        explanation:
          'Тег <form> используется для создания форм, а не таблиц. Для таблиц используется <table>.',
      },
      {
        id: '2',
        statement: 'Атрибут href в теге <a> указывает URL ссылки.',
        correct: true,
        explanation:
          'Атрибут href указывает адрес, на который ведет ссылка, и по которому происходит переход.',
      },
      {
        id: '3',
        statement:
          'Семантические элементы HTML, такие как <header>, <footer>, <section>, помогают улучшить доступность страницы.',
        correct: true,
        explanation:
          'Семантические элементы делают структуру страницы более понятной для поисковых систем и людей с ограниченными возможностями.',
      },
      {
        id: '4',
        statement: 'В HTML можно использовать только один <head> и один <body> на страницу.',
        correct: true,
        explanation:
          'HTML структура ограничивает количество элементов <head> и <body> на одну страницу до одного.',
      },
      {
        id: '5',
        statement: 'Элемент <input type="text"> используется для отображения кнопки.',
        correct: false,
        explanation:
          'Элемент <input type="text"> используется для ввода текста, а для кнопки используется <button> или <input type="button">.',
      },
      {
        id: '6',
        statement: 'Тег <img> используется для вставки изображений на страницу.',
        correct: true,
        explanation:
          'Тег <img> вставляет изображения с использованием атрибута src для указания пути к файлу.',
      },
      {
        id: '7',
        statement: 'HTML5 поддерживает аудио и видео теги для работы с мультимедийными файлами.',
        correct: true,
        explanation:
          'HTML5 добавил теги <audio> и <video>, позволяющие встраивать и управлять аудио- и видеоконтентом.',
      },
      {
        id: '8',
        statement: 'Элемент <link> используется для подключения JavaScript файлов к странице.',
        correct: false,
        explanation:
          'Элемент <link> используется для подключения внешних файлов стилей (CSS), а для JavaScript используется <script>.',
      },
    ],
  },
  {
    id: 'tf-005',
    type: 'true_false',
    difficulty: 3,
    section: 'Algorithms',
    tags: ['sorting', 'recursion', 'dynamic-programming'],
    time_limit: 12,
    title: {
      ru: 'Основы алгоритмов',
      en: 'Algorithms Basics',
    },
    questions: [
      {
        id: '1',
        statement: 'Алгоритм сортировки пузырьком работает за время O(n^2).',
        correct: true,
        explanation: 'Алгоритм сортировки пузырьком имеет квадратичную сложность O(n^2).',
      },
      {
        id: '2',
        statement: 'Поиск в глубину (DFS) всегда находит наикратший путь в графе.',
        correct: false,
        explanation:
          'DFS не гарантирует наикратший путь, так как он может исследовать более длинные пути раньше.',
      },
      {
        id: '3',
        statement:
          'Алгоритм Дейкстры используется для нахождения кратчайшего пути в графе с отрицательными весами.',
        correct: false,
        explanation: 'Алгоритм Дейкстры не работает с графами, содержащими отрицательные веса.',
      },
      {
        id: '4',
        statement:
          'Динамическое программирование используется для решения задач, которые могут быть разделены на подзадачи.',
        correct: true,
        explanation:
          'Динамическое программирование эффективно решает задачи, которые могут быть разбиты на перекрывающиеся подзадачи.',
      },
      {
        id: '5',
        statement: 'Алгоритм быстрой сортировки имеет сложность O(n log n) в худшем случае.',
        correct: false,
        explanation:
          'В худшем случае быстрая сортировка имеет сложность O(n^2), но в среднем случае – O(n log n).',
      },
      {
        id: '6',
        statement:
          'Алгоритм Кнута-Морриса-Пратта (KMP) использует предварительное вычисление частичных совпадений.',
        correct: true,
        explanation:
          'Алгоритм KMP использует таблицу частичных совпадений, чтобы избежать ненужных сравнений в процессе поиска.',
      },
      {
        id: '7',
        statement: 'Алгоритм слияния (Merge Sort) работает за время O(n log n).',
        correct: true,
        explanation:
          'Алгоритм слияния имеет сложность O(n log n), так как использует стратегию "разделяй и властвуй".',
      },
      {
        id: '8',
        statement: 'Графы могут быть ориентированными и неориентированными.',
        correct: true,
        explanation:
          'Графы бывают ориентированными, где ребра имеют направление, и неориентированными, где направление не важно.',
      },
      {
        id: '9',
        statement:
          'Алгоритм Флойда-Уоршелла находит кратчайшие пути между всеми парами вершин в графе.',
        correct: true,
        explanation:
          'Алгоритм Флойда-Уоршелла находит кратчайшие пути между всеми парами вершин в графе за время O(n^3).',
      },
    ],
  },
];
 */
