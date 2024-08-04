import { LanguageModel } from 'ai';

export interface TranslationFormProps {
  text: string;
  isLoading: boolean;
  disabledConfirm?: boolean;
  disabledClear?: boolean;
  isStreaming: boolean;
  handleCancel: () => void;
  setText: (text: string) => void;
  clearText: () => void;
  handleTranslate: () => void;
}

export interface LanguageSelectorsProps {
  sourceLanguage: Option | null;
  targetLanguage: Option | null;
  disabled: boolean;
  onSourceLanguageChange: (selectedOption: Option | null) => void;
  onTargetLanguageChange: (selectedOption: Option | null) => void;
}

export interface LanguageSelectorProps {
  language: Option | null;
  disabled: boolean;
  placeholder?: string;
  className?: string;
  noOptionsMessage?: string;
  onLanguage: (selectedOption: Option | null) => void;
}

export interface TranslationResultProps {
  translatedText: string;
  isStreaming: boolean;
  className?: string;
}

export interface Option {
  languageName: string;
  shortCode: string;
  fullLocaleCode: string;
}
[];

export interface TranslateProps {
  model: LanguageModel;
  text: string;
  source?: string;
  target: string;
  callback: (values: { currentText: string; part: string; isStreaming: boolean }) => void;
}

export interface AItranslateProps {
  text: string;
  source?: string;
  target: string;
  callback: (values: { currentText: string; part: string; isStreaming: boolean }) => void;
}

export * from './movie';
export * from './review';
