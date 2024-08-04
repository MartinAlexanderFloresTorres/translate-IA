'use client';
import { useEffect, useState } from 'react';
import { useCompletion } from 'ai/react';
import TranslationResultSkeleton from './TranslationResultSkeleton';
import { useAI } from '../hooks/useAI';
import LanguageSelectors from './LanguageSelectors';
import TranslationResult from './TranslationResult';
import TranslationForm from './TranslationForm';
import useBrowserLanguage from '../hooks/useBrowserLanguage';
import { languageOptions } from '../constants';
import toast from 'react-hot-toast';
import { Option } from '../interfaces';

export default function PlayGround() {
  const [text, setText] = useState<string>('');
  const [isRequesting, setIsRequesting] = useState<boolean>(false);
  const [sourceLanguage, setSourceLanguage] = useState<Option | null>(languageOptions[0]);
  const [targetLanguage, setTargetLanguage] = useState<Option | null>(languageOptions[1]);
  const { openAIKey, openAIModel } = useAI();
  const language = useBrowserLanguage();
  const { completion, isLoading, complete, stop, setCompletion } = useCompletion({ onResponse: () => setIsRequesting(false), onError: () => toast.error('No se pudo completar la traducción, Recuerda agregar tu API Key de OpenAI en la configuración de la aplicación.') });

  useEffect(() => {
    if (language) {
      const browserLanguage = languageOptions.find((option) => option.fullLocaleCode === language);
      if (browserLanguage) {
        setTargetLanguage(browserLanguage);
      }
    }
  }, [language]);

  const handleTranslate = async () => {
    if (sourceLanguage && targetLanguage) {
      setIsRequesting(true);
      complete(text, {
        body: {
          prompt: text,
          model: openAIModel,
          apiKey: openAIKey,
          source: `${sourceLanguage.languageName} (${sourceLanguage.shortCode})`,
          target: `${targetLanguage.languageName} (${targetLanguage.shortCode})`,
        } as { prompt: string; apiKey: string; model: string; source?: string; target: string },
      });
    }
  };

  const handleCancel = () => {
    stop();
    setIsRequesting(false);
  };

  const clearText = () => {
    setText('');
    setCompletion('');
  };

  return (
    <section className="w-full p-8 md:p-24">
      <div className="max-w-2xl mx-auto bg-white border border-gray-100 shadow-lg rounded-lg">
        <div className="bg-black text-white px-3 py-2 rounded-tl-lg rounded-tr-lg">
          <h1 className="text-base uppercase font-bold text-center">Traductor de idiomas</h1>
        </div>
        <div className="px-10 py-8 space-y-4">
          <LanguageSelectors sourceLanguage={sourceLanguage} targetLanguage={targetLanguage} onSourceLanguageChange={setSourceLanguage} onTargetLanguageChange={setTargetLanguage} disabled={isLoading || isRequesting} />
          <TranslationForm
            text={text}
            setText={setText}
            handleTranslate={handleTranslate}
            disabledConfirm={!text || isLoading || isRequesting || !sourceLanguage || !targetLanguage}
            disabledClear={!text || isLoading}
            isLoading={isRequesting}
            handleCancel={handleCancel}
            isStreaming={isLoading}
            clearText={clearText}
          />
          {isRequesting && <TranslationResultSkeleton />}
          {completion && <TranslationResult translatedText={completion} isStreaming={isLoading} />}
        </div>
      </div>
    </section>
  );
}
