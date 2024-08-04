import { twMerge } from 'tailwind-merge';
import { TranslationFormProps } from '../interfaces';

export default function TranslationForm({ text, isLoading, disabledConfirm, disabledClear, isStreaming, clearText, handleCancel, setText, handleTranslate }: TranslationFormProps) {
  return (
    <div className="flex items-start flex-col md:flex-row gap-2">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex min-h-[104px] max-h-80 w-full placeholder:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 rounded-md border border-input bg-background p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
        placeholder="Ingresa el texto que deseas traducir"
        disabled={isLoading}
      ></textarea>
      <div className="ml-auto flex flex-row md:flex-col gap-2 min-w-40">
        {!isStreaming ? (
          <button
            className="relative w-full min-w-32 h-[48px] flex items-center justify-center whitespace-nowrap bg-black text-white hover:bg-opacity-60 disabled:hover:bg-black disabled:opacity-50 rounded-md px-6 py-3 text-sm font-medium shadow-sm transition-colors"
            disabled={disabledConfirm}
            onClick={handleTranslate}
          >
            <span className={twMerge('transition-opacity', isLoading ? 'opacity-0' : 'opacity-100')}>Traducir 🌍</span>
            {isLoading && (
              <div className="absolute flex items-center justify-center w-full h-full bg-black/90 rounded-md">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            )}
          </button>
        ) : (
          <button type="button" className="w-full min-w-32 h-[48px] flex items-center justify-center text-red-400 bg-red-50 hover:bg-red-100 hover:text-red-500  rounded-md p-2 transition-colors" onClick={handleCancel} title="Cancelar traducción">
            cancelar
          </button>
        )}

        <button
          className="w-full min-w-32 h-[48px] flex items-center justify-center whitespace-nowrap bg-gray-50 hover:bg-gray-100 disabled:hover:bg-gray-50 disabled:opacity-50 rounded-md px-6 py-3 text-sm font-medium shadow-sm transition-colors"
          type="button"
          disabled={disabledClear}
          onClick={clearText}
        >
          Limpiar
        </button>
      </div>
    </div>
  );
}
