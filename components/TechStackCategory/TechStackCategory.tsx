import TechStackItem from '../TechStackItem/TechStackItem'
import Heading from '../UI/Heading/Heading'

export const TechStackCategory = ({ item }: { item: any }) => {
  return (
    <div>
      <Heading variant="h3" className="mt-5 lg:mt-0 mb-5 text-xl">{item.title}</Heading>

      <div className={'grid gap-5'}>
        {item.technologies.map((technology: any, idx: number) => (
          <TechStackItem item={technology} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default TechStackCategory
