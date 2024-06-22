import Image from "next/image";
import Heading from "../UI/Heading/Heading";
import { useTranslation } from "react-i18next";

export const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className="grid h-[calc(100vh-72px)] grid-cols-12">
      <div className="col-span-6 self-center justify-self-center p-4">
        <Heading
          variant="h1"
          className="prose mb-2 text-2xl text-black md:text-7xl"
        >
          {t("hero.header")}
        </Heading>

        <Heading
          variant="h2"
          className="prose text-base text-black md:mx-auto md:text-2xl md:leading-9"
          >
          {t("hero.subHeader")}
        </Heading>
      </div>

      <div className="relative col-span-6">
        <Image
          src="/img/headshot.jpeg"
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Landing;
