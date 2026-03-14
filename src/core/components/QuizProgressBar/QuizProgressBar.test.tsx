import { render, screen } from '@testing-library/react';
import QuizProgressBar from './QuizProgressBar';

describe('QuizProgressBar', () => {
  function setup(props = {}) {
    const defaultProps = {
      currentQuestionNumber: 2,
      questionsCount: 5,
    };

    render(<QuizProgressBar {...defaultProps} {...props} />);
  }

  it('renders without errors', () => {
    setup();
  });

  it('renders with correct current question', () => {
    setup();

    const currentQuestion = screen.getByText('Вопрос 2 из 5');

    expect(currentQuestion).toBeInTheDocument();
  });

  it('renders with correct progress', () => {
    setup();

    const progress = screen.getByText('40%');

    expect(progress).toBeInTheDocument();
  });
});
