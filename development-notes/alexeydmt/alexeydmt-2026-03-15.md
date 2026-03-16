# Code Review: Login Page

## 2026-03-15

Разбирался в реализации аутентификации и регистрации пользователей (@Igel-k)

Для работы с сервером используется axios

**Axios** — библиотека для HTTP запросов

---

Аутентификация и текущий пользователь завяза на паре **access_token** и **refresh_token**

![alt text](./images/image-5.png)

JWT-токены: Используется пара access + refresh токенов

access_token — для авторизованных запросов
refresh_token — для обновления access при истечении

Токены сохраняются в localStorage при логине и удаляются при выходе.

![alt text](./images/image-6.png)

Zustand store управляет состоянием авторизации:

![alt text](./images/image-7.png)

---

Регистрация(RegisterDialog.tsx):

После заполнения формы в RegisterDialog, - registerApi() отправляет запрос на сервер
При успехе — модалка закрывается, проверка login / password реализована на сервере
![alt text](./images/image-8.png)

Интересное:

Ошибки отображаются через MUI Alert компонент и автоматически скрываются через 5 секунд (useEffect с таймером)

![alt text](./images/image-9.png)
![alt text](./images/image-10.png)

Используется isAxiosError() для типизированной обработки ошибок, которые пришли с сервера, где последовательно проверяются ошибки в login, password & detail (общие ошибки)

![alt text](./images/image-11.png)

---