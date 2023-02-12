import { useTranslation } from 'react-i18next';
import TechStackItem from '../TechStackItem/TechStackItem';
import Heading from '../UI/Heading/Heading';
import Text from '../UI/Text/Text';

export const TechStackCategory = ({ item }: { item: any }) => {
  const {
    i18n: { language },
  } = useTranslation();
  return (
    <div>
      <div className="my-5 space-y-2 lg:mt-0">
        <Heading variant="h3" className="text-xl">
          {item.title}
        </Heading>

        {item.subTitle && (
          <Text className="text-sm opacity-60">
            {language === 'de' ? item.subTitle : item.subTitle_en}
          </Text>
        )}
      </div>

      <div className={'grid gap-5'}>
        {item.technologies.map((technology: any, idx: number) => (
          <TechStackItem item={technology} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default TechStackCategory;
