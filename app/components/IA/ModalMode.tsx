import TranslationResultSkeleton from '../TranslationResultSkeleton';
import TranslationResult from '../TranslationResult';
import TranslateButton from './TranslateButton';
import Modal from '../Modal';
import { Option } from '@/app/interfaces';

interface ModalModeProps {
  showModal: boolean;
  isLoading: boolean;
  isStreaming: boolean;
  translatedText: string;
  showLenguageSelector?: boolean;
  targetLanguage: Option | null;
  handleTranslate: () => void;
  setTargetLanguage: (value: Option | null) => void;
  handleCancel: () => void;
  handleCloseModal: () => void;
}

export default function ModalMode({ showModal, isLoading, isStreaming, translatedText, showLenguageSelector, targetLanguage, handleTranslate, setTargetLanguage, handleCancel, handleCloseModal }: ModalModeProps) {
  return (
    <>
      <button className="text-sky-600 hover:underline disabled:hover:no-underline w-fit disabled:cursor-not-allowed text-sm" onClick={handleTranslate} disabled={isLoading}>
        {isLoading ? 'Traduciendo...' : `Traducir${targetLanguage ? ` a ${targetLanguage.languageName}` : ''}`}
      </button>

      {showModal && (
        <Modal onClose={handleCloseModal} disabledClose={isLoading}>
          <div className="w-full flex flex-col gap-4 relative">
            <div className="flex gap-4 justify-end">
              {isStreaming && (
                <button className="text-red-600 hover:underline disabled:hover:no-underline w-fit disabled:cursor-not-allowed text-sm" onClick={handleCancel} disabled={!isStreaming}>
                  Cancelar
                </button>
              )}
            </div>
            {isLoading && <TranslationResultSkeleton />}
            {translatedText && <TranslationResult translatedText={translatedText} isStreaming={isStreaming} />}
            <TranslateButton isLoading={isLoading} isStreaming={isStreaming} showLenguageSelector={showLenguageSelector} targetLanguage={targetLanguage} handleTranslate={handleTranslate} setTargetLanguage={setTargetLanguage} />
          </div>
        </Modal>
      )}
    </>
  );
}
