// src/core/utils/validation.ts

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// Список распространённых паролей
const COMMON_PASSWORDS = [
  'password',
  'password123',
  'admin',
  'admin123',
  'admin111',
  'qwerty',
  'qwerty123',
  '12345678',
  '123456789',
  '1234567890',
  'letmein',
  'welcome',
  'monkey',
  'dragon',
  'master',
  'sunshine',
  'princess',
  'football',
  'shadow',
  'michael',
];

export function validateUsername(username: string): ValidationResult {
  const errors: string[] = [];

  if (!username.trim()) {
    errors.push('validation.username.required');
    return { isValid: false, errors };
  }

  if (username.trim().length < 3) {
    errors.push('validation.username.tooShort');
  }

  if (username.length > 15) {
    errors.push('validation.username.tooLong');
  }

  const validPattern = /^[a-zA-Z0-9_]+$/;
  if (!validPattern.test(username)) {
    errors.push('validation.username.invalidChars');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function validatePassword(password: string, username?: string): ValidationResult {
  const errors: string[] = [];

  if (!password) {
    errors.push('validation.password.required');
    return { isValid: false, errors };
  }

  if (password.length < 8) {
    errors.push('validation.password.tooShort');
  }

  if (username && password.toLowerCase() === username.toLowerCase()) {
    errors.push('validation.password.sameAsUsername');
  }

  if (/^\d+$/.test(password)) {
    errors.push('validation.password.onlyDigits');
  }

  if (COMMON_PASSWORDS.includes(password.toLowerCase())) {
    errors.push('validation.password.tooCommon');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function getPasswordStrength(password: string): {
  strength: 'weak' | 'medium' | 'strong';
  score: number;
} {
  let score = 0;

  // Длина
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;

  // Наличие букв в разных регистрах
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;

  // Наличие цифр
  if (/\d/.test(password)) score += 1;

  // Наличие спецсимволов
  if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) score += 1;

  let strength: 'weak' | 'medium' | 'strong' = 'weak';
  if (score >= 4) strength = 'strong';
  else if (score >= 2) strength = 'medium';

  return { strength, score };
}
