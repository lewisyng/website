import TechStackItem from '../TechStackItem/TechStackItem'
import Heading from '../UI/Heading/Heading'
import Text from '../UI/Text/Text'

export const TechStackCategory = ({ item }: { item: any }) => {
  return (
    <div>
      <div className="my-5 lg:mt-0">
        <Heading variant="h3" className="text-xl">
          {item.title}
        </Heading>

        {item.subTitle && <Text className="text-sm opacity-60">{item.subTitle}</Text>}
      </div>

      <div className={'grid gap-5'}>
        {item.technologies.map((technology: any, idx: number) => (
          <TechStackItem item={technology} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default TechStackCategory
