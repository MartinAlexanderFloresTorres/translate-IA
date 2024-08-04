import { Option } from '@/app/interfaces';
import LanguageSelector from '../LanguageSelector';
import { twMerge } from 'tailwind-merge';

interface TranslateButtonProps {
  isLoading: boolean;
  isStreaming: boolean;
  showLenguageSelector?: boolean;
  targetLanguage: any;
  handleTranslate: () => void;
  setTargetLanguage: (value: Option | null) => void;
}

export default function TranslateButton({ isLoading, isStreaming, showLenguageSelector, targetLanguage, handleTranslate, setTargetLanguage }: TranslateButtonProps) {
  return (
    <div className="flex flex-wrap justify-end items-center gap-4">
      {showLenguageSelector && <LanguageSelector className="min-w-36 w-fit" language={targetLanguage} disabled={isLoading || isStreaming} onLanguage={(value) => setTargetLanguage(value)} />}

      <button
        className="relative w-fit min-w-32 h-[48px] flex items-center justify-center whitespace-nowrap bg-black text-white hover:bg-opacity-60 disabled:hover:bg-black disabled:cursor-not-allowed disabled:opacity-50 rounded-md px-6 py-3 text-sm font-medium shadow-sm transition-colors"
        disabled={isLoading || isStreaming}
        onClick={handleTranslate}
      >
        <span className={twMerge('transition-opacity', isLoading ? 'opacity-0' : 'opacity-100')}>Traducir 🌍</span>
        {isLoading && (
          <div className="absolute flex items-center justify-center w-full h-full bg-black/90 rounded-md">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )}
      </button>
    </div>
  );
}
