import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Heading from '../components/UI/Heading/Heading';

export const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative grid h-[calc(100vh-56px)] md:grid-cols-2">
        <div className="relative top-[50%] flex flex-col gap-4">
          <Heading variant="h3" className="text-4xl">
            {t('about.header')}
          </Heading>

          <Heading variant="h3" className="max-w-[60ch] text-base md:text-lg">
            {t('about.subHeader')}
          </Heading>
        </div>

        <div className="dhidden absolute bottom-0 z-[-1] h-[80%] w-[570px] justify-end self-end opacity-30 md:relative md:block">
          <Image
            src="/img/portraitTransparent.png"
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
      </div>

      {/* <div className="grid items-center justify-center px-5">
        <div className="grid h-screen justify-center text-center">
          <Heading
            variant="h1"
            className="max-w-[60ch] self-center text-2xl text-[#2D638A] md:text-6xl"
          >
            Die Welt liegt im digitalen Umbruch
          </Heading>
        </div>

        <div className="grid h-screen justify-center md:text-center">
          <Heading
            variant="h3"
            className="max-w-[60ch] self-center text-base md:text-2xl"
          >
            Diese Entwicklung birgt Chancen, die das Potenzial haben unser Leben
            maßgeblich zu gestalten. Im Mittelpunkt stehen für mich
            Webtechnologien, da sie die Vernetzung aller Menschen und
            Lebensbereiche ermöglichen, sowie unzählige neue Geschäftsfelder
            erzeugen und alte revolutionieren.
          </Heading>
        </div>
      </div> */}
    </>
  );
};

export default About;
