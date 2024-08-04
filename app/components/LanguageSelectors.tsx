import { LanguageSelectorsProps } from '../interfaces';
import LanguageSelector from './LanguageSelector';

export default function LanguageSelectors({ sourceLanguage, targetLanguage, disabled, onSourceLanguageChange, onTargetLanguageChange }: LanguageSelectorsProps) {
  return (
    <div className="flex items-center gap-4">
      <LanguageSelector language={sourceLanguage} onLanguage={onSourceLanguageChange} className="w-full" placeholder="Selecciona el idioma de origen" noOptionsMessage={'No se encontraron idiomas'} disabled={disabled} />
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="min-w-4 min-h-4 h-4 w-4 text-gray-300">
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
      <LanguageSelector language={targetLanguage} onLanguage={onTargetLanguageChange} className="w-full" placeholder="Selecciona el idioma de destino" noOptionsMessage={'No se encontraron idiomas'} disabled={disabled} />
    </div>
  );
}
