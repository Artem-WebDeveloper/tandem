# update quize

Из-за внедрения локализации пришлось пересмотреть структуру квизов, теперь каждый вопрос и варианты ответов языковую версию(ru & en). 

Как и прошлый раз пришлось использовать несколько ии, так как в какой-то момент они переставали понимать что от них нужно.

Потратил много времени, но в итоге цель достигнута: квизы успешно адаптированы под локализацию и отправлены на бэк.

Структура: 

```json
[
  {
    "type": "single_choice",
    "difficulty": 1,
    "section": "HTML",
    "time_limit": 12,
    "title": {
      "ru": "Основы HTML",
      "en": "HTML Basics"
    },
    "description": {
      "ru": "Базовые вопросы по HTML разметке и структуре документа",
      "en": "Basic questions about HTML markup and document structure"
    },
    "tags": [
      "html",
      "easy"
    ],
    "questions": [
      {
        "id": 1,
        "text": {
          "ru": "Какой тег является корневым для HTML документа?",
          "en": "Which tag is the root element?"
        },
        "options": [
          {
            "id": "a",
            "text": {
              "ru": "<html>",
              "en": "<html>"
            }
          },
          {
            "id": "b",
            "text": {
              "ru": "<body>",
              "en": "<body>"
            }
          },
          {
            "id": "c",
            "text": {
              "ru": "<head>",
              "en": "<head>"
            }
          },
          {
            "id": "d",
            "text": {
              "ru": "<root>",
              "en": "<root>"
            }
          }
        ],
        "correct_answer": "a"
      },
    ]
  }
]

```