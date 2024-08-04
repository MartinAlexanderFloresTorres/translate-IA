import Select from 'react-select';
import { languageOptions } from '../constants';
import { LanguageSelectorProps } from '../interfaces';
import { twMerge } from 'tailwind-merge';

export default function LanguageSelector({ language, disabled, noOptionsMessage, placeholder, className, onLanguage }: LanguageSelectorProps) {
  return (
    <Select
      options={languageOptions}
      getOptionLabel={(option) => option.languageName}
      getOptionValue={(option) => option.shortCode}
      value={language}
      onChange={onLanguage}
      className={twMerge('w-full', className)}
      placeholder={placeholder}
      noOptionsMessage={() => noOptionsMessage}
      isDisabled={disabled}
    />
  );
}
