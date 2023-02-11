import { useTranslation } from 'react-i18next';
import Text from '../UI/Text/Text';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="ml-auto flex items-center gap-3">
      <button
        onClick={() => {
          i18n.changeLanguage('de');
        }}
      >
        <Text>DE</Text>
      </button>
      <span>-</span>
      <button
        onClick={() => {
          i18n.changeLanguage('en');
        }}
      >
        <Text>EN</Text>
      </button>
    </div>
  );
};
