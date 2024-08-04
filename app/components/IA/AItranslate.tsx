'use client';
import React, { useEffect, useState } from 'react';
import { useCompletion } from 'ai/react';
import toast from 'react-hot-toast';
import { useAI } from '../../hooks/useAI';
import useBrowserLanguage from '../../hooks/useBrowserLanguage';
import { languageOptions } from '../../constants';
import { Option } from '../../interfaces';
import InlineMode from './InlineMode';
import ModalMode from './ModalMode';

export interface AItranslateProps {
  mode: 'modal' | 'inline';
  value: string;
  source?: string;
  target?: Option;
  showLenguageSelector?: boolean;
}

export default function AItranslate({ mode, source, target, showLenguageSelector = true, value }: AItranslateProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [isRequesting, setIsRequesting] = useState<boolean>(false);
  const [targetLanguage, setTargetLanguage] = useState<Option | null>(target ? target : languageOptions[1]);
  const { openAIKey, openAIModel } = useAI();
  const language = useBrowserLanguage();
  const { complete, completion, isLoading, stop } = useCompletion({
    onResponse: () => setIsRequesting(false),
    onError: () => toast.error('No se pudo completar la traducción, Recuerda agregar tu API Key de OpenAI en la configuración de la aplicación.'),
  });

  useEffect(() => {
    if (language && !target) {
      const browserLanguage = languageOptions.find((option) => option.fullLocaleCode === language);
      if (browserLanguage) {
        setTargetLanguage(browserLanguage);
      }
    }
  }, [language, target]);

  const handleTranslate = async () => {
    if (targetLanguage) {
      setIsRequesting(true);
      setOpen(true);
      complete(value, {
        body: {
          prompt: value,
          model: openAIModel,
          apiKey: openAIKey,
          source,
          target: `${targetLanguage.languageName} (${targetLanguage.shortCode})`,
        } as { prompt: string; apiKey: string; model: string; source?: string; target: string },
      });
    }
  };

  const handleCloseModal = () => setOpen(false);
  const handleCancel = () => {
    stop();
    setIsRequesting(false);
  };

  if (mode === 'inline') return <InlineMode isLoading={isRequesting} isStreaming={isLoading} translatedText={completion} targetLanguage={targetLanguage} showLenguageSelector={showLenguageSelector} handleTranslate={handleTranslate} setTargetLanguage={setTargetLanguage} handleCancel={handleCancel} />;

  return (
    <ModalMode
      showModal={open}
      isLoading={isRequesting}
      isStreaming={isLoading}
      translatedText={completion}
      targetLanguage={targetLanguage}
      showLenguageSelector={showLenguageSelector}
      handleTranslate={handleTranslate}
      setTargetLanguage={setTargetLanguage}
      handleCancel={handleCancel}
      handleCloseModal={handleCloseModal}
    />
  );
}
