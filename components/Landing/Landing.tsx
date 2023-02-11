import Heading from '../UI/Heading/Heading';
import { useTranslation } from 'react-i18next';

export const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className="grid h-[calc(100vh-72px)]">
      <div className="self-center justify-self-center md:text-center">
        <Heading
          variant="h1"
          className="prose mb-3 text-2xl text-black md:text-6xl"
        >
          {t('hero.header')}
        </Heading>

        <Heading
          variant="h3"
          className="prose mb-14 text-base text-black md:mx-auto md:mt-10 md:text-2xl md:leading-9"
        >
          {t('hero.subHeader')}
        </Heading>
      </div>
    </div>
  );
};

export default Landing;
