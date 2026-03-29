import type { CodeOrderingTask } from '../feature/CodeOrderingWidget/types';

export const MOCK_CODE_ORDERING_DATA: CodeOrderingTask[] = [
  // easy
  {
    id: 301,
    type: 'code_ordering',
    time_limit: 8,
    title: {
      ru: 'Основы JS',
      en: 'JS Basics',
    },
    difficulty: 1,
    section: 'Core JS',
    tags: ['variables', 'conditions', 'functions'],
    questions: [
      {
        id: 1,
        text: {
          ru: 'Соберите функцию clamp для ограничения числа',
          en: 'Assemble a clamp function for limiting a number',
        },
        lines: [
          {
            id: 'line-1',
            code: 'function clamp(value, min, max) {',
            correctPosition: 0,
            indent: 0,
          },
          {
            id: 'line-2',
            code: 'const normalized = Number(value);',
            correctPosition: 1,
            indent: 1,
          },
          {
            id: 'line-3',
            code: 'if (normalized < min) return min;',
            correctPosition: 2,
            indent: 1,
          },
          {
            id: 'line-4',
            code: 'if (normalized > max) return max;',
            correctPosition: 3,
            indent: 1,
          },
          { id: 'line-5', code: 'return normalized;', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 0 },
        ],
      },
      {
        id: 2,
        text: {
          ru: 'Соберите функцию проверки доступа по возрасту',
          en: 'Assemble an access check by age function',
        },
        lines: [
          { id: 'line-1', code: 'function canAccess(age) {', correctPosition: 0, indent: 0 },
          {
            id: 'line-2',
            code: 'if (typeof age !== "number") return false;',
            correctPosition: 1,
            indent: 1,
          },
          { id: 'line-3', code: 'if (age < 0) return false;', correctPosition: 2, indent: 1 },
          { id: 'line-4', code: 'if (age >= 18) return true;', correctPosition: 3, indent: 1 },
          { id: 'line-5', code: 'return false;', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 0 },
        ],
      },
      {
        id: 3,
        text: {
          ru: 'Соберите функцию вычисления скидочной цены',
          en: 'Assemble a discounted price calculation function',
        },
        lines: [
          {
            id: 'line-1',
            code: 'function getDiscountPrice(price, percent) {',
            correctPosition: 0,
            indent: 0,
          },
          { id: 'line-2', code: 'const safePrice = Number(price);', correctPosition: 1, indent: 1 },
          {
            id: 'line-3',
            code: 'const safePercent = Number(percent);',
            correctPosition: 2,
            indent: 1,
          },
          {
            id: 'line-4',
            code: 'const discount = (safePrice * safePercent) / 100;',
            correctPosition: 3,
            indent: 1,
          },
          { id: 'line-5', code: 'return safePrice - discount;', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 0 },
        ],
      },
      {
        id: 4,
        text: {
          ru: 'Соберите функцию приветствия с fallback',
          en: 'Assemble a greeting function with fallback',
        },
        lines: [
          { id: 'line-1', code: 'function greetUser(name) {', correctPosition: 0, indent: 0 },
          {
            id: 'line-2',
            code: 'const trimmed = (name ?? "").trim();',
            correctPosition: 1,
            indent: 1,
          },
          { id: 'line-3', code: 'if (!trimmed) {', correctPosition: 2, indent: 1 },
          { id: 'line-4', code: 'return "Hello, guest!";', correctPosition: 3, indent: 2 },
          { id: 'line-5', code: '}', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: 'return `Hello, ${trimmed}!`;', correctPosition: 5, indent: 1 },
          { id: 'line-7', code: '}', correctPosition: 6, indent: 0 },
        ],
      },
    ],
  },

  {
    id: 302,
    type: 'code_ordering',
    time_limit: 8,
    title: {
      ru: 'Строки и числа',
      en: 'Strings and Numbers',
    },
    difficulty: 1,
    section: 'Core JS',
    tags: ['strings', 'numbers', 'template-literals'],
    questions: [
      {
        id: 1,
        text: {
          ru: 'Соберите функцию нормализации email',
          en: 'Assemble an email normalization function',
        },
        lines: [
          { id: 'line-1', code: 'function normalizeEmail(email) {', correctPosition: 0, indent: 0 },
          { id: 'line-2', code: 'const safe = String(email);', correctPosition: 1, indent: 1 },
          { id: 'line-3', code: 'const trimmed = safe.trim();', correctPosition: 2, indent: 1 },
          {
            id: 'line-4',
            code: 'const lower = trimmed.toLowerCase();',
            correctPosition: 3,
            indent: 1,
          },
          { id: 'line-5', code: 'return lower;', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 0 },
        ],
      },
      {
        id: 2,
        text: {
          ru: 'Соберите функцию форматирования валюты',
          en: 'Assemble a currency formatting function',
        },
        lines: [
          { id: 'line-1', code: 'function formatCurrency(value) {', correctPosition: 0, indent: 0 },
          { id: 'line-2', code: 'const amount = Number(value);', correctPosition: 1, indent: 1 },
          { id: 'line-3', code: 'const fixed = amount.toFixed(2);', correctPosition: 2, indent: 1 },
          { id: 'line-4', code: 'const withSign = `$${fixed}`;', correctPosition: 3, indent: 1 },
          { id: 'line-5', code: 'return withSign;', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 0 },
        ],
      },
      {
        id: 3,
        text: {
          ru: 'Соберите функцию подсчёта слов в строке',
          en: 'Assemble a word counting function for a string',
        },
        lines: [
          { id: 'line-1', code: 'function countWords(text) {', correctPosition: 0, indent: 0 },
          { id: 'line-2', code: 'const normalized = text.trim();', correctPosition: 1, indent: 1 },
          { id: 'line-3', code: 'if (!normalized) return 0;', correctPosition: 2, indent: 1 },
          {
            id: 'line-4',
            code: 'const words = normalized.split(/\\s+/);',
            correctPosition: 3,
            indent: 1,
          },
          { id: 'line-5', code: 'return words.length;', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 0 },
        ],
      },
      {
        id: 4,
        text: {
          ru: 'Соберите функцию получения инициалов',
          en: 'Assemble an initials getter function',
        },
        lines: [
          {
            id: 'line-1',
            code: 'function getInitials(first, last) {',
            correctPosition: 0,
            indent: 0,
          },
          {
            id: 'line-2',
            code: 'const a = first.trim().charAt(0).toUpperCase();',
            correctPosition: 1,
            indent: 1,
          },
          {
            id: 'line-3',
            code: 'const b = last.trim().charAt(0).toUpperCase();',
            correctPosition: 2,
            indent: 1,
          },
          { id: 'line-4', code: 'const combined = `${a}${b}`;', correctPosition: 3, indent: 1 },
          { id: 'line-5', code: 'return combined;', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 0 },
        ],
      },
    ],
  },

  {
    id: 303,
    type: 'code_ordering',
    time_limit: 8,
    title: {
      ru: 'Массивы и циклы',
      en: 'Arrays and Loops',
    },
    difficulty: 1,
    section: 'Core JS',
    tags: ['arrays', 'loops', 'conditions'],
    questions: [
      {
        id: 1,
        text: {
          ru: 'Соберите функцию суммы положительных чисел',
          en: 'Assemble a positive numbers sum function',
        },
        lines: [
          { id: 'line-1', code: 'function sumPositive(arr) {', correctPosition: 0, indent: 0 },
          { id: 'line-2', code: 'let sum = 0;', correctPosition: 1, indent: 1 },
          {
            id: 'line-3',
            code: 'for (let i = 0; i < arr.length; i++) {',
            correctPosition: 2,
            indent: 1,
          },
          { id: 'line-4', code: 'if (arr[i] > 0) sum += arr[i];', correctPosition: 3, indent: 2 },
          { id: 'line-5', code: '}', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: 'return sum;', correctPosition: 5, indent: 1 },
          { id: 'line-7', code: '}', correctPosition: 6, indent: 0 },
        ],
      },
      {
        id: 2,
        text: {
          ru: 'Соберите функцию поиска индекса элемента',
          en: 'Assemble an element index search function',
        },
        lines: [
          {
            id: 'line-1',
            code: 'function findIndexOf(arr, target) {',
            correctPosition: 0,
            indent: 0,
          },
          {
            id: 'line-2',
            code: 'for (let i = 0; i < arr.length; i++) {',
            correctPosition: 1,
            indent: 1,
          },
          { id: 'line-3', code: 'if (arr[i] === target) return i;', correctPosition: 2, indent: 2 },
          { id: 'line-4', code: '}', correctPosition: 3, indent: 1 },
          { id: 'line-5', code: 'return -1;', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 0 },
        ],
      },
      {
        id: 3,
        text: {
          ru: 'Соберите функцию разворота массива циклом',
          en: 'Assemble a loop-based array reverse function',
        },
        lines: [
          { id: 'line-1', code: 'function reverseLoop(arr) {', correctPosition: 0, indent: 0 },
          { id: 'line-2', code: 'const result = [];', correctPosition: 1, indent: 1 },
          {
            id: 'line-3',
            code: 'for (let i = arr.length - 1; i >= 0; i--) {',
            correctPosition: 2,
            indent: 1,
          },
          { id: 'line-4', code: 'result.push(arr[i]);', correctPosition: 3, indent: 2 },
          { id: 'line-5', code: '}', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: 'return result;', correctPosition: 5, indent: 1 },
          { id: 'line-7', code: '}', correctPosition: 6, indent: 0 },
        ],
      },
      {
        id: 4,
        text: {
          ru: 'Соберите функцию подсчёта чётных значений',
          en: 'Assemble an even values count function',
        },
        lines: [
          { id: 'line-1', code: 'function countEven(arr) {', correctPosition: 0, indent: 0 },
          { id: 'line-2', code: 'let count = 0;', correctPosition: 1, indent: 1 },
          { id: 'line-3', code: 'for (const value of arr) {', correctPosition: 2, indent: 1 },
          { id: 'line-4', code: 'if (value % 2 === 0) count += 1;', correctPosition: 3, indent: 2 },
          { id: 'line-5', code: '}', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: 'return count;', correctPosition: 5, indent: 1 },
          { id: 'line-7', code: '}', correctPosition: 6, indent: 0 },
        ],
      },
    ],
  },

  // medium
  {
    id: 304,
    type: 'code_ordering',
    time_limit: 10,
    title: {
      ru: 'Методы массивов',
      en: 'Array Methods',
    },
    difficulty: 2,
    section: 'Core JS',
    tags: ['array-methods', 'filter', 'reduce'],
    questions: [
      {
        id: 1,
        text: {
          ru: 'Соберите функцию фильтрации и сортировки цен',
          en: 'Assemble a prices filter and sort function',
        },
        lines: [
          {
            id: 'line-1',
            code: 'function getExpensiveSorted(prices) {',
            correctPosition: 0,
            indent: 0,
          },
          {
            id: 'line-2',
            code: 'const expensive = prices.filter((price) => price >= 100);',
            correctPosition: 1,
            indent: 1,
          },
          {
            id: 'line-3',
            code: 'const sorted = expensive.sort((a, b) => a - b);',
            correctPosition: 2,
            indent: 1,
          },
          {
            id: 'line-4',
            code: 'const result = sorted.map((price) => Number(price.toFixed(2)));',
            correctPosition: 3,
            indent: 1,
          },
          { id: 'line-5', code: 'return result;', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 0 },
        ],
      },
      {
        id: 2,
        text: {
          ru: 'Соберите функцию группировки слов по длине',
          en: 'Assemble a words grouping by length function',
        },
        lines: [
          { id: 'line-1', code: 'function groupByLength(words) {', correctPosition: 0, indent: 0 },
          {
            id: 'line-2',
            code: 'return words.reduce((acc, word) => {',
            correctPosition: 1,
            indent: 1,
          },
          { id: 'line-3', code: 'const len = word.length;', correctPosition: 2, indent: 2 },
          { id: 'line-4', code: 'if (!acc[len]) acc[len] = [];', correctPosition: 3, indent: 2 },
          { id: 'line-5', code: 'acc[len].push(word);', correctPosition: 4, indent: 2 },
          { id: 'line-6', code: 'return acc;', correctPosition: 5, indent: 2 },
          { id: 'line-7', code: '}, {});', correctPosition: 6, indent: 1 },
          { id: 'line-8', code: '}', correctPosition: 7, indent: 0 },
        ],
      },
      {
        id: 3,
        text: {
          ru: 'Соберите функцию суммы уникальных значений',
          en: 'Assemble a unique values sum function',
        },
        lines: [
          { id: 'line-1', code: 'function sumUnique(numbers) {', correctPosition: 0, indent: 0 },
          {
            id: 'line-2',
            code: 'const unique = Array.from(new Set(numbers));',
            correctPosition: 1,
            indent: 1,
          },
          {
            id: 'line-3',
            code: 'const total = unique.reduce((sum, n) => {',
            correctPosition: 2,
            indent: 1,
          },
          { id: 'line-4', code: 'return sum + n;', correctPosition: 3, indent: 2 },
          { id: 'line-5', code: '}, 0);', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: 'return total;', correctPosition: 5, indent: 1 },
          { id: 'line-7', code: '}', correctPosition: 6, indent: 0 },
        ],
      },
      {
        id: 4,
        text: {
          ru: 'Соберите функцию подготовки списка имён',
          en: 'Assemble a names list preparation function',
        },
        lines: [
          { id: 'line-1', code: 'function prepareNames(users) {', correctPosition: 0, indent: 0 },
          {
            id: 'line-2',
            code: 'const active = users.filter((user) => user.active);',
            correctPosition: 1,
            indent: 1,
          },
          {
            id: 'line-3',
            code: 'const names = active.map((user) => user.name.trim());',
            correctPosition: 2,
            indent: 1,
          },
          {
            id: 'line-4',
            code: 'const sorted = names.sort((a, b) => a.localeCompare(b));',
            correctPosition: 3,
            indent: 1,
          },
          { id: 'line-5', code: 'return sorted;', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 0 },
        ],
      },
    ],
  },

  {
    id: 305,
    type: 'code_ordering',
    time_limit: 10,
    title: {
      ru: 'Работа с объектами',
      en: 'Object Handling',
    },
    difficulty: 2,
    section: 'Core JS',
    tags: ['objects', 'spread', 'destructuring'],
    questions: [
      {
        id: 1,
        text: {
          ru: 'Соберите функцию безопасного чтения профиля',
          en: 'Assemble a safe profile reading function',
        },
        lines: [
          { id: 'line-1', code: 'function getProfileInfo(user) {', correctPosition: 0, indent: 0 },
          { id: 'line-2', code: 'const id = user?.id ?? null;', correctPosition: 1, indent: 1 },
          {
            id: 'line-3',
            code: 'const name = user?.name ?? "Unknown";',
            correctPosition: 2,
            indent: 1,
          },
          {
            id: 'line-4',
            code: 'const city = user?.address?.city ?? "N/A";',
            correctPosition: 3,
            indent: 1,
          },
          { id: 'line-5', code: 'return { id, name, city };', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 0 },
        ],
      },
      {
        id: 2,
        text: {
          ru: 'Соберите функцию обновления вложенного флага',
          en: 'Assemble a nested flag update function',
        },
        lines: [
          { id: 'line-1', code: 'function setAdmin(user, value) {', correctPosition: 0, indent: 0 },
          { id: 'line-2', code: 'return {', correctPosition: 1, indent: 1 },
          { id: 'line-3', code: '...user,', correctPosition: 2, indent: 2 },
          {
            id: 'line-4',
            code: 'meta: { ...user.meta, admin: value },',
            correctPosition: 3,
            indent: 2,
          },
          { id: 'line-5', code: '};', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 0 },
        ],
      },
      {
        id: 3,
        text: {
          ru: 'Соберите функцию сравнения объектов настроек',
          en: 'Assemble a settings objects comparison function',
        },
        lines: [
          { id: 'line-1', code: 'function sameSettings(a, b) {', correctPosition: 0, indent: 0 },
          { id: 'line-2', code: 'const keysA = Object.keys(a);', correctPosition: 1, indent: 1 },
          { id: 'line-3', code: 'const keysB = Object.keys(b);', correctPosition: 2, indent: 1 },
          {
            id: 'line-4',
            code: 'if (keysA.length !== keysB.length) return false;',
            correctPosition: 3,
            indent: 1,
          },
          {
            id: 'line-5',
            code: 'return keysA.every((key) => a[key] === b[key]);',
            correctPosition: 4,
            indent: 1,
          },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 0 },
        ],
      },
      {
        id: 4,
        text: {
          ru: 'Соберите функцию выбора публичных полей',
          en: 'Assemble a public fields selection function',
        },
        lines: [
          { id: 'line-1', code: 'function pickPublic(user) {', correctPosition: 0, indent: 0 },
          {
            id: 'line-2',
            code: 'const { id, name, avatar } = user;',
            correctPosition: 1,
            indent: 1,
          },
          {
            id: 'line-3',
            code: 'const profile = { id, name, avatar };',
            correctPosition: 2,
            indent: 1,
          },
          {
            id: 'line-4',
            code: 'const hasAvatar = Boolean(avatar);',
            correctPosition: 3,
            indent: 1,
          },
          {
            id: 'line-5',
            code: 'return { ...profile, hasAvatar };',
            correctPosition: 4,
            indent: 1,
          },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 0 },
        ],
      },
    ],
  },

  {
    id: 306,
    type: 'code_ordering',
    time_limit: 10,
    title: {
      ru: 'Асинхронный JS',
      en: 'Async JS',
    },
    difficulty: 2,
    section: 'Core JS',
    tags: ['async', 'promises', 'fetch'],
    questions: [
      {
        id: 1,
        text: {
          ru: 'Соберите функцию загрузки JSON с проверкой статуса',
          en: 'Assemble a JSON loader with status check',
        },
        lines: [
          { id: 'line-1', code: 'async function fetchJson(url) {', correctPosition: 0, indent: 0 },
          {
            id: 'line-2',
            code: 'const response = await fetch(url);',
            correctPosition: 1,
            indent: 1,
          },
          {
            id: 'line-3',
            code: 'if (!response.ok) throw new Error("Request failed");',
            correctPosition: 2,
            indent: 1,
          },
          {
            id: 'line-4',
            code: 'const data = await response.json();',
            correctPosition: 3,
            indent: 1,
          },
          { id: 'line-5', code: 'return data;', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 0 },
        ],
      },
      {
        id: 2,
        text: {
          ru: 'Соберите функцию retry с двумя попытками',
          en: 'Assemble a retry function with two attempts',
        },
        lines: [
          { id: 'line-1', code: 'async function retryTwice(fn) {', correctPosition: 0, indent: 0 },
          { id: 'line-2', code: 'try {', correctPosition: 1, indent: 1 },
          { id: 'line-3', code: 'return await fn();', correctPosition: 2, indent: 2 },
          { id: 'line-4', code: '} catch {', correctPosition: 3, indent: 1 },
          { id: 'line-5', code: 'return fn();', correctPosition: 4, indent: 2 },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 1 },
          { id: 'line-7', code: '}', correctPosition: 6, indent: 0 },
        ],
      },
      {
        id: 3,
        text: {
          ru: 'Соберите функцию параллельной загрузки профиля и задач',
          en: 'Assemble a parallel profile and tasks loading function',
        },
        lines: [
          {
            id: 'line-1',
            code: 'async function loadDashboard(userId) {',
            correctPosition: 0,
            indent: 0,
          },
          {
            id: 'line-2',
            code: 'const profileUrl = `/api/users/${userId}`;',
            correctPosition: 1,
            indent: 1,
          },
          {
            id: 'line-3',
            code: 'const tasksUrl = `/api/tasks?userId=${userId}`;',
            correctPosition: 2,
            indent: 1,
          },
          {
            id: 'line-4',
            code: 'const [profile, tasks] = await Promise.all([fetchJson(profileUrl), fetchJson(tasksUrl)]);',
            correctPosition: 3,
            indent: 1,
          },
          { id: 'line-5', code: 'return { profile, tasks };', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 0 },
        ],
      },
      {
        id: 4,
        text: {
          ru: 'Соберите функцию safeRequest с fallback',
          en: 'Assemble a safeRequest function with fallback',
        },
        lines: [
          {
            id: 'line-1',
            code: 'async function safeRequest(url, fallback) {',
            correctPosition: 0,
            indent: 0,
          },
          { id: 'line-2', code: 'try {', correctPosition: 1, indent: 1 },
          {
            id: 'line-3',
            code: 'const result = await fetchJson(url);',
            correctPosition: 2,
            indent: 2,
          },
          { id: 'line-4', code: 'return result;', correctPosition: 3, indent: 2 },
          { id: 'line-5', code: '} catch {', correctPosition: 4, indent: 1 },
          { id: 'line-6', code: 'return fallback;', correctPosition: 5, indent: 2 },
          { id: 'line-7', code: '}', correctPosition: 6, indent: 1 },
          { id: 'line-8', code: '}', correctPosition: 7, indent: 0 },
        ],
      },
    ],
  },

  // hard
  {
    id: 307,
    type: 'code_ordering',
    time_limit: 12,
    title: {
      ru: 'Продвинутые функции',
      en: 'Advanced Functions',
    },
    difficulty: 3,
    section: 'Core JS',
    tags: ['closures', 'currying', 'composition'],
    questions: [
      {
        id: 1,
        text: {
          ru: 'Соберите реализацию memoize для нескольких аргументов',
          en: 'Assemble memoize implementation for multiple arguments',
        },
        lines: [
          { id: 'line-1', code: 'function memoize(fn) {', correctPosition: 0, indent: 0 },
          { id: 'line-2', code: 'const cache = new Map();', correctPosition: 1, indent: 1 },
          { id: 'line-3', code: 'return function(...args) {', correctPosition: 2, indent: 1 },
          {
            id: 'line-4',
            code: 'const key = JSON.stringify(args);',
            correctPosition: 3,
            indent: 2,
          },
          {
            id: 'line-5',
            code: 'if (cache.has(key)) return cache.get(key);',
            correctPosition: 4,
            indent: 2,
          },
          {
            id: 'line-6',
            code: 'const value = fn.apply(this, args);',
            correctPosition: 5,
            indent: 2,
          },
          { id: 'line-7', code: 'cache.set(key, value);', correctPosition: 6, indent: 2 },
          { id: 'line-8', code: 'return value;', correctPosition: 7, indent: 2 },
          { id: 'line-9', code: '};', correctPosition: 8, indent: 1 },
          { id: 'line-10', code: '}', correctPosition: 9, indent: 0 },
        ],
      },
      {
        id: 2,
        text: {
          ru: 'Соберите compose для массива функций',
          en: 'Assemble compose for an array of functions',
        },
        lines: [
          { id: 'line-1', code: 'function compose(...fns) {', correctPosition: 0, indent: 0 },
          { id: 'line-2', code: 'return function(initial) {', correctPosition: 1, indent: 1 },
          {
            id: 'line-3',
            code: 'return fns.reduceRight((value, fn) => {',
            correctPosition: 2,
            indent: 2,
          },
          { id: 'line-4', code: 'return fn(value);', correctPosition: 3, indent: 3 },
          { id: 'line-5', code: '}, initial);', correctPosition: 4, indent: 2 },
          { id: 'line-6', code: '};', correctPosition: 5, indent: 1 },
          { id: 'line-7', code: '}', correctPosition: 6, indent: 0 },
        ],
      },
      {
        id: 3,
        text: {
          ru: 'Соберите curry для функции из трёх аргументов',
          en: 'Assemble curry for a three-argument function',
        },
        lines: [
          { id: 'line-1', code: 'function curry3(fn) {', correctPosition: 0, indent: 0 },
          { id: 'line-2', code: 'return function(a) {', correctPosition: 1, indent: 1 },
          { id: 'line-3', code: 'return function(b) {', correctPosition: 2, indent: 2 },
          { id: 'line-4', code: 'return function(c) {', correctPosition: 3, indent: 3 },
          { id: 'line-5', code: 'return fn(a, b, c);', correctPosition: 4, indent: 4 },
          { id: 'line-6', code: '};', correctPosition: 5, indent: 3 },
          { id: 'line-7', code: '};', correctPosition: 6, indent: 2 },
          { id: 'line-8', code: '};', correctPosition: 7, indent: 1 },
          { id: 'line-9', code: '}', correctPosition: 8, indent: 0 },
        ],
      },
      {
        id: 4,
        text: {
          ru: 'Соберите debounce с сохранением контекста',
          en: 'Assemble debounce with context preservation',
        },
        lines: [
          { id: 'line-1', code: 'function debounce(fn, delay) {', correctPosition: 0, indent: 0 },
          { id: 'line-2', code: 'let timer = null;', correctPosition: 1, indent: 1 },
          { id: 'line-3', code: 'return function(...args) {', correctPosition: 2, indent: 1 },
          { id: 'line-4', code: 'clearTimeout(timer);', correctPosition: 3, indent: 2 },
          { id: 'line-5', code: 'timer = setTimeout(() => {', correctPosition: 4, indent: 2 },
          { id: 'line-6', code: 'fn.apply(this, args);', correctPosition: 5, indent: 3 },
          { id: 'line-7', code: '}, delay);', correctPosition: 6, indent: 2 },
          { id: 'line-8', code: '};', correctPosition: 7, indent: 1 },
          { id: 'line-9', code: '}', correctPosition: 8, indent: 0 },
        ],
      },
    ],
  },

  {
    id: 308,
    type: 'code_ordering',
    time_limit: 12,
    title: {
      ru: 'Паттерны данных',
      en: 'Data Patterns',
    },
    difficulty: 3,
    section: 'Core JS',
    tags: ['arrays', 'map', 'set'],
    questions: [
      {
        id: 1,
        text: {
          ru: 'Соберите функцию deepClone для объектов и массивов',
          en: 'Assemble a deepClone function for objects and arrays',
        },
        lines: [
          { id: 'line-1', code: 'function deepClone(value) {', correctPosition: 0, indent: 0 },
          {
            id: 'line-2',
            code: 'if (value === null || typeof value !== "object") return value;',
            correctPosition: 1,
            indent: 1,
          },
          {
            id: 'line-3',
            code: 'const result = Array.isArray(value) ? [] : {};',
            correctPosition: 2,
            indent: 1,
          },
          { id: 'line-4', code: 'for (const key in value) {', correctPosition: 3, indent: 1 },
          {
            id: 'line-5',
            code: 'result[key] = deepClone(value[key]);',
            correctPosition: 4,
            indent: 2,
          },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 1 },
          { id: 'line-7', code: 'return result;', correctPosition: 6, indent: 1 },
          { id: 'line-8', code: '}', correctPosition: 7, indent: 0 },
        ],
      },
      {
        id: 2,
        text: {
          ru: 'Соберите функцию flatten для вложенного массива',
          en: 'Assemble a flatten function for nested array',
        },
        lines: [
          { id: 'line-1', code: 'function flatten(arr) {', correctPosition: 0, indent: 0 },
          {
            id: 'line-2',
            code: 'return arr.reduce((acc, item) => {',
            correctPosition: 1,
            indent: 1,
          },
          { id: 'line-3', code: 'if (Array.isArray(item)) {', correctPosition: 2, indent: 2 },
          {
            id: 'line-4',
            code: 'return acc.concat(flatten(item));',
            correctPosition: 3,
            indent: 3,
          },
          { id: 'line-5', code: '}', correctPosition: 4, indent: 2 },
          { id: 'line-6', code: 'return acc.concat(item);', correctPosition: 5, indent: 2 },
          { id: 'line-7', code: '}, []);', correctPosition: 6, indent: 1 },
          { id: 'line-8', code: '}', correctPosition: 7, indent: 0 },
        ],
      },
      {
        id: 3,
        text: {
          ru: 'Соберите deepEqual для плоских объектов',
          en: 'Assemble deepEqual for flat objects',
        },
        lines: [
          { id: 'line-1', code: 'function deepEqual(a, b) {', correctPosition: 0, indent: 0 },
          { id: 'line-2', code: 'if (a === b) return true;', correctPosition: 1, indent: 1 },
          {
            id: 'line-3',
            code: 'if (!a || !b || typeof a !== "object" || typeof b !== "object") return false;',
            correctPosition: 2,
            indent: 1,
          },
          { id: 'line-4', code: 'const keysA = Object.keys(a);', correctPosition: 3, indent: 1 },
          { id: 'line-5', code: 'const keysB = Object.keys(b);', correctPosition: 4, indent: 1 },
          {
            id: 'line-6',
            code: 'if (keysA.length !== keysB.length) return false;',
            correctPosition: 5,
            indent: 1,
          },
          {
            id: 'line-7',
            code: 'return keysA.every((key) => a[key] === b[key]);',
            correctPosition: 6,
            indent: 1,
          },
          { id: 'line-8', code: '}', correctPosition: 7, indent: 0 },
        ],
      },
      {
        id: 4,
        text: {
          ru: 'Соберите функцию groupBy для массива объектов',
          en: 'Assemble a groupBy function for object array',
        },
        lines: [
          { id: 'line-1', code: 'function groupBy(items, key) {', correctPosition: 0, indent: 0 },
          {
            id: 'line-2',
            code: 'return items.reduce((acc, item) => {',
            correctPosition: 1,
            indent: 1,
          },
          { id: 'line-3', code: 'const group = item[key];', correctPosition: 2, indent: 2 },
          {
            id: 'line-4',
            code: 'if (!acc[group]) acc[group] = [];',
            correctPosition: 3,
            indent: 2,
          },
          { id: 'line-5', code: 'acc[group].push(item);', correctPosition: 4, indent: 2 },
          { id: 'line-6', code: 'return acc;', correctPosition: 5, indent: 2 },
          { id: 'line-7', code: '}, {});', correctPosition: 6, indent: 1 },
          { id: 'line-8', code: '}', correctPosition: 7, indent: 0 },
        ],
      },
    ],
  },

  {
    id: 309,
    type: 'code_ordering',
    time_limit: 12,
    title: {
      ru: 'Асинхронные паттерны',
      en: 'Async Patterns',
    },
    difficulty: 3,
    section: 'Core JS',
    tags: ['promises', 'retry', 'timeout'],
    questions: [
      {
        id: 1,
        text: {
          ru: 'Соберите withTimeout для асинхронной операции',
          en: 'Assemble withTimeout for async operation',
        },
        lines: [
          {
            id: 'line-1',
            code: 'function withTimeout(promise, ms) {',
            correctPosition: 0,
            indent: 0,
          },
          {
            id: 'line-2',
            code: 'const timeoutPromise = new Promise((_, reject) => {',
            correctPosition: 1,
            indent: 1,
          },
          {
            id: 'line-3',
            code: 'setTimeout(() => reject(new Error("Timeout")), ms);',
            correctPosition: 2,
            indent: 2,
          },
          { id: 'line-4', code: '});', correctPosition: 3, indent: 1 },
          {
            id: 'line-5',
            code: 'const raced = Promise.race([promise, timeoutPromise]);',
            correctPosition: 4,
            indent: 1,
          },
          { id: 'line-6', code: 'return raced;', correctPosition: 5, indent: 1 },
          { id: 'line-7', code: '}', correctPosition: 6, indent: 0 },
        ],
      },
      {
        id: 2,
        text: {
          ru: 'Соберите функцию последовательного выполнения задач',
          en: 'Assemble a sequential tasks execution function',
        },
        lines: [
          {
            id: 'line-1',
            code: 'async function runSequential(tasks) {',
            correctPosition: 0,
            indent: 0,
          },
          { id: 'line-2', code: 'const result = [];', correctPosition: 1, indent: 1 },
          { id: 'line-3', code: 'for (const task of tasks) {', correctPosition: 2, indent: 1 },
          { id: 'line-4', code: 'const value = await task();', correctPosition: 3, indent: 2 },
          { id: 'line-5', code: 'result.push(value);', correctPosition: 4, indent: 2 },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 1 },
          { id: 'line-7', code: 'return result;', correctPosition: 6, indent: 1 },
          { id: 'line-8', code: '}', correctPosition: 7, indent: 0 },
        ],
      },
      {
        id: 3,
        text: {
          ru: 'Соберите функцию allSettledSummary',
          en: 'Assemble an allSettledSummary function',
        },
        lines: [
          {
            id: 'line-1',
            code: 'async function allSettledSummary(promises) {',
            correctPosition: 0,
            indent: 0,
          },
          {
            id: 'line-2',
            code: 'const settled = await Promise.allSettled(promises);',
            correctPosition: 1,
            indent: 1,
          },
          {
            id: 'line-3',
            code: 'return settled.reduce((acc, item) => {',
            correctPosition: 2,
            indent: 1,
          },
          { id: 'line-4', code: 'acc[item.status] += 1;', correctPosition: 3, indent: 2 },
          { id: 'line-5', code: 'return acc;', correctPosition: 4, indent: 2 },
          {
            id: 'line-6',
            code: '}, { fulfilled: 0, rejected: 0 });',
            correctPosition: 5,
            indent: 1,
          },
          { id: 'line-7', code: '}', correctPosition: 6, indent: 0 },
        ],
      },
      {
        id: 4,
        text: {
          ru: 'Соберите функцию повторов с паузой',
          en: 'Assemble a retries with delay function',
        },
        lines: [
          {
            id: 'line-1',
            code: 'async function retryWithDelay(fn, attempts, delayMs) {',
            correctPosition: 0,
            indent: 0,
          },
          { id: 'line-2', code: 'let lastError = null;', correctPosition: 1, indent: 1 },
          {
            id: 'line-3',
            code: 'for (let i = 0; i < attempts; i++) {',
            correctPosition: 2,
            indent: 1,
          },
          {
            id: 'line-4',
            code: 'try { return await fn(); } catch (error) { lastError = error; }',
            correctPosition: 3,
            indent: 2,
          },
          {
            id: 'line-5',
            code: 'await new Promise((resolve) => setTimeout(resolve, delayMs));',
            correctPosition: 4,
            indent: 2,
          },
          { id: 'line-6', code: '}', correctPosition: 5, indent: 1 },
          { id: 'line-7', code: 'throw lastError;', correctPosition: 6, indent: 1 },
          { id: 'line-8', code: '}', correctPosition: 7, indent: 0 },
        ],
      },
    ],
  },
];
