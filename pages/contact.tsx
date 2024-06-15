import { useTranslation } from "next-i18next";
import Head from "next/head";
import Heading from "../components/UI/Heading/Heading";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Lewis Young - Kontakt</title>
      </Head>

      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center">
        <div className="text-center">
          <Heading variant="h3">Lewis Young</Heading>

          <Heading variant="h4">
            {t("contact.city")} | {t("contact.country")}
          </Heading>

          <Heading variant="h4">
            <a href="mailto:lewisy13@gmail.com" className="underline">
              lewisy13(at)gmail.com
            </a>
          </Heading>

          <Heading variant="h4">
            <a
              href="https://www.linkedin.com/in/lewis-young-276603164/"
              className="underline"
              target="blank"
              rel="noopener noreferer"
            >
              LinkedIn
            </a>
          </Heading>
        </div>
      </div>
    </>
  );
};

export default Contact;
