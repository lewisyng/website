import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { urlFor } from "../../sanity";
import Card from "../UI/Card/Card";
import Heading from "../UI/Heading/Heading";
import CustomLink from "../UI/Link/Link";
import Text from "../UI/Text/Text";

export const Project = ({ project }: { project: any }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const {
    _id,
    title,
    description,
    description_en,
    content,
    content_en,
    image,
    links: { github: githubUrl, testing: testingUrl },
  } = project;

  return (
    <div className="bg-white px-4 py-4">
      <Card className="flex h-full">
        {/* IMAGE */}
        {image && (
          <div className="relative mr-4 hidden h-[150px] flex-[0_0_150px] sm:block md:mt-8">
            <Image
              src={urlFor(image.asset._ref).url()}
              fill
              alt=""
              className="!h-auto !min-h-0 object-cover"
            />
          </div>
        )}

        {/* TITLE & DESCRIPTION */}
        <div className="prose flex grow flex-col">
          <div className="grow">
            {title && (
              <Heading variant="h3" className="mb-0 text-2xl">
                {title}
              </Heading>
            )}

            {description && (
              <Text className="text-sm">
                {language === "en" ? description_en : description}
              </Text>
            )}

            {content && (
              <PortableText value={language === "en" ? content_en : content} />
            )}
          </div>

          {/* LINKS */}
          <div>
            <div className={"flex gap-4"}>
              {testingUrl && (
                <CustomLink
                  as="a"
                  target="_blank"
                  href={testingUrl}
                  type="primary"
                >
                  {t("general.takeALook")}
                </CustomLink>
              )}

              {githubUrl && (
                <CustomLink as="a" target="_blank" href={githubUrl} type="text">
                  {t("general.github")}
                </CustomLink>
              )}

              {githubUrl && (
                <CustomLink
                  className="ml-auto"
                  as="Link"
                  target="_self"
                  href={{
                    pathname: "/project/[id]",
                    query: { id: _id },
                  }}
                  type="text"
                >
                  {t("general.details")}
                </CustomLink>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Project;
