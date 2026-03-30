import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MOCK_CODE_ORDERING_DATA } from '@/core/mock/codeOrderingData';

import CodeOrderingWidget from './CodeOrderingWidget';
import CodeOrderingQuizBody from './CodeOrderingQuizBody/CodeOrderingQuizBody';

describe('CodeOrderingWidget', () => {
  function setup() {
    render(
      <BrowserRouter>
        <CodeOrderingWidget data={MOCK_CODE_ORDERING_DATA[0]} />
      </BrowserRouter>,
    );
  }
  // Проверка на рендер без ошибок
  it('renders without errors', () => {
    setup();
  });

  // Проверка на верное отображение номера вопроса в прогресс баре
  it('renders current question number in progress bar', () => {
    setup();
    expect(screen.getByText('progressBar.question 1 progressBar.of 4')).toBeInTheDocument();
  });

  // Проверка на верное отображение процента прогресса в прогресс баре
  it('renders progress percent in progress bar', () => {
    setup();
    expect(screen.getByText('25%')).toBeInTheDocument();
  });

  // Проверка на отображение заголовка
  it('renders current question title', () => {
    render(<CodeOrderingQuizBody questions={MOCK_CODE_ORDERING_DATA[0].questions} />);
    expect(screen.getByText('codeOrdering.instruction')).toBeInTheDocument();
  });

  // Проверка на отображение текста задания
  it('renders current question text', () => {
    render(<CodeOrderingQuizBody questions={MOCK_CODE_ORDERING_DATA[0].questions} />);
    expect(
      screen.getByText(MOCK_CODE_ORDERING_DATA[0].questions[0].text['ru']),
    ).toBeInTheDocument();
  });
});
