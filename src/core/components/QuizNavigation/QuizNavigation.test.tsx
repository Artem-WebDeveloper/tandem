import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import QuizNavigation from './QuizNavigation';

describe('QuizNavigation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const inc = vi.fn();
  const dec = vi.fn();
  const submit = vi.fn();
  const questionsCount = 5;

  function setup(props = {}) {
    const defaultProps = {
      increaseQuestionNumber: inc,
      decreaseQuestionNumber: dec,
      onAnswersSubmit: submit,
      currentQuestionNumber: 0,
      questionsCount,
      isAnswerGiven: false,
    };

    render(<QuizNavigation {...defaultProps} {...props} />);
  }

  it('renders without errors', () => {
    setup();
  });

  describe('proceeding', () => {
    it('not allows proceeding if answer is not given', () => {
      setup();

      const proceedButton = screen.getByRole('button', { name: 'Следующий вопрос' });

      expect(proceedButton).toBeDisabled();
    });

    it('allows proceeding if answer is given', () => {
      setup({ isAnswerGiven: true });

      const proceedButton = screen.getByRole('button', { name: 'Следующий вопрос' });

      expect(proceedButton).toBeEnabled();
    });

    it('increaseQuestionNumber is called once on proceed button click', async () => {
      setup({ isAnswerGiven: true });

      const proceedButton = screen.getByRole('button', { name: 'Следующий вопрос' });

      await userEvent.click(proceedButton);

      expect(inc).toHaveBeenCalledOnce();
    });
  });

  describe('moving back', () => {
    it('not allows moving back on the first question', () => {
      setup();

      const backButton = screen.getByRole('button', { name: 'Назад' });

      expect(backButton).toBeDisabled();
    });

    it('allows moving back starting from the second question', () => {
      setup({ currentQuestionNumber: 1 });

      const backButton = screen.getByRole('button', { name: 'Назад' });

      expect(backButton).toBeEnabled();
    });

    it('decreaseQuestionNumber is called once on back button click', async () => {
      setup({ currentQuestionNumber: 1 });

      const backButton = screen.getByRole('button', { name: 'Назад' });

      await userEvent.click(backButton);

      expect(dec).toHaveBeenCalledOnce();
    });
  });

  describe('finishing', () => {
    it('shows finish button if it is the last question', () => {
      setup({ currentQuestionNumber: questionsCount - 1 });

      const finishButton = screen.getByRole('button', { name: 'Завершить' });

      expect(finishButton).toBeInTheDocument();
    });

    it('allows finishing quiz if answer to the last question is given', () => {
      setup({ currentQuestionNumber: questionsCount - 1, isAnswerGiven: true });

      const finishButton = screen.getByRole('button', { name: 'Завершить' });

      expect(finishButton).toBeEnabled();
    });

    it('onAnswersSubmit is called once on finish button click', async () => {
      setup({ currentQuestionNumber: questionsCount - 1, isAnswerGiven: true });

      const finishButton = screen.getByRole('button', { name: 'Завершить' });

      await userEvent.click(finishButton);

      expect(submit).toHaveBeenCalledOnce();
    });
  });
});
