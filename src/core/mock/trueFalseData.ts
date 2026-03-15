import type { TrueFalseTask } from '../feature/TrueFalseWidget/types';

export const MOCK_TRUE_FALSE_DATA: TrueFalseTask[] = [
  {
    id: 'tf-001',
    type: 'true_false',
    difficulty: 2,
    section: 'Core-js',
    tags: ['promises', 'async', 'functions'],
    title: 'Основы работы с Promise',
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
    title: 'Типы данных в TypeScript',
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
    title: 'Основы React',
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
    title: 'Основы HTML',
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
    title: 'Основы алгоритмов',
    questions: [
      {
        id: '1',
        statement: 'Алгоритм сортировки пузырьком работает за время O(n^2).',
        correct: true,
        explanation: 'Алгоритм сортировки пузырьком имеет квадратичную сложность O(n^2).',
      },
      {
        id: '2',
        statement: 'Поиск в глубину (DFS) всегда находит наикратчайший путь в графе.',
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
