import { twMerge } from 'tailwind-merge';
import { TranslationResultProps } from '../interfaces';
import { useRef } from 'react';

export default function TranslationResult({ translatedText, isStreaming, className }: TranslationResultProps) {
  const textDivRef = useRef<HTMLDivElement>(null);

  return (
    <div className={twMerge('rounded-md bg-gray-50 p-4 flex gap-4 items-end justify-between animate-fadein', className)}>
      <div className={'text-gray-600 text-[18px] w-full break-words whitespace-normal'} dangerouslySetInnerHTML={{ __html: translatedText }} ref={textDivRef} />

      {isStreaming ? (
        <div className="flex items-center justify-center text-gray-400 bg-gray-50 rounded-md p-2 transition-colors">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      ) : (
        <button
          className="flex items-center justify-center text-gray-400 bg-gray-50 rounded-md p-2 hover:bg-gray-100 disabled:hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed active:bg-gray-100 active:text-gray-300 active:shadow-inner transition-colors active:scale-90"
          onClick={() => {
            navigator.clipboard.writeText(textDivRef.current?.innerText || '');
          }}
          title="Copiar traducción"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-copy" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
            <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
          </svg>
        </button>
      )}
    </div>
  );
}
